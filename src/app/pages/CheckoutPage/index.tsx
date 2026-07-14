import { Grid, Stack } from '@mui/material';
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
        <Stack flexDirection={'row'} m={'30px 75px'} gap={'25px'}>
          <Billing />
          <Stack width={'100%'}>
            <Order handleSubmit={handleSubmit} />
          </Stack>
        </Stack>
        {/* <Grid container m={'30px 75px'} spacing={'25px'}>
          <Grid item xs={5}>
            <Billing />
          </Grid>
          <Grid item xs={7}>
            <Order handleSubmit={handleSubmit} />
          </Grid>
        </Grid> */}
        <Policy />
      </Stack>
    </FormProvider>
  );
};
