import { Grid, Stack } from '@mui/material';
import { Policy } from '../ShopPage/components/Policy';
import { PageHeader } from 'app/components/elements/PageHeader';
import { CartTable } from './components/CartTable';
import { CartTotal } from './components/CartTotal';

export const CartPage = () => {
  return (
    <Stack flex={1}>
      <PageHeader title={'Cart'} route={[{ label: 'Cart', path: '/cart' }]} />
      <Stack
        flexDirection={{ xs: 'column', lg: 'row' }}
        alignItems={{ xs: 'stretch', lg: 'flex-start' }}
        m={{ xs: '32px 16px', sm: '40px 32px', md: '60px 75px' }}
        gap={'25px'}>
        <CartTable />
        <CartTotal />
      </Stack>
      <Policy />
    </Stack>
  );
};
