import React from "react";
import { entities } from "../../../utils/constants/entities";

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
    <div>
      <span>Выбор категорий для поиска: </span>
      {entities.map((entity) => (
        <React.Fragment key={entity}>
          <label style={{ marginRight: "10px" }}>
            <input
              type="checkbox"
              value={entity}
              onChange={updateFilters}
              checked={selectedFilters.indexOf(entity) == -1 ? false : true}
            />
            {entity}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Filter;
