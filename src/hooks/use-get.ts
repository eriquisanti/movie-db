import { useState, useEffect, useCallback } from "react";
import { apiRequest } from "@/lib/api";

export function useGet<T>(
  endpoint: string,
  params?: Record<string, string | number>,
  cache: RequestCache = "default"
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await apiRequest<T>(endpoint, { method: "GET", params, cache });
      setData(res);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [endpoint, JSON.stringify(params), cache]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}
