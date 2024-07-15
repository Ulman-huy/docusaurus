import { useState, useEffect } from "react";

export default function useFetch(
  url: string,
  options?: { [key: string]: string | number }
) {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url, options);
        const res = await resp.json();
        if (isMounted) setData(res);
      } catch (e: any) {
        if (isMounted) setData(null);
        if (isMounted) setError(e);
      }
    };

    let isMounted = true;
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return { data, error };
}
