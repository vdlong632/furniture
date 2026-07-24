import { useAsyncCallback } from 'hooks/useAsyncCallback';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Blog, getBlogDetail } from 'services/blog';

export const useGetBlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);

  const fetchBlogDetail = useCallback(async () => {
    if (!slug) return;
    const res = await getBlogDetail(slug);
    setBlog(res);
  }, [slug]);

  useEffect(() => {
    fetchBlogDetail();
  }, [fetchBlogDetail]);

  const { asyncCallback: refetch } = useAsyncCallback(fetchBlogDetail, [fetchBlogDetail]);
  return {
    blog,
    refetch
  };
};
