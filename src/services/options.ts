import axios from 'axios';

export type OptionUser = { id: number; name: string };

export const getOptionUsers = async (type: 'providers' | 'advisors'): Promise<OptionUser[]> => {
  const { data } = await axios.get<OptionUser[]>('/options/option_user', {
    params: { type }
  });
  return data;
};
