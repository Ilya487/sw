import React from "react";
import { entities } from "../../../utils/constants/entities";
import styles from "./Filter.module.scss";

const Filter = ({ searchParams, setSearchParams }) => {
  function insertNewFilter(value) {
    const currentFilters = searchParams.getAll("filters");

    if (currentFilters.indexOf(value) != -1) {
      const updateParams = currentFilters.filter((param) => param != value);
      searchParams.delete("filters");

      updateParams.forEach((f) => searchParams.append("filters", f));
      return searchParams;
    }

    searchParams.append("filters", value);
    return searchParams;
  }

  function updateFilters(e) {
    const updatedParams = insertNewFilter(e.target.value);
    setSearchParams(updatedParams, { replace: true });
  }

  const selectedFilters = searchParams.getAll("filters");

  return (
    <div className={styles.filters}>
      <p className={styles.subtitle}>Select categories for search: </p>
      {entities.map((entity) => (
        <label className={styles["checkbox-label"]} key={entity}>
          <input
            className={styles.input}
            type="checkbox"
            value={entity}
            onChange={updateFilters}
            checked={selectedFilters.indexOf(entity) == -1 ? false : true}
          />
          <span className={styles["custom-checkbox"]}></span>
          <span>{entity}</span>
        </label>
      ))}
    </div>
  );
};

export default Filter;
