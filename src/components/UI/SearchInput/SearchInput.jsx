import React from "react";
import styles from "./SearchInput.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

const SearchInput = ({ value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <AiOutlineSearch />
      <input
        type="search"
        value={value}
        onChange={onChange}
        className={styles.search}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchInput;
