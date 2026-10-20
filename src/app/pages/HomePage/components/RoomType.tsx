import { Box, Grid, Stack, styled, Typography } from '@mui/material';

export const RoomType = () => {
  return (
    <Stack flex={1} margin={{ xs: '0 16px', sm: '0 32px', md: '0 100px' }}>
      <Stack textAlign={'center'} p={{ xs: '40px 0 24px', md: '50px 0' }} gap={'15px'}>
        <Typography
          sx={{
            color: 'rgba(51, 51, 51, 1)',
            fontSize: { xs: '26px', md: '32px' },
            fontWeight: 700,
            lineHeight: '100%',
            letterSpacing: 0
          }}>
          Browse The Range
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '16px', md: '20px' },
            fontWeight: 400,
            lineHeight: '140%',
            letterSpacing: 0,
            color: 'rgba(102, 102, 102, 1)'
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Stack>
      <Grid container spacing={'15px'}>
        <Grid item xs={12} sm={6} md={4}>
          <BoxStyled>
            <ImgStyled src="/dining.png" alt="" />
          </BoxStyled>
          <TitleStyled>Dining</TitleStyled>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BoxStyled>
            <ImgStyled src="/living.png" alt="" />
          </BoxStyled>
          <TitleStyled>Living</TitleStyled>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BoxStyled>
            <ImgStyled src="/bedroom.png" alt="" />
          </BoxStyled>
          <TitleStyled>Bedroom</TitleStyled>
        </Grid>
      </Grid>
    </Stack>
  );
};

const BoxStyled = styled(Box)(() => ({
  borderRadius: '10px'
}));

const ImgStyled = styled('img')(() => ({
  width: '100%',
  aspectRatio: '381 / 480',
  objectFit: 'cover',
  display: 'block',
  borderRadius: '10px'
}));

const TitleStyled = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 600,
  lineHeight: '100%',
  letterSpacing: 0,
  textAlign: 'center',
  margin: '30px 0',
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
    margin: '16px 0 24px'
  },
  color: 'rgba(51, 51, 51, 1)'
}));
