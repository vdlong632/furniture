import { Button, Stack, styled, Typography } from '@mui/material';
import { Calender, DashIcon, TagIcon } from 'assets';
import { useNavigate, useParams } from 'react-router-dom';
import { Blog } from 'services/blog';

type Props = {
  limit: number;
  blogs: Blog[];
};
export const BlogList = ({ limit, blogs }: Props) => {
  const slug = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const displayedBlog = limit ? blogs.slice(0, limit) : blogs;
  return (
    <Stack flex={1} width={{ lg: '65%', md: '100%' }} gap={'50px'}>
      {displayedBlog.map((blog) => (
        <Stack>
          <ImgStyled src={blog.image} />
          <Stack flexDirection={'row'} gap={'30px'} m={'15px 0'}>
            <Stack flexDirection={'row'} gap={'5px'}>
              <DashIcon />
              <InfoBlog>{blog.author}</InfoBlog>
            </Stack>
            <Stack flexDirection={'row'} gap={'5px'}>
              <Calender />
              <InfoBlog>{blog.published_at}</InfoBlog>
            </Stack>
            <Stack flexDirection={'row'} gap={'5px'}>
              <TagIcon />
              <InfoBlog>{blog.category}</InfoBlog>
            </Stack>
          </Stack>
          <Typography sx={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 500 }}>
            {blog.title}
          </Typography>
          <Typography
            sx={{
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: '150%',
              color: 'rgba(159, 159, 159, 1)',
              textAlign: 'justify',
              marginTop: '5px'
            }}>
            {blog.content}
          </Typography>
          <ButtonStyled
            onClick={() => {
              navigate(`/blog/slug/${blog.slug}`);
            }}>
            Read more
          </ButtonStyled>
        </Stack>
      ))}
    </Stack>
  );
};

const ButtonStyled = styled(Button)(() => ({
  fontSize: '16px',
  fontWeight: 400,
  backgroundColor: 'rgba(255, 255, 255, 1)',
  width: 'fit-content',
  padding: '0 0 8px 0',
  marginTop: '30px',
  borderRadius: 0,
  borderBottom: '1px solid rgba(0, 0, 0, 1)',
  '&:hover': {
    backgroundColor: 'transparent'
  }
}));

const ImgStyled = styled('img')(() => ({
  width: '100%',
  height: 'auto',
  borderRadius: '10px'
}));

const InfoBlog = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 400,
  color: 'rgba(159, 159, 159, 1)'
}));
