import React from "react";
import styles from "./SearchResults.module.scss";
import Pagination from "../../Pagination/Pagination";
import FoundElements from "./FoundElements/FoundElements";

const SearchResults = ({ searchData, currentPage, setCurrentPage, entity }) => {
  return (
    <>
      {searchData.count == 0 && (
        <p className={styles["no-results"]}>No results</p>
      )}
      {searchData.count > 0 && (
        <>
          <p className={styles.subtitle}>{searchData.count} matches found</p>
          <FoundElements elements={searchData.results} entity={entity} />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalCount={searchData.count}
            totalItemsOnPage={10}
            maxButtonsOnPage={10}
          />
        </>
      )}
    </>
  );
};

export default SearchResults;
