import React from "react";
import styles from "./Pagination.module.scss";

const Pagination = ({
  count,
  countItemsOnPage,
  currentPage,
  searchParamsControl,
}) => {
  const contOfPages = Math.ceil(count / countItemsOnPage);

  return contOfPages < 2 ? null : (
    <ul className={styles.list}>
      {Array(contOfPages)
        .fill(0)
        .map((_, i) => (
          <li className={styles["list-item"]}>
            <button
              style={{ backgroundColor: i + 1 == currentPage ? "red" : "" }}
              onClick={() => searchParamsControl({ page: i + 1 })}
            >
              {" "}
              {i + 1}
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Pagination;
