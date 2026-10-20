import { Box, Button, Grid, Stack, styled, Typography } from '@mui/material';
import { NextIcon } from 'assets';

export const Inspiration = () => {
  return (
    <Stack
      flex={1}
      p={{ xs: '40px 16px', sm: '40px 32px', md: '44px 75px' }}
      bgcolor={'rgba(252, 248, 243, 1)'}>
      <Grid container spacing={{ xs: 3, md: 4 }} alignItems={'center'}>
        <Grid item md={4} sm={12} xs={12}>
          <Stack>
            <Typography
              sx={{
                fontSize: { xs: '28px', md: '40px' },
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
                color: 'rgba(97, 97, 97, 1)',
                marginTop: '8px'
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
          <Box sx={{ position: 'relative' }}>
            <ImgStyled src="/bedroom2.png" alt="" sx={{ aspectRatio: '404 / 582' }} />
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
                  backgroundColor: 'rgba(255, 255, 255, 0.72)',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  padding: { xs: '16px 12px 16px 16px', md: '30px 15px 30px 30px' },
                  whiteSpace: 'nowrap'
                }}>
                <Typography
                  sx={{
                    fontSize: { xs: '14px', md: '16px' },
                    fontWeight: 500,
                    lineHeight: '150%',
                    letterSpacing: '0%',
                    color: 'rgba(97, 97, 97, 1)'
                  }}>
                  01 - Bedroom
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '22px', md: '28px' },
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
        <Grid item md={4} sm={6} xs={12} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <ImgStyled src="/living.png" alt="" sx={{ aspectRatio: '372 / 486' }} />
        </Grid>
      </Grid>
    </Stack>
  );
};

const ImgStyled = styled('img')(() => ({
  width: '100%',
  objectFit: 'cover',
  display: 'block'
}));
