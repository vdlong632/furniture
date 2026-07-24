import { Box, Button, Grid, Stack, styled, Typography } from '@mui/material';
import { useProductSection } from '../hook';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { CompareIcon, Hearted, HeartIcon, ShareIcon } from 'assets';
import { Product } from 'services/product';
import { useCart } from 'contexts/cart';
import { useWish } from 'contexts/wish';

type Props = {
  products: Product[];
  limit?: number;
  showMore?: boolean;
  filterRoom?: string;
};
export const ProductSection = ({
  products,
  limit,
  showMore = false,
  filterRoom = 'default'
}: Props) => {
  // const { products } = useProductSection();
  const slug = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart } = useCart();
  const { wishItem, toggleWish } = useWish();

  // const currentUrl = window.location.origin + location.pathname;

  const filterProduct =
    filterRoom === 'default' ? products : products.filter((p) => p.category === filterRoom);
  // console.log('type room', filterProduct)

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
  };

  const handleCompare = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  // const handleHeart = (productId: number) => {
  //   toggleWish(productId);
  // };

  return (
    <Stack flex={1} m={'50px 75px'}>
      <Grid container spacing={'20px'}>
        {filterProduct.slice(0, limit).map((product) => (
          <Grid item xs={12} md={3} sm={6} key={product.id}>
            <ProductStyled
              sx={{
                position: 'relative',
                '&:hover .overlay': {
                  opacity: 1,
                  visibility: 'visible'
                }
              }}
              onClick={() => {
                if (slug) {
                  navigate(`/products/slug/${product.slug}`);
                }
              }}>
              <Box height={'45vh'}>
                <ImgStyled
                  src={Array.isArray(product.images) ? product.images[0] : product.images}
                  alt={product?.name || 'Product'}
                />
              </Box>
              <OverlayStyled className="overlay">
                <Button
                  sx={{
                    color: 'rgba(184, 142, 47, 1)',
                    bgcolor: 'rgba(255, 255, 255, 1)',
                    width: 'auto-fit',
                    borderRadius: 0,
                    padding: '10px 45px',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 1)'
                    }
                  }}
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}>
                  Add to cart
                </Button>
                <StackStyled gap={'20px'}>
                  <StackStyled
                    gap={'5px'}
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      const detailUrl = `http://localhost:3000/products/slug/${product.slug}`;
                      navigator.clipboard.writeText(detailUrl);
                      alert('Copied: ' + detailUrl);
                    }}>
                    <ShareIcon />
                    <TextIconStyled>Share</TextIconStyled>
                  </StackStyled>
                  <StackStyled gap={'5px'} onClick={handleCompare}>
                    <CompareIcon />
                    <TextIconStyled>Compare</TextIconStyled>
                  </StackStyled>
                  <StackStyled
                    gap={'5px'}
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      toggleWish(product);
                    }}>
                    {wishItem.some((item) => item.id === product.id) ? (
                      <Hearted width={'20px'} height={'20px'} />
                    ) : (
                      <HeartIcon />
                    )}
                    <TextIconStyled>Heart</TextIconStyled>
                  </StackStyled>
                </StackStyled>
              </OverlayStyled>
              {product.discount && product.discount > 0 ? (
                <BadgeStyled bgcolor={'rgba(233, 113, 113, 1)'}>-{product.discount}%</BadgeStyled>
              ) : product.isNew ? (
                <BadgeStyled bgcolor={'rgba(46, 193, 172, 1)'}>New</BadgeStyled>
              ) : null}
              <Stack m={'20px 15px 40px 15px'} gap={'10px'}>
                <Typography
                  sx={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: 'rgba(58, 58, 58, 1)',
                    width: '100%',
                    textWrap: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                  {product.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: 500,
                    color: 'rgba(137, 137, 137, 1)',
                    textWrap: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                  {product.material}
                </Typography>
                <Stack
                  flexDirection={'row'}
                  justifyContent={'space-between'}
                  alignItems={'flex-end'}>
                  <Typography
                    sx={{
                      fontSize: '18px',
                      fontWeight: 600,
                      lineHeight: '150%',
                      color: 'rgba(58, 58, 58, 1)'
                    }}>
                    Rp {product.price.toLocaleString('de-DE')}
                  </Typography>
                  {product.oldPrice && (
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '150%',
                        color: 'rgba(176, 176, 176, 1)',
                        textDecoration: 'line-through'
                      }}>
                      Rp {product.oldPrice.toLocaleString('de-DE')}
                    </Typography>
                  )}
                </Stack>
              </Stack>
            </ProductStyled>
          </Grid>
        ))}
      </Grid>
      {showMore && (
        <ButtonStyled
          onClick={() => {
            navigate('/shop');
          }}>
          Show More
        </ButtonStyled>
      )}
    </Stack>
  );
};

const ProductStyled = styled(Stack)(() => ({
  backgroundColor: 'rgba(244, 245, 247, 1)',
  position: 'relative',
  cursor: 'pointer'
}));

const ImgStyled = styled('img')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover'
}));

const BadgeStyled = styled(Box)(() => ({
  color: 'rgba(255, 255, 255, 1)',
  fontSize: '16px',
  fontWeight: 500,
  position: 'absolute',
  zIndex: 1,
  top: '20px',
  right: '20px',
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%'
}));

export const TextIconStyled = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: 600,
  color: 'rgba(255, 255, 255, 1)'
}));

const StackStyled = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center'
}));

const OverlayStyled = styled(Stack)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(58, 58, 58, 0.7)',
  opacity: 0,
  visibility: 'hidden',
  transition: 'all 0.3s ease',
  zIndex: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px'
}));

const ButtonStyled = styled(Button)(() => ({
  color: 'rgba(184, 142, 47, 1)',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  width: 'fit-content',
  margin: '0 auto',
  borderRadius: '0px',
  border: '2px solid rgba(184, 142, 47, 1)',
  padding: '10px 30px',
  marginTop: '40px'
}));
