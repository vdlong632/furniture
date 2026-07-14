import { Stack } from '@mui/material';
import { PageHeader } from 'app/components/elements/PageHeader';
import { BlogList } from './components/BlogList';
import { Policy } from '../ShopPage/components/Policy';

export const BlogPage = () => {
  return (
    <Stack flex={1}>
      <PageHeader title={'Blog'} route={[{ label: 'Blog', path: '/blog' }]} />
      <Stack>
        <BlogList limit={3}/>
      </Stack>
      <Policy/>
    </Stack>
  );
};
