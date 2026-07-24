import { Stack } from '@mui/material';
import { useBlogDetail } from './hook';

export const BlogDetailPage = () => {
  const { blog } = useBlogDetail();
  return <Stack></Stack>;
};
