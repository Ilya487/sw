import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./Search.module.scss";
import { useSearch } from "./hooks/useSearch";
import SearchResults from "./SearchResults/SearchResults";
import Spinner from "../Spinner/Spinner";

const Search = ({ entity }) => {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const query = searchParams.get("search");

  const { searchData, isLoading, isError, refresh } = useSearch(
    query,
    entity,
    currentPage,
    setCurrentPage
  );

  return !query?.trim() ? null : (
    <div className={styles.block}>
      <h2 className={styles.title}>{entity}</h2>

      {isLoading && (
        <div className={styles.preloader}>
          <Spinner />
        </div>
      )}

      {!isError && !isLoading && searchData && (
        <SearchResults
          searchData={searchData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          entity={entity}
        />
      )}

      {isError && (
        <div className={styles.error}>
          <p>Failed to fetch data</p>
          <button onClick={refresh}>Try again</button>
        </div>
      )}
    </div>
  );
};

export default Search;
