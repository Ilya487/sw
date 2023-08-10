import React, { useEffect, useState } from "react";
import PeopleList from "../components/PeopleList/PeopleList";
import PeopleListControl from "../components/PeopleList/Control/PeopleListControl";
import { getEntitylePage } from "../API/people/getEntityPage";
import { useSearchParams } from "react-router-dom";

const PeoplePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });

  async function getPeople() {
    setIsLoading(true);
    try {
      const data = await getEntitylePage(searchParams.get("page"), "people");
      setPageInfo(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getPeople();
  }, [searchParams.get("page")]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <PeopleList people={pageInfo.results} />
      <PeopleListControl
        prevNext={{ prev: pageInfo.previous, next: pageInfo.next }}
        currentPage={+searchParams.get("page")}
        switchPage={setSearchParams}
      />
    </div>
  );
};

export default PeoplePage;
