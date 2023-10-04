import React from "react";
import styles from "./Pagination.module.scss";
import clsx from "clsx";

const Pagination = ({
  totalCount,
  totalItemsOnPage,
  currentPage,
  maxButtonsOnPage,
  setCurrentPage,
}) => {
  const countOfPages = Math.ceil(totalCount / totalItemsOnPage);

  const calcStartEnd = () => {
    const result = { start: undefined, end: undefined };

    if (countOfPages < maxButtonsOnPage) {
      result.start = 1;
      result.end = countOfPages;
      return result;
    }

    const distanceToMid = Math.floor(maxButtonsOnPage / 2);

    if (currentPage + distanceToMid > countOfPages) {
      result.start = countOfPages - maxButtonsOnPage + 1;
      result.end = countOfPages;
      return result;
    } else if (currentPage - distanceToMid < 1) {
      result.start = 1;
      result.end = maxButtonsOnPage;
      return result;
    } else {
      result.start = currentPage - distanceToMid;
      result.end = result.start + maxButtonsOnPage - 1;
      return result;
    }
  };

  const { start, end } = calcStartEnd();

  const buttonsJSX = [];

  for (let i = start; i <= end; i++) {
    buttonsJSX.push(
      <li className={styles["list-item"]} key={i}>
        <button
          className={clsx(
            styles.button,
            i == currentPage && styles["button-active"]
          )}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      </li>
    );
  }

  return countOfPages < 2 ? null : (
    <ul className={styles.list}>{buttonsJSX}</ul>
  );
};

export default Pagination;
