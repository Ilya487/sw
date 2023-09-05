import React, { useEffect, useState } from "react";
import { makeConcurrentRequest } from "../../utils/makeConcurrentRequest";
import Slider from "./Slider/Slider";

const RelatedData = ({ urls }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  async function getData() {
    setIsLoading(true);
    try {
      const data = await makeConcurrentRequest(urls);
      setData(data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return isError ? (
    <p>Error!!!</p>
  ) : isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <Slider
      slides={[...data, ...data, ...data]}
      slidesToShow={4}
      slidesToScroll={2}
    />
  );
};

export default RelatedData;
