import { useEffect, useState } from "react";

function useFetch(apiFunc) {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiFunc().then(setData);
  }, []);

  return data;
}

export default useFetch;