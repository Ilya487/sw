import React, { useState } from "react";

const LoadMore = ({ next, setData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [nextPage, setNextPage] = useState(next);

  async function loadData() {
    if (!nextPage) return;
    setIsLoading(true);

    try {
      const response = await fetch(nextPage);
      const data = await response.json();

      setData((p) => [...p, ...data.results]);

      setNextPage(data.next);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return nextPage ? (
    isLoading ? (
      <h1>Loading...</h1>
    ) : (
      <button style={{ padding: "10px", fontSize: "16px" }} onClick={loadData}>
        Load more
      </button>
    )
  ) : (
    <></>
  );
};

export default LoadMore;
