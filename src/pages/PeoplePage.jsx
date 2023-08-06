import React, { useEffect, useState } from "react";
import PeopleList from "../components/PeopleList/PeopleList";
import PeopleListControl from "../components/PeopleList/Control/PeopleListControl";
import { getPeoplePage } from "../API/getPeoplePage";

const PeoplePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  async function getPeople() {
    setIsLoading(true);
    try {
      const data = await getPeoplePage(currentPage);
      setPageInfo(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getPeople();
  }, [currentPage]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <PeopleList people={pageInfo.results} />
      <PeopleListControl
        prevNext={{ prev: pageInfo.previous, next: pageInfo.next }}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default PeoplePage;
