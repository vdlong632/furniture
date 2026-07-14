import { useAsyncCallback } from 'hooks/useAsyncCallback';
import { useCallback, useEffect, useState } from 'react';
import { Blog, getBlog } from 'services/blog';

const PAGE_SIZE = 3;

export const useGetBlog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const fetchBlog = useCallback(async () => {
    const res = await getBlog();
    setBlogs(res.list || []);
    setTotal(res.total || 0);
  }, []);

  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]);

  const { asyncCallback: refetch } = useAsyncCallback(fetchBlog, [fetchBlog]);

  const totalPages = Math.ceil(total / PAGE_SIZE);
  return {
    blogs,
    total,
    page,
    setPage,
    totalPages,
    refetch
  };
};
