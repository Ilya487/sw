import React, { useEffect, useState } from "react";
import EntityList from "./EntityList/EntityList";
import { setEntityPage } from "../../API/setEntityPage";
import { useSearchParams } from "react-router-dom";
import styles from "./EntityPage.module.scss";
import Preloader from "./Preloader/Preloader";
import Pagination from "./Pagination/Pagination";
import { useMatchMedia } from "../../hooks/useMatchMedia";

const EntityPage = ({ entity }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [maxPaginationBtn, setMaxPaginationBtn] = useState(10);

  async function getEntity() {
    setIsLoading(true);
    try {
      const data = await setEntityPage(searchParams.get("page"), entity);
      setPageInfo(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getEntity();
  }, [searchParams.get("page")]);

  const setCurrentPage = (num) => {
    setSearchParams({ page: num });
  };

  useMatchMedia(
    [
      {
        media: "(max-width:570px)",
        callback() {
          setMaxPaginationBtn(7);
        },
      },
      {
        media: "(max-width:400px)",
        callback() {
          setMaxPaginationBtn(5);
        },
      },
    ],
    () => setMaxPaginationBtn(10)
  );

  return isLoading ? (
    <Preloader />
  ) : (
    <div className={styles["entity-list"]}>
      <div className="container">
        <EntityList entityList={pageInfo.results} />
        <Pagination
          totalCount={pageInfo.count}
          totalItemsOnPage={10}
          currentPage={+searchParams.get("page")}
          maxButtonsOnPage={maxPaginationBtn}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default EntityPage;
