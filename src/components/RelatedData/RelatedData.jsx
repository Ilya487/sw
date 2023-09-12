import React, { useEffect, useState } from "react";
import { makeConcurrentRequest } from "../../utils/makeConcurrentRequest";
import Slider from "./Slider/Slider";
import Spinner from "./Spinner/Spinner";

const RelatedData = ({ urls, slidesToShow, slidesToScroll }) => {
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
    <Spinner />
  ) : (
    <Slider
      slides={[...data, ...data, ...data]}
      // slides={data}
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToScroll}
    />
  );
};

export default RelatedData;
