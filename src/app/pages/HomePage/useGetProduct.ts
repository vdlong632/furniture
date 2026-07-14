import { useAsyncCallback } from 'hooks/useAsyncCallback';
import { useCallback, useEffect, useState } from 'react';
import { getProduct, Product } from 'services/product';

const PAGE_SIZE = 12;

export const useGetProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const fetchProduct = useCallback(async () => {
    const res = await getProduct();
    setProducts(res.list ?? []);
    setTotal(res.total ?? 0);
    console.log('API response:', res);
    console.log(products);
  }, []);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const { asyncCallback: refetch } = useAsyncCallback(fetchProduct, [fetchProduct]);

  const totalPages = Math.ceil(total / PAGE_SIZE);
  return {
    products,
    total,
    page,
    setPage,
    totalPages,
    refetch
  };
};
