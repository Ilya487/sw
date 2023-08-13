import React from "react";
import styles from "./SearchListControl.module.scss";

const SearchListControl = ({ prevNext, setCurrentPage }) => {
  const switchOnNextPage = () => setCurrentPage((p) => p + 1);
  const switchOnPrevPage = () => setCurrentPage((p) => p - 1);

  return (
    <>
      <button
        className={
          prevNext.prev
            ? [styles.button, styles["button--left"]].join(" ")
            : styles["button--disable"]
        }
        onClick={switchOnPrevPage}
      >
        Prev
      </button>

      <button
        className={
          prevNext.next
            ? [styles.button, styles["button--right"]].join(" ")
            : styles["button--disable"]
        }
        onClick={switchOnNextPage}
      >
        Next
      </button>
    </>
  );
};

export default SearchListControl;
