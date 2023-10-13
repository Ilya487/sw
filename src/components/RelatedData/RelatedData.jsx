import React, { useEffect, useRef, useState } from "react";
import {
  abortAllRequests,
  makeConcurrentRequest,
} from "../../utils/makeConcurrentRequest";
import Slider from "./Slider/Slider";
import Spinner from "../Spinner/Spinner";

const RelatedData = ({ urls, slidesToShow, slidesToScroll }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inObserv, setInObserv] = useState(false);

  async function getData() {
    setIsLoading(true);

    const data = await makeConcurrentRequest(urls);
    setData(data);

    setIsLoading(false);
  }

  const handleInObserv = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        setInObserv(true);
        getData();
      }
    });
  };

  const blockRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(handleInObserv, {
      threshold: 0.1,
    });

    observer.observe(blockRef.current);

    return () => {
      observer.disconnect();
      abortAllRequests();
    };
  }, []);

  return inObserv ? (
    isLoading ? (
      <Spinner />
    ) : (
      <Slider
        slides={data}
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}
      />
    )
  ) : (
    <div ref={blockRef} style={{ height: "500px" }}></div>
  );
};

export default RelatedData;
