import React from "react";

const Filter = ({ setFilters }) => {
  function toggleFilter(checkBox) {
    if (checkBox.checked) {
      setFilters((p) => [...p, checkBox.value]);
    } else {
      setFilters((p) => p.filter((f) => f != checkBox.value));
    }
  }

  return (
    <div>
      <span>Выбор категорий для поиска: </span>
      <label style={{ marginRight: "10px" }}>
        <input
          type="checkbox"
          onChange={(e) => toggleFilter(e.target)}
          value="people"
        />
        people
      </label>

      <label style={{ marginRight: "10px" }}>
        <input
          type="checkbox"
          onChange={(e) => toggleFilter(e.target)}
          value="starships"
        />
        starships
      </label>

      <label style={{ marginRight: "10px" }}>
        <input
          type="checkbox"
          onChange={(e) => toggleFilter(e.target)}
          value="vehicles"
        />
        vehicles
      </label>

      <label style={{ marginRight: "10px" }}>
        <input
          type="checkbox"
          onChange={(e) => toggleFilter(e.target)}
          value="species"
        />
        species
      </label>

      <label style={{ marginRight: "10px" }}>
        <input
          type="checkbox"
          onChange={(e) => toggleFilter(e.target)}
          value="planets"
        />
        planets
      </label>
    </div>
  );
};

export default Filter;
