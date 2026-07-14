import { Stack } from '@mui/material';
import { useBlogPage } from '../hook';

type Props = {
  limit: number;
};
export const BlogList = ({ limit }: Props) => {
  const { blogs, page, setPage, totalPages } = useBlogPage();

  //   const displayedBlog = limit ? blogs.slice(0, limit) : blogs;
  return (
    <Stack flex={1}>
      {blogs.map((blog) => (
        <Stack key={blog.id}>
          <img src={blog.image} />
          <Stack>Blog</Stack>
        </Stack>
      ))}
    </Stack>
  );
};
