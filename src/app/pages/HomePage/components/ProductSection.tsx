import { Box, Button, Grid, Stack, styled, Typography } from '@mui/material';
import { Product } from 'services/product';
import { useProductSection } from '../hook';
import { useNavigate } from 'react-router-dom';

type Props = {
  limit?: number;
  showMore?: boolean;
};
export const ProductSection = ({ limit, showMore = false }: Props) => {
  const { products, page, setPage, totalPages } = useProductSection();
  const navigate = useNavigate();
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };
  const displayedProduct = limit ? products.slice(0, limit) : products;

  // const displayImage =
  // Array.isArray(item.images) && item.images.length > 0
  //   ? item.images[0]
  //   : "/placeholder.jpg";
  return (
    <Stack flex={1} m={'0 75px'}>
      <Grid container spacing={'10px'}>
        {displayedProduct.map((product) => (
          <Grid item xs={3} key={product.id}>
            <ProductStyled>
              {/* <ImgStyled
                src={Array.isArray(product.images) ? product.images[0] : product.images}
                alt={product?.name || 'Product'}
              /> */}
              {product.discount && product.discount > 0 ? (
                <BadgeStyled>-{product.discount}%</BadgeStyled>
              ) : (
                <BadgeStyled>New</BadgeStyled>
              )}
              <Stack m={'20px 0px 40px 15px'}>
                <Typography sx={{ fontSize: '24px', fontWeight: 600 }}>{product.name}</Typography>
              </Stack>
            </ProductStyled>
          </Grid>
        ))}
      </Grid>
      {showMore && (
        <Button
          onClick={() => {
            navigate('/shop');
          }}
          sx={{
            color: 'rgba(184, 142, 47, 1)',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            width: 'fit-content',
            margin: '0 auto',
            borderRadius: '0px',
            border: '2px solid rgba(184, 142, 47, 1)',
            padding: '10px 30px'
          }}>
          Show More
        </Button>
      )}
    </Stack>
  );
};

const ProductStyled = styled(Stack)(() => ({
  backgroundColor: 'rgba(244, 245, 247, 1)',
  position: 'relative',
  cursor: 'pointer',
  '&:hover': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(58, 58, 58, 0.7)',
    zIndex: 4
  }
}));

const ImgStyled = styled('img')(() => ({
  height: '80%',
  objectFit: 'cover',
  borderRadius: '0px'
}));

const BadgeStyled = styled(Box)(() => ({
  color: 'rgba(255, 255, 255, 1)',
  fontSize: '16px',
  fontWeight: 500,
  position: 'absolute',
  zIndex: 1,
  top: '20px',
  right: '20px',
  width: '50px',
  height: '50px',
  backgroundColor: 'green',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%'
}));

const Overlay = styled(Box)(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(58, 58, 58, 0.7)',
  opacity: 0,
  visibility: 'hidden',
  transition: 'all 0.3s ease',
  zIndex: 4
}));
