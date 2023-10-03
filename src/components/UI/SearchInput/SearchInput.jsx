import React from "react";
import styles from "./SearchInput.module.scss";

const SearchInput = ({ value, onChange }) => {
  return (
    <input
      type="search"
      value={value}
      onChange={onChange}
      className={styles.search}
    />
  );
};

export default SearchInput;
