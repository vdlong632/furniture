import { Box, Button, styled, Typography } from '@mui/material';

export const Banner = () => {
  return (
    <BannerBg>
      <ImgStyled src="/mockupwall.png" alt="" />
      <MaskBanner>
        <Typography
          sx={{
            color: 'rgba(51, 51, 51, 1)',
            fontSize: { xs: '12px', md: '16px' },
            fontWeight: 600,
            lineHeight: '100%',
            letterSpacing: '3px',
            marginBottom: '10px'
          }}>
          New Arrival
        </Typography>
        <Typography
          sx={{
            width: { xs: '100%', md: '80%' },
            fontSize: { xs: '28px', sm: '36px', md: 'clamp(36px, 3.6vw, 52px)' },
            fontWeight: 700,
            lineHeight: '1.2',
            letterSpacing: '0px',
            color: 'rgba(184, 142, 47, 1)'
          }}>
          Discover Our New Collection
        </Typography>
        <Typography
          sx={{
            width: '100%',
            marginTop: '12px',
            fontSize: { xs: '14px', md: 'clamp(14px, 1.3vw, 18px)' },
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
            fontSize: { xs: '14px', md: '16px' },
            fontWeight: 700,
            color: 'rgba(255, 255, 255, 1)',
            borderRadius: 0,
            padding: { xs: '12px 32px', md: '20px 64px' },
            marginTop: { xs: '20px', md: '45px' },
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

const BannerBg = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'calc(100vh - 100px)',
  minHeight: '560px',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    minHeight: 0,
    display: 'flex',
    flexDirection: 'column'
  }
}));

const ImgStyled = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
  [theme.breakpoints.down('md')]: {
    height: '45vh'
  }
}));

const MaskBanner = styled(Box)(({ theme }) => ({
  width: '46%',
  maxWidth: '640px',
  backgroundColor: 'rgba(255, 243, 227, 1)',
  position: 'absolute',
  zIndex: 1,
  right: '4%',
  top: '50%',
  transform: 'translateY(-50%)',
  padding: '60px 40px 40px',
  borderRadius: '10px',
  [theme.breakpoints.down('md')]: {
    position: 'relative',
    width: 'auto',
    maxWidth: 'none',
    right: 'auto',
    top: 'auto',
    transform: 'none',
    margin: '-60px 16px 0',
    padding: '28px 20px'
  }
}));
