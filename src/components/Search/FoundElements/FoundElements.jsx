import React, { useEffect, useRef, useState } from "react";
import { searchPeople } from "../../../API/people/searchPeople";
import { debounce } from "../../../utils/debounce";
import LoadMore from "./LoadMore/LoadMore";
import PeopleList from "../../PeopleList/PeopleList";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";

const FoundElements = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchInfo, setSearchInfo] = useState({});
  const [searchData, setSearchData] = useState([]);
  const [searchParams] = useSearchParams();

  const query = searchParams.get("search");

  async function search(query) {
    let isRequestAbort = false;
    setIsLoading(true);
    try {
      const data = await searchPeople(query);
      setSearchInfo(data);
      setSearchData(data.results);
    } catch (error) {
      if (error.name === "AbortError") isRequestAbort = true;
    } finally {
      if (isRequestAbort) return;
      setIsLoading(false);
    }
  }

  const debouncedSearch = useRef(debounce(search, 400));

  useEffect(() => {
    debouncedSearch.current(query);
  }, [query]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : searchInfo ? (
    searchData?.length > 0 ? (
      <>
        <h1>Найдено {searchInfo.count}</h1>
        <PeopleList people={searchData} />
        <LoadMore next={searchInfo.next} setData={setSearchData} />
      </>
    ) : (
      <p>Ничего не найдено(</p>
    )
  ) : (
    <></>
  );
};

export default FoundElements;
