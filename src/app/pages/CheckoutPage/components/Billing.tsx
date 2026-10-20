import { Button, Grid, Stack, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { TypeBillingForm } from '../formType';
import { InputText } from 'app/components/elements/InputText';
import { InputSelect } from 'app/components/elements/InputSelect';
import { COUNTRY_OPTIONS } from '../type';

export const Billing = () => {
  const {
    register,
    setValue,
    control,
    watch,
    handleSubmit,
    formState: { errors }
  } = useFormContext<TypeBillingForm>();
  return (
    <Stack zIndex={1} p={{ xs: '16px 0', md: '30px' }} width={'100%'}>
      <Typography
        sx={{
          fontSize: { xs: '28px', md: '36px' },
          fontWeight: 600,
          lineHeight: '100%',
          letterSpacing: '0%',
          marginBottom: '20px'
        }}>
        Billing Detail
      </Typography>
      <Grid container spacing={2.5}>
        <Grid item xs={12} sm={6}>
          <InputText
            title="First Name"
            inputError={errors.firstName?.message}
            inputProps={{
              ...register('firstName')
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputText
            title="Last Name"
            inputError={errors.lastName?.message}
            inputProps={{
              ...register('lastName')
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            title="Company Name (Optional)"
            inputError={errors.companyName?.message}
            inputProps={{
              ...register('companyName')
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="country"
            render={({ field, fieldState }) => (
              <InputSelect
                isApp={false}
                title="Country / Region"
                placeholder="Select country"
                value={field.value}
                options={COUNTRY_OPTIONS}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            title="Street adress"
            inputError={errors.street?.message}
            inputProps={{
              ...register('street')
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            title="Town / City"
            inputError={errors.town?.message}
            inputProps={{
              ...register('town')
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="province"
            render={({ field, fieldState }) => (
              <InputSelect
                title="Western province"
                placeholder="Western province"
                value={field.value}
                options={COUNTRY_OPTIONS}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            title="ZIP code"
            inputError={errors.zipCode?.message}
            inputProps={{
              ...register('zipCode')
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            title="Phone"
            inputError={errors.phone?.message}
            inputProps={{
              ...register('phone')
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            title="Email adress"
            inputError={errors.email?.message}
            inputProps={{
              ...register('email')
            }}
          />
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '25px' }}>
          <InputText
            title=""
            placeholder="Additional information"
            inputError={errors.additional?.message}
            inputProps={{
              ...register('additional')
            }}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};
