import React, { useCallback, useEffect, useRef, useState } from "react";
import { getPersonImg } from "../../../utils/getPersonImg";
import { searchPeople } from "../../../API/people/searchPeople";
import { debounce } from "../../../utils/debounce";

const FoundElements = ({ query }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState();

  async function search(query) {
    let isRequestAbort = false;
    setIsLoading(true);
    try {
      const data = await searchPeople(query);
      setSearchResults(data);
    } catch (error) {
      if (error.name === "AbortError") isRequestAbort = true;
    } finally {
      if (isRequestAbort) return;
      setIsLoading(false);
    }
  }

  const debouncedSearch = useRef(debounce(search, 400));

  useEffect(() => {
    debouncedSearch.current(query);
  }, [query]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : searchResults ? (
    searchResults?.results.length > 0 ? (
      <>
        <h1>Найдено {searchResults.count}</h1>
        <ul>
          {searchResults.results.map((res) => (
            <li key={res.url}>
              <img src={getPersonImg(res.url)} alt="" />
              {res.name}
            </li>
          ))}
        </ul>
      </>
    ) : (
      <p>Ничего не найдено(</p>
    )
  ) : (
    <></>
  );
};

export default FoundElements;
