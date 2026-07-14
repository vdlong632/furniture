import { Box, Button, Divider, Stack, styled, Typography } from '@mui/material';
import { CloseButton } from 'assets';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const NavbarAction = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
    // console.log(open);
  };
  return (
    <ActionStyed>
      <IconStyled>
        <img src="profile.png" alt="" />
      </IconStyled>
      <IconStyled>
        <img src="search.png" alt="" />
      </IconStyled>
      <IconStyled>
        <img src="heart.png" alt="" />
      </IconStyled>
      <IconStyled onClick={handleClose}>
        <img src="cart.png" alt="" />
      </IconStyled>
      {open && (
        <CartOverlay onClick={handleClose}>
          <CartModal onClick={(e) => e.stopPropagation()}>
            <Stack
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}>
              <Typography
                sx={{
                  fontSize: '24px',
                  fontWeight: 600,
                  lineHeight: '100%',
                  letterSpacing: '0px',
                  color: 'rgba(0, 0, 0, 1)'
                }}>
                Shopping Cart
              </Typography>
              <Button onClick={handleClose}>
                <CloseButton />
              </Button>
            </Stack>
            <DividerStyled sx={{ width: '75%' }} />
            <CartList>
              <Stack height={'105px'}>1</Stack>
              <Stack height={'105px'}>2</Stack>
              <Stack height={'105px'}>3</Stack>
              <Stack height={'105px'}>4</Stack>
              <Stack height={'105px'}>5</Stack>
              <Stack height={'105px'}>6</Stack>
              <Stack height={'105px'}>6</Stack>
              <Stack height={'105px'}>6</Stack>
            </CartList>
            <Stack flexDirection={'row'} justifyContent={'space-between'} pt={'20px'}>
              <Typography>Subtotal</Typography>
              <Typography
                sx={{ fontSize: '16px', fontWeight: 600, color: 'rgba(184, 142, 47, 1)' }}>
                Rs. 100000
              </Typography>
            </Stack>
            <DividerStyled sx={{ width: '100%' }} />
            <Stack flexDirection={'row'} justifyContent={'space-between'}>
              <ButtonStyled onClick={() => navigate('/cart')}>Cart</ButtonStyled>
              <ButtonStyled onClick={() => navigate('/checkout')}>Checkout</ButtonStyled>
              <ButtonStyled onClick={() => navigate('/comparison')}>Comparison</ButtonStyled>
            </Stack>
          </CartModal>
        </CartOverlay>
      )}
    </ActionStyed>
  );
};

const ActionStyed = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: 'clamp(20px, 4vw, 40px)',
  [theme.breakpoints.down('md')]: {
    gap: '55px'
  }
}));

const IconStyled = styled(Box)(() => ({
  width: '28px',
  height: '28px',
  display: 'grid',
  placeItems: 'center',
  cursor: 'pointer'
}));

const CartOverlay = styled(Box)(() => ({
  position: 'fixed',
  top: 0,
  right: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.2)',
  zIndex: 9999,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-start'
}));

const CartModal = styled(Box)(() => ({
  width: '30%',
  height: '100%',
  position: 'fixed',
  backgroundColor: '#fff',
  padding: '25px'
}));

const DividerStyled = styled(Divider)(() => ({
  height: '1px',
  margin: '25px 0',
  bgcolor: 'rgba(217, 217, 217, 1)'
}));

const CartList = styled(Stack)(() => ({
  flex: 1,
  height: '63vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#ccc',
  gap: '10px',
  overflowY: 'scroll',
  scrollBehavior: 'smooth'
}));

const ButtonStyled = styled(Button)(() => ({
  fontSize: '12px',
  fontWeight: 400,
  borderRadius: '50px',
  border: '1px solid rgba(0, 0, 0, 1)',
  padding: '5px 25px'
}));
