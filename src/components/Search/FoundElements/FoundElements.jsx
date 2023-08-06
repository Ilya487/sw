import React, { useEffect, useState } from "react";
import { getPersonImg } from "../../../utils/getPersonImg";

const FoundElements = ({ query }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState();

  async function search() {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://swapi.dev/api/people/?search=${query}`
      );
      const data = await response.json();
      setSearchResults(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    search();
  }, [query]);

  return isLoading ? (
    <h1>Loading</h1>
  ) : searchResults.results.length > 0 ? (
    <ul>
      {searchResults.results.map((res) => (
        <li>
          <img src={getPersonImg(res.url)} alt="" />
          {res.name}
        </li>
      ))}
    </ul>
  ) : (
    <p>Ничего не найдено(</p>
  );
};

export default FoundElements;
