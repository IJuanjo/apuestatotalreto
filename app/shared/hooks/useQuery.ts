'use client';

import { useCallback, useEffect, useState } from 'react';

interface UseQueryOptions {
  enabled?: boolean;
  initialData?: unknown;
}

interface UseQueryResult<T> {
  data: T | null;
  error: unknown;
  enabled: boolean;
  loading: boolean;
  refetch: () => Promise<void>;
}

export function useQuery<T>(
  fetcher: () => Promise<T>,
  options: UseQueryOptions = {}
): UseQueryResult<T> {
  const { enabled = true, initialData = null } = options;

  const [data, setData] = useState<T | null>(initialData as T | null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    if (!enabled) return;

    setLoading(true);
    setError(null);

    try {
      const result = await fetcher();
      setData(result);
    } catch (err) {
      setError(err);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [enabled, fetcher]);

  useEffect(() => {
    if (!enabled) return;
    void fetchData();
  }, [enabled, fetchData]);

  return {
    data,
    error,
    enabled,
    loading,
    refetch: fetchData,
  };
}
