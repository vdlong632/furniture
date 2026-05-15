import { useState, useContext, createContext, ReactNode, useCallback } from 'react';
import { UserRole } from 'types/user';
import { getInfoUser } from 'services/auth';
import { StorageServices } from 'services/storage';
import { ClinicUsers } from 'types/Clinics';
import { useAsyncCallback } from 'hooks/useAsyncCallback';

const storage = new StorageServices();

type AuthContextType = {
  auth: ClinicUsers | null;
  setAuth: (value: ClinicUsers | null) => void;
  isAdmin: boolean;
  isAppUser: boolean;
  fetchCurrentUser: () => Promise<ClinicUsers | null>;
};

const AuthInfoContext = createContext<AuthContextType>({
  auth: null,
  setAuth: () => null,
  isAdmin: false,
  isAppUser: false,
  fetchCurrentUser: async () => null
});

export function useAuth(): AuthContextType {
  return useContext(AuthInfoContext);
}

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [auth, setAuth] = useState<ClinicUsers | null>(null);

  const fetchCurrentUser = useCallback(async () => {
    try {
      if (!storage.getAccessToken()) return null;
      const data = await getInfoUser();
      setAuth(data);
      return data;
    } catch (error) {
      storage.removeAccessToken();
      storage.removeRefreshToken();
      setAuth(null);
      return null;
    }
  }, []);

  const { asyncCallback } = useAsyncCallback(fetchCurrentUser, []);

  const value = {
    auth,
    setAuth,
    isAdmin: auth?.role === UserRole.CLINIC_ADMIN,
    isAppUser: auth?.role === UserRole.CLINIC_STAFF,
    fetchCurrentUser: asyncCallback
  };

  return <AuthInfoContext.Provider value={value}>{children}</AuthInfoContext.Provider>;
}
