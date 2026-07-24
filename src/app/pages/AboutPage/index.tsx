import { Box, Stack, Typography } from '@mui/material';
import { PageHeader } from 'app/components/elements/PageHeader';

export const AboutPage = () => {
  return (
    <Stack flex={1}>
      <PageHeader title={'About'} route={[{ label: 'About', path: '/about' }]} />
      <Stack>
        <Stack
          width={'100px'}
          height={'100px'}
          sx={{
            position: 'relative',
            '&:hover .overlay': {
              opacity: 1,
              visibility: 'visible'
            }
          }}>
          <Typography>Test</Typography>
          <Stack
            className="overlay"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(58, 58, 58, 0.7)',
              opacity: 0,
              visibility: 'hidden',
              transition: 'all 0.3s ease',
              zIndex: 100,
              color: 'white',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            Hello
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
