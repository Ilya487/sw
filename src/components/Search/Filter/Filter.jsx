import React from "react";
import { entities } from "../../../utils/constants/entities";

const Filter = ({ searchParams, setSearchParams }) => {
  function toggleFilter(checkBox) {
    setSearchParams((params) => {
      if (params.getAll("filters").some((val) => val == checkBox.value)) {
        const updatedParams = params
          .getAll("filters")
          .filter((param) => param != checkBox.value);

        params.delete("filters");

        updatedParams.forEach((f) => params.append("filters", f));

        return params;
      }

      params.append("filters", checkBox.value);
      return params;
    });
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
              onChange={(e) => toggleFilter(e.target)}
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
