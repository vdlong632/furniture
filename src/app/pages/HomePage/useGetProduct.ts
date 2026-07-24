import { useAsyncCallback } from 'hooks/useAsyncCallback';
import { useCallback, useEffect, useState } from 'react';
import { getProduct, Product } from 'services/product';

export const useGetProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProduct = useCallback(async () => {
    const res = await getProduct();
    setProducts(res);
  }, []);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const { asyncCallback: refetch } = useAsyncCallback(fetchProduct, [fetchProduct]);

  // const totalPages = Math.ceil(total / PAGE_SIZE);
  return {
    products,
    refetch
  };
};
