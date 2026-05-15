/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSearchParams } from 'react-router-dom';

export const useUpdateSearchParamUrl = (): [
  URLSearchParams,
  (params: Record<string, unknown>) => void
] => {
  const [searchParams, setSearchParams] = useSearchParams();
  const updateParams = (params: Record<string, unknown>) => {
    const newPrams: any = {};
    for (const key in params) {
      if (Array.isArray(params[key]) && (params[key] as Array<string[]>).length === 0) {
        continue;
      }
      if (params[key]) newPrams[key] = params[key];
    }
    setSearchParams(newPrams);
  };
  return [searchParams, updateParams];
};
