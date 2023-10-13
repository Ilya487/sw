import { useEffect, useRef, useState } from "react";
import { searchEntity } from "../../../API/searchEntity";
import { debounce } from "../../../utils/debounce";

export const useSearch = (query, entity, currentPage, setCurrentPage) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchData, setSearchData] = useState();

  const returnedSearch = useRef();
  if (returnedSearch.current == null) returnedSearch.current = searchEntity();

  async function search(query, entity, currentPage) {
    let isRequestAbort = false;
    setIsLoading(true);
    setIsError(false);
    try {
      const data = await returnedSearch.current(query, entity, currentPage);
      setSearchData(data);
    } catch (error) {
      if (error.name === "AbortError") isRequestAbort = true;
      else setIsError(true);
    } finally {
      if (isRequestAbort) return;
      setIsLoading(false);
    }
  }

  const debouncedSearch = useRef(null);
  if (debouncedSearch.current == null)
    debouncedSearch.current = debounce(search, 400);

  useEffect(() => {
    setCurrentPage(1);
    debouncedSearch.current(query, entity, currentPage);
  }, [query]);

  const lastQuery = useRef(query);

  useEffect(() => {
    if (currentPage == 1 && lastQuery.current !== query) {
      lastQuery.current = query;
      debouncedSearch.current(query, entity, currentPage);
    } else {
      lastQuery.current = query;
      search(query, entity, currentPage);
    }
  }, [currentPage]);

  const refresh = () => {
    search(query, entity, currentPage);
  };

  return { searchData, isLoading, isError, refresh };
};
