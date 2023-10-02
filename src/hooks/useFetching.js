import { useState } from "react";

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const navigation = useNavigate();

  const fetchFunction = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      callback();
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

  return { fetchFunction, isError, isLoading };
};
