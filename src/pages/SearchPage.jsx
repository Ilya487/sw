import React from "react";
import Search from "../components/Search/Search";
import { useSearchParams } from "react-router-dom";
import Filter from "../components/Search/Filter/Filter";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    search: "",
  });

  const filters = searchParams.getAll("filters");
  return (
    <div>
      <input
        style={{ border: "2px solid black", margin: "40px", fontSize: "1em" }}
        type="text"
        value={searchParams.get("search")}
        onChange={(e) =>
          setSearchParams(
            (params) => {
              params.set("search", e.target.value);
              return params;
            },
            { replace: true }
          )
        }
      />

      <Filter searchParams={searchParams} setSearchParams={setSearchParams} />

      {filters.map((f, indx) => (
        <Search entity={f} key={indx} />
      ))}
    </div>
  );
};

export default SearchPage;
