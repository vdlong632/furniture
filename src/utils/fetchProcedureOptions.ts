import { getClinicProcedures } from 'services/clinic-procedures';

export const fetchProcedureOptions = async () => {
  const res = await getClinicProcedures({ page: 1 });
  return res.list.map((p) => ({
    value: p.id.toString(),
    label: p.name ?? ''
  }));
};
