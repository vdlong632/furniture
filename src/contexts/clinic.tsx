import { useState, useContext, createContext, ReactNode, useCallback, useEffect } from 'react';
import { StorageServices } from 'services/storage';
import { Clinics, getMyClinic } from 'services/clinics';
import { useAsyncCallback } from 'hooks/useAsyncCallback';

const storage = new StorageServices();

type ClinicContextType = {
  clinic: Clinics | null;
  setClinic: (value: Clinics | null) => void;
  fetchClinic: () => Promise<Clinics | null>;
};

const ClinicInfoContext = createContext<ClinicContextType>({
  clinic: null,
  setClinic: () => null,
  fetchClinic: async () => null
});

export function useClinic(): ClinicContextType {
  return useContext(ClinicInfoContext);
}

type Props = {
  children: ReactNode;
};

export function ClinicProvider({ children }: Props) {
  const [clinic, setClinic] = useState<Clinics | null>(null);

  const fetchClinic = useCallback(async () => {
    try {
      if (!storage.getAccessToken()) return null;
      const data = await getMyClinic();
      setClinic(data);
      return data;
    } catch (error) {
      setClinic(null);
      return null;
    }
  }, [storage.getAccessToken()]);

  const { asyncCallback } = useAsyncCallback(fetchClinic, []);

  useEffect(() => {
    asyncCallback();
  }, [asyncCallback]);

  const value = {
    clinic,
    setClinic,
    fetchClinic: asyncCallback
  };

  return <ClinicInfoContext.Provider value={value}>{children}</ClinicInfoContext.Provider>;
}
