import { useGetProduct } from './useGetProduct';

export const useProductSection = () => {
  const { products, total, page, setPage, totalPages } = useGetProduct();
  return {
    products,
    total,
    page,
    setPage,
    totalPages
  };
};
