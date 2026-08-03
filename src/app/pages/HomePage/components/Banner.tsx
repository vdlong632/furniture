import { Box, Button, styled, Typography } from '@mui/material';

export const Banner = () => {
  return (
    <BannerBg>
      <ImgStyled src="mockupwall.png" alt="" />
      <MaskBanner
        sx={{
          padding: { md: '50px 30px 30px 30px', sm: '35px 0 15px 25px', xs: '20px 0 10px 10px' }
        }}>
        <Typography
          sx={{
            color: 'rgba(51, 51, 51, 1)',
            fontSize: 'clamp(11px, 1.5vw, 16px)',
            fontWeight: 600,
            lineHeight: '100%',
            letterSpacing: '3px',
            marginBottom: '10px'
          }}>
          New Arrival
        </Typography>
        <Typography
          sx={{
            width: '80%',
            // fontSize: '52px',
            // fontSize: 'clamp(20px, 4vw, 52px)',
            fontSize: { md: 'clamp(20px, 4vw, 52px)', sm: 'clamp(20px, 4vw, 32px)' },
            fontWeight: 700,
            lineHeight: '1.2',
            letterSpacing: '0px',
            color: 'rgba(184, 142, 47, 1)'
          }}>
          Discover Our New Collection
        </Typography>
        <Typography
          sx={{
            // fontSize: '18px',
            width: '100%',
            fontSize: 'clamp(11px, 1.5vw, 18px)',
            fontWeight: 500,
            lineHeight: '1.5',
            letterSpacing: '0px',
            color: 'rgba(51, 51, 51, 1)'
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis.
        </Typography>
        <Button
          sx={{
            backgroundColor: 'rgba(184, 142, 47, 1)',
            fontSize: 'clamp(11px, 1.5vw, 16px)',
            fontWeight: 700,
            color: 'rgba(255, 255, 255, 1)',
            borderRadius: 0,
            // padding: 'clamp(8px, calc(4vw - 8px), 15px) clamp(20px, calc(4vw - 10px), 30px)',
            padding: {
              md: 'clamp(8px, calc(4vw - 8px), 15px) clamp(20px, calc(4vw - 10px), 30px)',
              sm: 'clamp(8px, calc(4vw - 8px), 10px) clamp(20px, calc(4vw - 10px), 15px)'
            },
            marginTop: 'clamp(10px, 2vw, 45px)',
            '&:hover': {
              backgroundColor: 'rgba(184, 142, 47, 1)'
            }
          }}>
          BUY NOW
        </Button>
      </MaskBanner>
    </BannerBg>
  );
};

const BannerBg = styled(Box)(() => ({
  flex: 1,
  width: '100vw',
  height: '100vh',
  position: 'relative'
}));

const ImgStyled = styled('img')(() => ({
  width: 'calc(100vw - 6px)',
  height: '100%'
}));

const MaskBanner = styled(Box)(() => ({
  width: '46%',
  height: '62%',
  backgroundColor: 'rgba(255, 243, 227, 1)',
  position: 'absolute',
  zIndex: 1,
  left: '51.5%',
  top: '22%',
  // padding: '50px 30px 30px 30px',
  borderRadius: '10px'
}));
