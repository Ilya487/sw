import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./Search.module.scss";
import { useSearch } from "./hooks/useSearch";
import SearchResults from "./SearchResults/SearchResults";

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

  return (
    <div>
      <h2 className={styles.title}>{entity}</h2>
      {isLoading && <h1>Loading...</h1>}

      {!isError && !isLoading && searchData && (
        <SearchResults
          searchData={searchData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          entity={entity}
        />
      )}

      {isError && (
        <>
          <p>ERROR!</p>
          <button onClick={refresh}>Reload</button>
        </>
      )}
    </div>
  );
};

export default Search;
