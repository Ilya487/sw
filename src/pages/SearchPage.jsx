import React, { useState } from "react";
import Search from "../components/Search/Search";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ search: "" });

  return (
    <div>
      <input
        style={{ border: "2px solid black", margin: "40px", fontSize: "1em" }}
        type="text"
        value={searchParams.get("search")}
        onChange={(e) => setSearchParams({ search: e.target.value })}
      />
      <Search entity={"people"} />
      <Search entity={"films"} />
    </div>
  );
};

export default SearchPage;
