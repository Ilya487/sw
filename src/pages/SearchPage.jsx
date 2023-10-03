import React from "react";
import Search from "../components/Search/Search";
import { useSearchParams } from "react-router-dom";
import Filter from "../components/Search/Filter/Filter";
import SearchInput from "../components/UI/SearchInput/SearchInput";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    search: "",
    filters: "people",
  });

  const searchOnChange = (e) => {
    setSearchParams(
      (params) => {
        params.set("search", e.target.value);
        return params;
      },
      { replace: true }
    );
  };

  const filters = searchParams.getAll("filters");
  return (
    <div>
      <SearchInput
        value={searchParams.get("search")}
        onChange={searchOnChange}
      />
      <Filter searchParams={searchParams} setSearchParams={setSearchParams} />

      {filters.map((f) => (
        <Search entity={f} key={f} />
      ))}
    </div>
  );
};

export default SearchPage;
