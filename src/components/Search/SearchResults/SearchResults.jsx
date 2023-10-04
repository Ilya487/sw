import React, { useState } from "react";
import styles from "./SearchResults.module.scss";
import Pagination from "../../Pagination/Pagination";
import FoundElements from "./FoundElements/FoundElements";
import { useMatchMedia } from "../../../hooks/useMatchMedia";

const SearchResults = ({ searchData, currentPage, setCurrentPage, entity }) => {
  const [maxPaginationBtn, setMaxPaginationBtn] = useState(10);

  useMatchMedia(
    [
      {
        media: "(max-width:570px)",
        callback() {
          setMaxPaginationBtn(7);
        },
      },
      {
        media: "(max-width:430px)",
        callback() {
          setMaxPaginationBtn(5);
        },
      },
    ],
    () => setMaxPaginationBtn(10)
  );

  return (
    <>
      {searchData.count == 0 && (
        <p className={styles["no-results"]}>No results</p>
      )}
      {searchData.count > 0 && (
        <>
          <p className={styles["result-count"]}>
            {searchData.count} matches found
          </p>
          <FoundElements elements={searchData.results} entity={entity} />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalCount={searchData.count}
            totalItemsOnPage={10}
            maxButtonsOnPage={maxPaginationBtn}
          />
        </>
      )}
    </>
  );
};

export default SearchResults;
