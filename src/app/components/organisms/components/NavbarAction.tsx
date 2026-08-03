import { Box, Button, Divider, Stack, styled, Typography } from '@mui/material';
import { CloseButton, DeleteProduct } from 'assets';
import { useCart } from 'contexts/cart';
import { useWish } from 'contexts/wish';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTotalProductCart } from 'utils/totalProduct';

export const NavbarAction = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openWish, setOpenWish] = useState(false);
  const { cartItem, addToCart, removeFromCart, decreaseCart } = useCart();
  const { wishItem, toggleWish } = useWish();
  const handleClose = () => {
    setOpen(!open);
    // console.log(open);
  };
  const handleCloseWish = () => {
    setOpenWish(!openWish);
  };
  const totalPrice = useTotalProductCart();
  return (
    <ActionStyed>
      <IconStyled>
        <img src="profile.png" alt="" />
      </IconStyled>
      <IconStyled>
        <img src="search.png" alt="" />
      </IconStyled>
      <IconStyled onClick={handleCloseWish}>
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
            <CartList height={'60vh'}>
              {cartItem.map((item) => (
                <CartItem key={item.id}>
                  <Box width={'105px'} height={'105px'} borderRadius={'10px'}>
                    <ImgStyled src={item.images[0]} />
                  </Box>
                  <Stack sx={{ marginLeft: '15px', maxWidth: '160px' }}>
                    <Typography
                      sx={{
                        fontSize: '16px',
                        fontWeight: 400,
                        width: '95%',
                        textWrap: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                      {item.name}
                    </Typography>
                    <Stack flexDirection={'row'} alignItems={'center'} gap={'10px'}>
                      <Typography sx={{ fontSize: '16px', fontWeight: 300 }}>
                        {item.quantity}
                      </Typography>
                      <Typography sx={{ fontSize: '12px', fontWeight: 300 }}>X</Typography>
                      <Typography
                        sx={{ fontSize: '12px', fontWeight: 500, color: 'rgba(184, 142, 47, 1)' }}>
                        Rs. {item.price.toLocaleString('de-DE')}
                      </Typography>
                      <Box sx={{padding: '5px', cursor: 'pointer'}} onClick={() => {decreaseCart(item.id)}}>-</Box>
                    </Stack>
                  </Stack>
                  <Stack sx={{ padding: 0, margin: 0 }} onClick={() => removeFromCart(item)}>
                    <DeleteProduct />
                  </Stack>
                </CartItem>
              ))}
            </CartList>
            <Stack flexDirection={'row'} justifyContent={'space-between'} pt={'20px'}>
              <Typography>Subtotal</Typography>
              <Typography
                sx={{ fontSize: '16px', fontWeight: 600, color: 'rgba(184, 142, 47, 1)' }}>
                Rs. {totalPrice.toLocaleString('de-DE')}
              </Typography>
            </Stack>
            <DividerStyled sx={{ width: '100%' }} />
            <Stack flexDirection={'row'} justifyContent={'space-between'}>
              <ButtonStyled
                onClick={() => {
                  navigate('/cart');
                  handleClose();
                }}>
                Cart
              </ButtonStyled>
              <ButtonStyled
                onClick={() => {
                  (navigate('/checkout'), handleClose());
                }}>
                Checkout
              </ButtonStyled>
              <ButtonStyled
                onClick={() => {
                  (navigate('/comparison'), handleClose());
                }}>
                Comparison
              </ButtonStyled>
            </Stack>
          </CartModal>
        </CartOverlay>
      )}
      {openWish && (
        <CartOverlay onClick={handleCloseWish}>
          <CartModal
            onClick={(e) => {
              e.stopPropagation();
            }}>
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
                WishList
              </Typography>
              <Button onClick={handleCloseWish}>
                <CloseButton />
              </Button>
            </Stack>
            <DividerStyled sx={{ width: '75%' }} />
            <CartList height={'75vh'}>
              {wishItem.map((item) => (
                <CartItem key={item.id}>
                  <Box width={'105px'} height={'105px'} borderRadius={'10px'}>
                    <ImgStyled src={item.images[0]} />
                  </Box>
                  <Stack sx={{ marginLeft: '15px' }}>
                    <Typography
                      sx={{
                        fontSize: '16px',
                        fontWeight: 400,
                        width: '85%',
                        textWrap: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                      {item.name}
                    </Typography>
                    <Button
                      onClick={() => {
                        addToCart(item, 1);
                        toggleWish(item)
                      }} 
                      sx={{width: 'fit-content', bgcolor: 'gray'}}
                      >
                      Add to cart
                    </Button>
                  </Stack>
                  <Stack sx={{ padding: 0, margin: 0 }} onClick={() => toggleWish(item)}>
                    <DeleteProduct />
                  </Stack>
                </CartItem>
              ))}
            </CartList>
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
  },
  [theme.breakpoints.down('sm')]: {
    gap: '35px'
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
  alignItems: 'flex-start',
  overflowY: 'auto'
}));

const CartModal = styled(Box)(() => ({
  width: '360px',
  height: '100%',
  position: 'fixed',
  backgroundColor: '#fff',
  padding: '25px',
}));

const DividerStyled = styled(Divider)(() => ({
  height: '1px',
  margin: '25px 0',
  bgcolor: 'rgba(217, 217, 217, 1)'
}));

const CartList = styled(Stack)(() => ({
  flex: 1,
  // height: '60vh',
  display: 'flex',
  gap: '25px',
  overflow: 'hidden',
  overflowY: 'scroll'
}));

const CartItem = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around'
}));

const ButtonStyled = styled(Button)(() => ({
  fontSize: '12px',
  fontWeight: 400,
  borderRadius: '50px',
  border: '1px solid rgba(0, 0, 0, 1)',
  padding: '5px 25px'
}));

const ImgStyled = styled('img')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '10px'
}));
