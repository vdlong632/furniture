import { Box, Grid, Stack, styled, Typography } from '@mui/material';

const Room = [];
export const RoomType = () => {
  return (
    <Stack flex={1} margin={'0 100px'}>
      <Stack textAlign={'center'} p={'50px 0'} gap={'15px'}>
        <Typography
          sx={{
            color: 'rgba(51, 51, 51, 1)',
            fontSize: '32px',
            fontWeight: 700,
            lineHeight: '100%',
            letterSpacing: 0
          }}>
          Browse The Range
        </Typography>
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: '100%',
            letterSpacing: 0,
            color: 'rgba(102, 102, 102, 1)'
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Stack>
      <Grid container spacing={'15px'}>
        <Grid item xs={12} sm={6} md={4}>
          <BoxStyled>
            <ImgStyled src="dining.png" alt="" />
          </BoxStyled>
          <TitleStyled>Dining</TitleStyled>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BoxStyled>
            <ImgStyled src="living.png" alt="" />
          </BoxStyled>
          <TitleStyled>Living</TitleStyled>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BoxStyled>
            <ImgStyled src="bedroom.png" alt="" />
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
  borderRadius: '10px',
}));

const TitleStyled = styled(Typography)(() => ({
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '100%',
    letterSpacing: 0,
    textAlign: 'center',
    margin: '30px 0',
    color: 'rgba(51, 51, 51, 1)'
}))
