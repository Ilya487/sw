import React, { useEffect, useRef, useState } from "react";
import { searchEntity } from "../../API/searchEntity";
import { debounce } from "../../utils/debounce";
import { useSearchParams } from "react-router-dom";
import FoundElements from "./FoundElements/FoundElements";
import styles from "./Search.module.scss";
import SearchListControl from "./FoundElements/SearchListControl/SearchListControl";

const Search = ({ entity }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState();
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const query = searchParams.get("search");

  async function search(query, entity, currentPage) {
    if (!query) return;

    let isRequestAbort = false;
    setIsLoading(true);
    try {
      const data = await searchEntity(query, entity, currentPage);
      setSearchData(data);
    } catch (error) {
      if (error.name === "AbortError") isRequestAbort = true;
    } finally {
      if (isRequestAbort) return;
      setIsLoading(false);
    }
  }

  const debouncedSearch = useRef(debounce(search, 400));

  useEffect(() => {
    setCurrentPage(1);
    debouncedSearch.current(query, entity, currentPage);
  }, [query]);

  useEffect(() => {
    debouncedSearch.current(query, entity, currentPage);
  }, [currentPage]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : searchData ? (
    searchData.results.length > 0 ? (
      <>
        <h1>Найдено {searchData.count}</h1>
        <div className={styles.search}>
          <FoundElements elements={searchData.results} entity={entity} />
          <SearchListControl
            prevNext={{ prev: searchData.previous, next: searchData.next }}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </>
    ) : (
      <p>Ничего не найдено(</p>
    )
  ) : (
    <></>
  );
};

export default Search;
