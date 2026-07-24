import { Divider, Stack, styled, Typography } from '@mui/material';
import { useProductDetail } from './hook';
import { ProductDetail } from './components/ProductDetail';
import { useNavigate } from 'react-router-dom';
import { RelatedProduct } from './components/RelatedProduct';

export const SingleProductPage = () => {
  const { product } = useProductDetail();
  const navigate = useNavigate();
  return (
    <Stack flex={1}>
      <Stack
        width={'100%'}
        height={'80px'}
        bgcolor={'rgba(249, 241, 231, 1)'}
        flexDirection={'row'}
        p={'0 75px'}
        gap={'30px'}
        alignItems={'center'}>
        <TextStyled
          sx={{ cursor: 'pointer', color: 'rgba(159, 159, 159, 1)' }}
          onClick={() => {
            navigate('/');
          }}>
          Home
        </TextStyled>
        <TextStyled>{'>'}</TextStyled>
        <TextStyled
          sx={{ cursor: 'pointer', color: 'rgba(159, 159, 159, 1)' }}
          onClick={() => {
            navigate('/shop');
          }}>
          Shop
        </TextStyled>
        <TextStyled>{'>'}</TextStyled>
        <Divider sx={{ width: '1px', height: '35px', backgroundColor: 'rgba(159, 159, 159, 1)' }} />
        <TextStyled>{product?.name}</TextStyled>
      </Stack>
      {!product ? <Typography>Loading...</Typography> : <ProductDetail product={product} />}
      {!product ? (
        <Typography>Loading...</Typography>
      ) : (
        <RelatedProduct currentCategory={product.category} currentProductId={product.id} />
      )}
    </Stack>
  );
};

const TextStyled = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 400
}));
