import React, { useState } from "react";
import Search from "../components/Search/Search";
import { useSearchParams } from "react-router-dom";
import Filter from "../components/Search/Filter/Filter";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ search: "" });
  const [filters, setFilters] = useState([]);

  function toggleFilter(checkBox) {
    if (checkBox.checked) {
      setFilters([...filters, checkBox.value]);
    } else {
      setFilters(filters.filter((f) => f != checkBox.value));
    }
  }

  return (
    <div>
      <input
        style={{ border: "2px solid black", margin: "40px", fontSize: "1em" }}
        type="text"
        value={searchParams.get("search")}
        onChange={(e) => setSearchParams({ search: e.target.value })}
      />

      <Filter setFilters={setFilters} />

      {filters.map((f, indx) => (
        <Search entity={f} key={indx} />
      ))}
    </div>
  );
};

export default SearchPage;
