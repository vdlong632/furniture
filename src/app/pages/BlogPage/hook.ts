import { useGetBlog } from './useGetBlog';

export const useBlogPage = () => {
  const { blogs, total, page, setPage, totalPages } = useGetBlog();
  return {
    blogs,
    total,
    page,
    setPage,
    totalPages
  };
};
