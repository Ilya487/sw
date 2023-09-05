import React, { useEffect, useState } from "react";
import { makeConcurrentRequest } from "../../utils/makeConcurrentRequest";
import Slider from "./Slider/Slider";

const RelatedData = ({ urls }) => {
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
    <h1>Loading...</h1>
  ) : (
    <Slider slides={[...data, ...data, ...data]} />
  );
  //  <Slider slides={data} />;
};

export default RelatedData;
