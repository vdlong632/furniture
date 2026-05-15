import { useState, useContext, createContext, ReactNode } from 'react';

type Flash = {
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
};

type FlashContextType = {
  flash: Flash | null;
  setFlash: (flash: Flash | null) => void;
};

const FlashContext = createContext<FlashContextType>({
  flash: null,
  setFlash: () => null
});

/**
 * @return useContext use context flash
 */
export function useFlash(): FlashContextType {
  return useContext(FlashContext);
}

type Props = {
  children: ReactNode;
};

/**
 * @return FlashProvider provider value flash
 */
export function FlashProvider({ children }: Props) {
  const [flash, setFlash] = useState<Flash | null>(null);
  const value = { flash, setFlash };

  return <FlashContext.Provider value={value}>{children}</FlashContext.Provider>;
}
