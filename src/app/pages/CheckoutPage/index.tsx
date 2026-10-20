import { Stack } from '@mui/material';
import { PageHeader } from 'app/components/elements/PageHeader';
import { Policy } from '../ShopPage/components/Policy';
import { Billing } from './components/Billing';
import { useBillingForm } from './hook';
import { FormProvider } from 'react-hook-form';
import { Order } from './components/Order';

export const CheckoutPage = () => {
  const { methods, handleSubmit } = useBillingForm();
  return (
    <FormProvider {...methods}>
      <Stack flex={1}>
        <PageHeader title={'Checkout'} route={[{ label: 'Checkout', path: '/checkout' }]} />
        <Stack
          flexDirection={{ xs: 'column', md: 'row' }}
          m={{ xs: '16px', sm: '24px 32px', md: '30px 75px' }}
          gap={{ xs: '8px', md: '25px' }}>
          <Billing />
          <Stack width={'100%'}>
            <Order handleSubmit={handleSubmit} />
          </Stack>
        </Stack>
        <Policy />
      </Stack>
    </FormProvider>
  );
};
