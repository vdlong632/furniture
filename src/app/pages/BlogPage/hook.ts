import { useGetBlog } from './useGetBlog';

export const useBlogPage = () => {
  const { blogs } = useGetBlog();
  return {
    blogs
  };
};
