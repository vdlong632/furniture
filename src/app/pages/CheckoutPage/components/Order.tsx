import { RadioGroup, Stack, styled, Typography } from '@mui/material';
import { CustomRadioGroup } from 'app/components/elements/RadioCustom';
import { Controller, useFormContext } from 'react-hook-form';
import { TypeBillingForm } from '../formType';
import { ButtonCustom } from 'app/components/elements/ButtonCustom';
import { ORDER_OPTIONS } from '../type';
import { useState } from 'react';
import { useCart } from 'contexts/cart';
import { useTotalProductCart } from 'utils/totalProduct';

type Props = {
  handleSubmit: () => void;
};
export const Order = ({ handleSubmit }: Props) => {
  const {
    register,
    setValue,
    control,
    watch,
    formState: { errors }
  } = useFormContext<TypeBillingForm>();
  const { cartItem } = useCart();
  const totalPrice = useTotalProductCart();
  return (
    <Stack flex={1} m={'30px'} width={'73%'}>
      <Stack
        gap={'15px'}
        mb={'20px'}
        padding={'20px 0'}
        borderBottom={'1px solid rgba(217, 217, 217, 1)'}>
        <StackStyled>
          <TitleStyled>Product</TitleStyled>
          <TitleStyled>Subtotal</TitleStyled>
        </StackStyled>
        {cartItem.map((item) => (
          <StackStyled>
            <Stack flexDirection={'row'} gap={'10px'}>
              <ProductStyled>{item.name}</ProductStyled>
              <Typography>x</Typography>
              <Typography>{item.quantity}</Typography>
            </Stack>
            <TextStyled>Rs. {item.price.toLocaleString('de-DE')}</TextStyled>
          </StackStyled>
        ))}
        <StackStyled>
          <Typography fontSize={'16px'} fontWeight={400}>Total</Typography>
          <Typography sx={{ fontSize: '24px', fontWeight: 700, color: 'rgba(184, 142, 47, 1)' }}>
            Rs. {totalPrice.toLocaleString('de-DE')}
          </Typography>
        </StackStyled>
      </Stack>
      <Stack flexDirection={'column'}>
        <Controller
          control={control}
          name="orderOption"
          render={({ field, fieldState }) => (
            <CustomRadioGroup
              value={field.value}
              options={ORDER_OPTIONS}
              onChange={field.onChange}
            />
          )}
        />
      </Stack>
      <Stack m={'20px'}>
        <ButtonCustom
          onClick={handleSubmit}
          label="Place Order"
          sx={{
            bgcolor: 'rgba(255, 255, 255, 1)',
            border: '1px solid rgba(0, 0, 0, 1)',
            width: '50%',
            margin: '0 auto',
            '&:hover': { backgroundColor: 'transparent' }
          }}
          textSx={{ color: 'rgba(0, 0, 0, 1)' }}
          disabled={cartItem.length < 1}
        />
      </Stack>
    </Stack>
  );
};

const StackStyled = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
}));

const TitleStyled = styled(Typography)(() => ({
  fontSize: '24px',
  fontWeight: 500
}));

const ProductStyled = styled(Typography)(() => ({
  fontSize: '16',
  fontWeight: 400,
  color: 'rgba(159, 159, 159, 1)'
}));

const TextStyled = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 300
}));

const TotalStyled = styled(Typography)(() => ({
  fontSize: '24px',
  fontWeight: 700,
  color: 'rgba(184, 142, 47, 1)'
}));
