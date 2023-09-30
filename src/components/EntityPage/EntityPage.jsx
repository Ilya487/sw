import React, { useEffect, useState } from "react";
import EntityList from "./EntityList/EntityList";
import EntityListControl from "./EntityList/Control/EntityListControl";
import { setEntityPage } from "../../API/setEntityPage";
import { useSearchParams } from "react-router-dom";
import styles from "./EntityPage.module.scss";
import Preloader from "./Preloader/Preloader";

const EntityPage = ({ entity }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

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

  return isLoading ? (
    <Preloader />
  ) : (
    <div className={styles["entity-list"]}>
      <div className="container">
        <EntityList entityList={pageInfo.results} />
        <EntityListControl
          prevNext={{ prev: pageInfo.previous, next: pageInfo.next }}
          switchPage={setSearchParams}
        />
      </div>
    </div>
  );
};

export default EntityPage;
