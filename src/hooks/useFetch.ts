import { API, KEY } from "@/constants";
import { WhoisRecord } from "@/types";
import { useEffect, useState } from "react";

const useFetchWhois = (search: string | null, options: RequestInit) => {
  const [data, setData] = useState<WhoisRecord | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!!search) {
          const url = `${API}?apiKey=${KEY}&domainName=${search}&outputFormat=JSON`;
          setIsLoading(true);
          const res = await fetch(`${url}`, options);

          if (!res.ok) throw new Error((await res.json()).message);

          const result = await res.json();
          setData(result.WhoisRecord);
        }
      } catch (e) {
        setError((e as Error).message ?? "An Error has Occured");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [search, options]);

  return { data, isLoading, error };
};

export default useFetchWhois;
