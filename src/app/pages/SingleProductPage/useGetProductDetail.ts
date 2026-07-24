import { useAsyncCallback } from 'hooks/useAsyncCallback';
import { getProduct, getProductDetail } from './../../../services/product';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from 'services/product';

export const useGetProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  // const {}
  const [product, setProduct] = useState<Product | null>(null);

  const fetchProductDetail = useCallback(async () => {
    if (!slug) return;
    const res = await getProductDetail(slug);
    setProduct(res);
  }, [slug]);

  useEffect(() => {
    fetchProductDetail();
  }, [fetchProductDetail]);

  const { asyncCallback: refetch } = useAsyncCallback(fetchProductDetail, [fetchProductDetail]);
  return {
    product,
    refetch
  };
};
