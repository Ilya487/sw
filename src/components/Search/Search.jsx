import React, { useEffect, useRef, useState } from "react";
import { searchEntity } from "../../API/searchEntity";
import { debounce } from "../../utils/debounce";
import LoadMore from "./FoundElements/LoadMore/LoadMore";
import { useSearchParams } from "react-router-dom";
import { getEntityImg } from "../../utils/getEntityImg";

const Search = ({ entity }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchInfo, setSearchInfo] = useState();
  const [searchData, setSearchData] = useState();
  const [searchParams] = useSearchParams();

  const query = searchParams.get("search");

  async function search(query) {
    if (!query) return;

    let isRequestAbort = false;
    setIsLoading(true);
    try {
      const data = await searchEntity(query, entity);
      setSearchInfo(data);
      setSearchData(data.results);
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
  ) : searchInfo ? (
    searchData?.length > 0 ? (
      <>
        <h1>Найдено {searchInfo.count}</h1>
        <div>
          <ul>
            {searchData.map((item) => (
              <li>
                <img src={getEntityImg(item.url, "films")} alt="" />
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <LoadMore next={searchInfo.next} setData={setSearchData} />
      </>
    ) : (
      <p>Ничего не найдено(</p>
    )
  ) : (
    <></>
  );
};

export default Search;
