import { useGetProductDetail } from './useGetProductDetail';

export const useProductDetail = () => {
  const { product } = useGetProductDetail();
  return {
    product
  };
};
