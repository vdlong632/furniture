import { Box, Input, InputAdornment, Stack, styled, Typography } from '@mui/material';
import { PageHeader } from 'app/components/elements/PageHeader';
import { BlogList } from './components/BlogList';
import { Policy } from '../ShopPage/components/Policy';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'app/components/elements/InputText';
import { IconSearch } from 'assets';
import { useBlogPage } from './hook';

export const BlogPage = () => {
  const { blogs } = useBlogPage();
  const navigate = useNavigate();

  return (
    <Stack flex={1}>
      <PageHeader title={'Blog'} route={[{ label: 'Blog', path: '/blog' }]} />
      <Stack padding={'80px'} flexDirection={'row'} gap={'30px'}>
        <BlogList limit={3} blogs={blogs} />
        <Stack padding={'0 20px'} alignItems={'center'}>
          <Stack width={'80%'}>
            <InputText
              inputProps={{
                sx: { alignItems: 'center' }
              }}
              startAdornment={
                <InputAdornment position="start">
                  <IconSearch />
                </InputAdornment>
              }
            />
            <Stack padding={'30px 0 30px 30px'} gap={'25px'}>
              <Typography sx={{ fontSize: '24px', fontWeight: 500 }}>Categories</Typography>
              <StackStyled>
                <TextStyled>Crafts</TextStyled>
                <TextStyled>2</TextStyled>
              </StackStyled>
              <StackStyled>
                <TextStyled>Design</TextStyled>
                <TextStyled>8</TextStyled>
              </StackStyled>
              <StackStyled>
                <TextStyled>Handmade</TextStyled>
                <TextStyled>7</TextStyled>
              </StackStyled>
              <StackStyled>
                <TextStyled>Interior</TextStyled>
                <TextStyled>1</TextStyled>
              </StackStyled>
              <StackStyled>
                <TextStyled>Wood</TextStyled>
                <TextStyled>6</TextStyled>
              </StackStyled>
            </Stack>
            <Stack padding={'30px 0 30px 30px'} gap={'30px'}>
              <Typography sx={{ fontSize: '24px', fontWeight: 500 }}>Recent Posts</Typography>
              {blogs.map((blog) => (
                <Stack
                  sx={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    navigate(`/blog/slug/${blog.slug}`);
                  }}>
                  <Box>
                    <ImgStyled src={blog.image} />
                  </Box>
                  <Stack>
                    <Typography>{blog.title}</Typography>
                    <Typography
                      sx={{ fontSize: '12px', fontWeight: 400, color: 'rgba(159, 159, 159, 1)' }}>
                      {blog.published_at}
                    </Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Policy />
    </Stack>
  );
};

const StackStyled = styled(Stack)(() => ({
  flexDirection: 'row',
  justifyContent: 'space-between'
}));

const TextStyled = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 400,
  color: 'rgba(159, 159, 159, 1)'
}));

const ImgStyled = styled('img')(() => ({
  width: '80px',
  height: '80px',
  borderRadius: '10px'
  // objectFit: 'cover'
}));
