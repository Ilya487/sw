import React, { useEffect, useState } from "react";
import { makeConcurrentRequest } from "../../utils/makeConcurrentRequest";
import Slider from "./Slider/Slider";
import Spinner from "../Spinner/Spinner";

const RelatedData = ({ urls, slidesToShow, slidesToScroll }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    setIsLoading(true);
    try {
      const data = await makeConcurrentRequest(urls);
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <Slider
      slides={data}
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToScroll}
    />
  );
};

export default RelatedData;
