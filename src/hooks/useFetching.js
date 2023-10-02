import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const navigation = useNavigate();

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      await callback();
    } catch (e) {
      setIsError(true);
      if (e.message == "404")
        navigation("/notFound", {
          replace: true,
        });
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchData, isError, isLoading };
};
