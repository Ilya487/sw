import React, { useEffect, useRef, useState } from "react";
import EntityList from "./EntityList/EntityList";
import { setEntityPage } from "../../API/setEntityPage";
import { useSearchParams } from "react-router-dom";
import styles from "./EntityPage.module.scss";
import Preloader from "./Preloader/Preloader";
import Pagination from "../../components/Pagination/Pagination";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import { useFetching } from "../../hooks/useFetching";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const EntityPage = ({ entity }) => {
  const [pageInfo, setPageInfo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [maxPaginationBtn, setMaxPaginationBtn] = useState(10);

  const getEntity = async () => {
    const data = await setEntityPage(searchParams.get("page"), entity);
    setPageInfo(data);
  };

  const { fetchData, isError, isLoading } = useFetching(getEntity);

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
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

  return isError ? (
    <ErrorPage />
  ) : isLoading ? (
    <Preloader />
  ) : (
    <div className={styles["entity-list"]}>
      <div className="container">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={searchParams.get("page")}
            timeout={350}
            classNames={{
              enter: styles["my-enter"],
              enterActive: styles["my-active-enter"],
              exit: styles["my-exit"],
              exitActive: styles["my-active-exit"],
            }}
          >
            <EntityList entityList={pageInfo.results} />
          </CSSTransition>
        </SwitchTransition>
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
