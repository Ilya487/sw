import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import FoundElements from "./FoundElements/FoundElements";
import styles from "./Search.module.scss";
import SearchListControl from "./FoundElements/SearchListControl/SearchListControl";
import { useSearch } from "./hooks/useSearch";

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
      <h1>{entity}</h1>
      {isLoading && <h1>Loading...</h1>}

      {!isError && !isLoading && searchData && searchData.count == 0 && (
        <>
          <p>Ничего не найдено(</p>
        </>
      )}

      {!isError && !isLoading && searchData && searchData.count > 0 && (
        <>
          <p>Найдено {searchData.count}</p>
          <div className={styles.search}>
            <FoundElements elements={searchData.results} entity={entity} />
            <SearchListControl
              prevNext={{ prev: searchData.previous, next: searchData.next }}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </>
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
