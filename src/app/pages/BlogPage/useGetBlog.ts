import { useAsyncCallback } from 'hooks/useAsyncCallback';
import { useCallback, useEffect, useState } from 'react';
import { Blog, getBlog } from 'services/blog';

const PAGE_SIZE = 3;

export const useGetBlog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlog = useCallback(async () => {
    const res = await getBlog();
    setBlogs(res);
  }, []);

  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]);

  const { asyncCallback: refetch } = useAsyncCallback(fetchBlog, [fetchBlog]);

  // const totalPages = Math.ceil(total / PAGE_SIZE);
  return {
    blogs,
    refetch
  };
};
