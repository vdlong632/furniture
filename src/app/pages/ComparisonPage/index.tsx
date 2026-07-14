import { Stack } from '@mui/material';
import { PageHeader } from 'app/components/elements/PageHeader';
import { Policy } from '../ShopPage/components/Policy';

export const ComparisonPage = () => {
  return (
    <Stack flex={1}>
      <PageHeader
        title={'Product Comparison'}
        route={[{ label: 'Comparison', path: '/comparison' }]}
      />
      {/* <Policy /> */}
    </Stack>
  );
};
