import { Button, Stack, styled, Typography } from '@mui/material';
import { useCart } from 'contexts/cart';
import { useNavigate } from 'react-router-dom';
import { useTotalProductCart } from 'utils/totalProduct';

export const CartTotal = () => {
  const total = useTotalProductCart();
  const navigate = useNavigate();
  return (
    <Stack width={{ xs: '100%', lg: '393px' }} flexShrink={0}>
      <Stack
        bgcolor={'rgba(249, 241, 231, 1)'}
        p={{ xs: '16px 20px 32px', md: '15px 30px 70px 30px' }}>
        <Typography
          sx={{
            fontSize: { xs: '26px', md: '32px' },
            fontWeight: 600,
            textAlign: 'center',
            marginBottom: '15px'
          }}>
          Cart Total
        </Typography>
        <Stack gap={'30px'}>
          <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <TextStyled sx={{ fontSize: '16px', fontWeight: 500 }}>Subtotal</TextStyled>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 400,
                color: 'rgba(159, 159, 159, 1)'
              }}>
              Rs. {total.toLocaleString('de-DE')}
            </Typography>
          </Stack>
          <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <TextStyled>Total</TextStyled>
            <TextStyled sx={{ fontSize: '20px', color: 'rgba(184, 142, 47, 1)' }}>
              Rs. {total.toLocaleString('de-DE')}
            </TextStyled>
          </Stack>
          <ButtonStyled
            onClick={() => {
              navigate('/checkout');
            }}>
            Checkout
          </ButtonStyled>
        </Stack>
      </Stack>
    </Stack>
  );
};

const ButtonStyled = styled(Button)(() => ({
  fontSize: '20px',
  fontWeight: 400,
  backgroundColor: 'transparent',
  borderRadius: '15px',
  border: '1px solid rgba(0, 0, 0, 1)',
  width: 'fit-content',
  padding: '8px 30px',
  margin: '0 auto'
}));

const TextStyled = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 500
}));
