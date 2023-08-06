import React, { useState } from "react";
import FoundElements from "./FoundElements/FoundElements";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <input
        style={{ border: "2px solid black", margin: "40px", fontSize: "1em" }}
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <FoundElements query={searchQuery} />
    </div>
  );
};

export default Search;
