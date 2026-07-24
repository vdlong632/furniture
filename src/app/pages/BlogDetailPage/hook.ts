import { useGetBlogDetail } from './useGetBlogDetail';

export const useBlogDetail = () => {
  const { blog } = useGetBlogDetail();
  return {
    blog
  };
};
