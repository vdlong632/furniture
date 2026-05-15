import { useState, useContext, createContext, FC, ReactNode } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

type LoadingContext = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

type LoadingProps = {
  children: ReactNode;
};

const LoadingContext = createContext<LoadingContext>({
  loading: false,
  setLoading: () => null
});

/**
 * @return useContext use context loading
 */
export function useLoading(): LoadingContext {
  return useContext(LoadingContext);
}
/**
 * @return LoadingProvider provider value loading
 */
export const LoadingProvider: FC<LoadingProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const value = { loading, setLoading };
  return (
    <LoadingContext.Provider value={value}>
      {loading && (
        <Backdrop
          sx={{
            color: '#000',
            zIndex: 9999
          }}
          open>
          <CircularProgress color="secondary" />
        </Backdrop>
      )}
      {children}
    </LoadingContext.Provider>
  );
};
