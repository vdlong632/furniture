import { useGetProduct } from './useGetProduct';

export const useProductSection = () => {
  const { products } = useGetProduct();
  return {
    products
  };
};
