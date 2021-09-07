import { useState, useRef, useEffect } from 'react';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function useFetch(url) {
  const isMounted = useRef(false);
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    isMounted.current = true;

    async function initFetch() {
      try {
        const response = await fetch(baseUrl + url);
        if (response.ok) {
          const json = await response.json();
          if (isMounted.current) setData(json);
        } else {
          throw response;
        }
      } catch (e) {
        if (isMounted.current) setIsError(e);
      } finally {
        if (isMounted.current) setIsLoading(false);
      }
    }

    initFetch();

    return () => {
      isMounted.current = false;
    };
  }, [url]);

  return { data, isError, isLoading };
}
