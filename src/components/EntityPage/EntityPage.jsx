import React, { useEffect, useState } from "react";
import EntityList from "./EntityList/EntityList";
import EntityListControl from "./EntityList/Control/EntityListControl";
import { setEntityPage } from "../../API/setEntityPage";
import { useSearchParams } from "react-router-dom";
import Sceleton from "./Sceleton/Sceleton";
import styles from "./EntityPage.module.scss";

const EntityPage = ({ entity }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });

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
    [...new Array(9)].map((_, i) => <Sceleton />)
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
