import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

export function usePageParams<T extends string>(params: T[]): Record<T, string> {
  const allParams = useParams();

  const filteredParams = useMemo(
    () =>
      params.reduce<Record<string, string>>((acc, param) => {
        if (!allParams[param]) throw new Error(`Missing param ${param}`);
        acc[param] = allParams[param] ?? '';
        return acc;
      }, {}),
    [params, allParams]
  );

  return filteredParams;
}
