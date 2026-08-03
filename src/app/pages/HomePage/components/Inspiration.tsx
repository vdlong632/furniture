import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { NextIcon } from 'assets';
// import 'react-multi-carousel/lib/styles.css';

export const Inspiration = () => {
  const images = [
    '/bedroom.png',
    '/bedroom2.png',
    '/dining.png',
    '/living.png'
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <Stack flex={1} p={'30px 0px 30px 75px'} bgcolor={'rgba(252, 248, 243, 1)'}>
      <Grid container spacing={4}>
        <Grid item md={4} sm={6} xs={12} sx={{ alignContent: 'center' }}>
          <Stack>
            <Typography
              sx={{
                fontSize: '40px',
                fontWeight: 700,
                lineHeight: '120%',
                letterSpacing: '0%',
                color: 'rgba(58, 58, 58, 1)'
              }}>
              50+ Beautiful rooms inspiration
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '150%',
                letterSpacing: '0px',
                color: 'rgba(97, 97, 97, 1)'
              }}>
              Our designer already made a lot of beautiful prototipe of rooms that inspire you
            </Typography>
            <Button
              sx={{
                backgroundColor: 'rgba(184, 142, 47, 1)',
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '150%',
                letterSpacing: '0%',
                color: 'rgba(255, 255, 255, 1)',
                borderRadius: 0,
                padding: '15px 25px',
                width: 'fit-content',
                marginTop: '25px',
                '&:hover': {
                  backgroundColor: 'rgba(184, 142, 47, 1)'
                }
              }}>
              Explore More
            </Button>
          </Stack>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Box sx={{ position: 'relative', display: 'flex' }}>
            <img src="bedroom2.png" alt="" />
            <Stack
              sx={{
                position: 'absolute',
                zIndex: 2,
                left: '20px',
                bottom: '20px',
                alignItems: 'flex-end',
                flexDirection: 'row'
              }}>
              <Stack
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  backgroundBlendMode: 'overlay',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  padding: '30px 15px 30px 30px',
                  whiteSpace: 'nowrap'
                }}>
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: ' 150%',
                    letterSpacing: '0%',
                    color: 'rgba(97, 97, 97, 1)'
                  }}>
                  01 - Bedroom
                </Typography>
                <Typography
                  sx={{
                    fontSize: '28px',
                    fontWeight: 600,
                    lineHeight: '120%',
                    letterSpacing: '0%',
                    color: 'rgba(58, 58, 58, 1)'
                  }}>
                  Inner Peace
                </Typography>
              </Stack>
              <Box
                sx={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'rgba(184, 142, 47, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <NextIcon />
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Stack height={'100%'} width={'100%'}>
            {/* <Carousel
              responsive={responsive}
              infinite
              autoPlay={false}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              showDots={true}>
              {...images.map((src, i) => (
                <Box key={i} sx={{ px: 1, width: '100%', height: '100%', overflow: 'hidden', overflowX: 'scroll'}}>
                  <img src={src} alt={`slide-${i}`} style={{ minWidth: '100%'}} />
                </Box>
              ))}
            </Carousel> */}
          </Stack>
        </Grid> 
      </Grid>
    </Stack>
  );
};
