import { Stack, Typography } from '@mui/material';
import { Banner } from './components/Banner';
import { RoomType } from './components/RoomType';
import { Inspiration } from './components/Inspiration';
import { ProductSection } from './components/ProductSection';
import { useProductSection } from './hook';

export const HomePage = () => {
  const { products } = useProductSection();
  return (
    <Stack>
      <Banner />
      <RoomType />
      <Typography
        sx={{
          fontSize: '40px',
          fontWeight: 700,
          lineHeight: '120%',
          letterSpacing: '0%',
          color: 'rgba(58, 58, 58, 1)',
          textAlign: 'center',
          marginTop: '50px'
        }}>
        Our Products
      </Typography>
      <ProductSection products={products} limit={8} showMore={true} />
      <Inspiration />
    </Stack>
  );
};
