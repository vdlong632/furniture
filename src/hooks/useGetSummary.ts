import { useEffect, useState } from 'react';
import { getClinicClients } from 'services/clinic-clients';
import { getClinicUsers } from 'services/clinic-users';
import { promise } from 'zod';
import { useGetUsersSummary } from '../app/pages/Admin/UsersPage/useGetUsersSummary';

interface ClientsSummary {
  totalClients: number;
  newClients30Days: number;
  totalClientsYTD: number;
}

interface UsersSummary {
  totalAdvisors: number;
  totalProviders: number;
}
export const useGetSummary = () => {
  const [clientSummary, setClientsSummary] = useState<ClientsSummary>({
    totalClients: 0,
    newClients30Days: 0,
    totalClientsYTD: 0
  });
  const { summary } = useGetUsersSummary();
  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const resClient = await getClinicClients({ page: 1, limit: 1 });
        setClientsSummary({
          totalClients: resClient.total || 0,
          newClients30Days: resClient.countLast30Days || 0,
          totalClientsYTD: resClient.countYTD || 0
        });
      } catch (error) {
        console.error('Error fetching clients summary: ', error);
      }
    };
    fetchSummary();
  }, []);
  return {
    clientSummary,
    usersSummary: summary
  };
};
