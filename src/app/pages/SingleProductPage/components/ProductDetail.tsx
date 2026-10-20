import { Box, Button, Checkbox, Stack, styled, Typography } from '@mui/material';
import { CheckboxCustom } from 'app/components/elements/CheckBox';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'assets';
import { useCart } from 'contexts/cart';
import { useState } from 'react';
import { Product } from 'services/product';

type Props = {
  product: Product;
};
export const ProductDetail = ({ product }: Props) => {
  const [picture, setPicture] = useState(product?.images[0]);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]?.code || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.code || '');
  const [count, setCount] = useState(1);
  const { addToCart } = useCart();

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, count);
  };
  return (
    <Stack
      flex={1}
      p={{ xs: '24px 16px 0', sm: '30px 32px 0', md: '30px 75px 0 75px' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      gap={{ xs: '32px', md: '60px' }}>
      <Stack flexDirection={{ xs: 'column-reverse', md: 'row' }} gap={'20px'} flexShrink={0}>
        <ImgItem>
          {product &&
            Array.isArray(product.images) &&
            product.images.map((imgUrl, index) => (
              <ImgStyled
                key={index}
                src={imgUrl}
                alt={product.name}
                onClick={() => {
                  setPicture(imgUrl);
                }}
              />
            ))}
        </ImgItem>
        <Stack
          width={{ xs: '100%', md: '27vw' }}
          height={{ xs: 'auto', md: '65vh' }}
          sx={{ aspectRatio: { xs: '1 / 1', md: 'auto' } }}>
          {product?.images ? (
            <MainImg src={picture} alt="" />
          ) : (
            <MainImg src={product?.images[0]} alt={product?.name} />
          )}
        </Stack>
      </Stack>
      <Stack gap={'15px'} flex={1} minWidth={0}>
        <Typography
          sx={{ fontSize: 'clamp(25px, 4vw, 42px)', fontWeight: 400, lineHeight: '120%' }}>
          {product?.name}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '20px', md: '24px' },
            fontWeight: 500,
            color: 'rgba(159, 159, 159, 1)'
          }}>
          Rs. {product?.price.toLocaleString('de-DE')}
        </Typography>
        <Typography>{product?.rating}</Typography>
        <Typography sx={{ width: { xs: '100%', md: '80%' } }}>{product?.description}</Typography>
        <Typography>Size</Typography>
        <Stack flexDirection={'row'} gap={'20px'}>
          {product?.sizes.map((size) => (
            <Box
              key={size.code}
              sx={{
                cursor: 'pointer',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: selectedSize === size.code ? 'rgba(184, 142, 47, 1)' : '',
                color: selectedSize === size.code ? 'white' : 'black',
                borderRadius: selectedSize === size.code ? '5px' : '0px'
              }}
              onClick={() => {
                setSelectedSize(size.code);
              }}>
              {size.code}
            </Box>
          ))}
        </Stack>
        <Typography>Color</Typography>
        <Stack flexDirection={'row'} gap={'20px'}>
          {product?.colors.map((color) => (
            <Box
              key={color.code}
              sx={{
                cursor: 'pointer',
                width: '30px',
                height: '30px',
                backgroundColor: color.code,
                borderRadius: '50%',
                border: selectedColor === color.code ? '2px solid rgba(186, 30, 30, 1)' : ''
              }}
              onClick={() => {
                setSelectedColor(color.code);
              }}></Box>
          ))}
        </Stack>
        <Stack
          flexDirection={'row'}
          gap={{ xs: '12px', md: '20px' }}
          flexWrap={'wrap'}
          alignItems={'center'}>
          <Stack
            flexDirection={'row'}
            alignItems={'center'}
            gap={{ xs: '20px', md: '30px' }}
            sx={{
              border: '1px solid rgba(159, 159, 159, 1)',
              padding: ' 10px 15px',
              borderRadius: '10px',
              boxSizing: 'border-box',
              height: '50px'
            }}>
            <Typography onClick={decrease} sx={{ cursor: 'pointer' }}>
              -
            </Typography>
            <Typography width={'30px'} textAlign={'center'}>
              {count}
            </Typography>
            <Typography onClick={increase} sx={{ cursor: 'pointer' }}>
              +
            </Typography>
          </Stack>
          <ButtonStyled onClick={handleAddToCart}>Add To Cart</ButtonStyled>
          <ButtonStyled>+ Compare</ButtonStyled>
        </Stack>
        <Stack
          flexDirection={'row'}
          gap={'15px'}
          sx={{
            fontSize: '16px',
            fontWeight: 400,
            color: 'rgba(159, 159, 159, 1)',
            borderTop: '1px solid rgba(159, 159, 159, 1)',
            padding: { xs: '24px 0', md: '40px 0' },
            marginTop: { xs: '16px', md: '30px' }
          }}>
          <Stack gap={'20px'}>
            <Typography>SKU</Typography>
            <Typography>Category</Typography>
            <Typography>Tags</Typography>
            <Typography>Share</Typography>
          </Stack>
          <Stack gap={'20px'}>
            <Typography>:</Typography>
            <Typography>:</Typography>
            <Typography>:</Typography>
            <Typography>:</Typography>
          </Stack>
          <Stack gap={'20px'}>
            <Typography>{product?.sku}</Typography>
            <Typography>{product?.category}</Typography>
            <Typography>{product?.tags.join(', ')}</Typography>
            <Stack flexDirection={'row'} gap={'20px'} alignItems={'center'}>
              <FacebookIcon />
              <LinkedinIcon />
              <TwitterIcon />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

const ImgItem = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  gap: '20px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'row',
    gap: '12px',
    overflowX: 'auto'
  }
}));

const ImgStyled = styled('img')(() => ({
  width: '76px',
  height: '80px',
  flexShrink: 0,
  objectFit: 'cover',
  borderRadius: '10px',
  cursor: 'pointer'
}));

const MainImg = styled('img')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '10px'
}));

const ButtonStyled = styled(Button)(() => ({
  border: '1px solid rgba(0, 0, 0, 1)',
  borderRadius: '15px',
  lineHeight: '2.5',
  textWrap: 'nowrap',
  fontWeight: '400',
  '&:hover': {
    backgroundColor: 'none'
  }
}));
