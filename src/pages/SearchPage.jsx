import React, { useState } from "react";
import FoundElements from "../components/Search/FoundElements/FoundElements";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  //   const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({ search: "" });

  return (
    <div>
      <input
        style={{ border: "2px solid black", margin: "40px", fontSize: "1em" }}
        type="text"
        // value={searchQuery}
        // onChange={(e) => setSearchQuery(e.target.value)}
        value={searchParams.search}
        onChange={(e) => setSearchParams({ search: e.target.value })}
      />

      {/* <FoundElements query={searchQuery} /> */}
      <FoundElements />
    </div>
  );
};

export default SearchPage;
