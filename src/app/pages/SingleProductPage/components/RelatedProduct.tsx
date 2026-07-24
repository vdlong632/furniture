import { Stack, Typography } from '@mui/material';
import { ProductSection } from 'app/pages/HomePage/components/ProductSection';
import { useProductSection } from 'app/pages/HomePage/hook';

type Props = {
  currentCategory: string;
  currentProductId: number;
};
export const RelatedProduct = ({ currentCategory, currentProductId }: Props) => {
  const { products } = useProductSection();

  const related = products.filter(
    (product) => product.category === currentCategory && product.id !== currentProductId
  );
  return (
    <Stack>
      <Typography sx={{ textAlign: 'center', fontSize: '36px', fontWeight: 500 }}>
        Related Product
      </Typography>
      <ProductSection limit={4} products={related} showMore={true} />
    </Stack>
  );
};
