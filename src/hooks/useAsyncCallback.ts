import { useCallback, useState } from 'react';
import { AxiosError } from 'axios';
import { getErrorMsg } from 'utils/getErrorMsg';
import { useFlash } from 'contexts/flash';
import { useLoading } from 'contexts/loading';

/**
 * @returns function handle errors
 */
export function useAsyncCallback(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cb: any,
  deps: unknown[],
  isThrow?: boolean,
  isHiddenToast = false
) {
  const { setFlash } = useFlash();
  const { setLoading } = useLoading();
  const [isLoading, setIsLoading] = useState(false);
  const [errorReturnApi, setErrorReturnApi] = useState<string>();

  const asyncCallback = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...args: any) => {
      setLoading(true);
      setIsLoading(true);
      return cb(...args)
        .catch((error: unknown) => {
          if (isThrow) throw error;
          if (error instanceof AxiosError) {
            let messageError = getErrorMsg(error);
            if (messageError === 'Forbidden') {
              messageError = 'Access Denied: You don’t have permission to access this page.';
            }
            setErrorReturnApi(messageError);
            if (!isHiddenToast) {
              setFlash({
                message: messageError,
                type: 'error'
              });
            }
          }
          console.warn(error);
        })
        .finally(() => {
          setLoading(false);
          setIsLoading(false);
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...deps, cb]
  );

  return {
    asyncCallback,
    errorReturnApi,
    setErrorReturnApi,
    isLoading
  };
}
