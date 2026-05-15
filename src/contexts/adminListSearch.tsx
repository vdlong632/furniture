import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { useDebounce } from 'use-debounce';

type AdminListSearchContextValue = {
  searchInput: string;
  setSearchInput: (value: string) => void;
  debouncedSearch: string;
  clearSearch: () => void;
};

const AdminListSearchContext = createContext<AdminListSearchContextValue | null>(null);

export function AdminListSearchProvider({ children }: { children: ReactNode }) {
  const [searchInput, setSearchInput] = useState('');
  const [debouncedSearch] = useDebounce(searchInput, 400);

  const clearSearch = useCallback(() => {
    setSearchInput('');
  }, []);

  const value = useMemo(
    () => ({
      searchInput,
      setSearchInput,
      debouncedSearch,
      clearSearch
    }),
    [searchInput, debouncedSearch, clearSearch]
  );

  return (
    <AdminListSearchContext.Provider value={value}>{children}</AdminListSearchContext.Provider>
  );
}

export function useAdminListSearch() {
  const ctx = useContext(AdminListSearchContext);
  if (!ctx) {
    throw new Error('useAdminListSearch must be used within AdminListSearchProvider');
  }
  return ctx;
}
