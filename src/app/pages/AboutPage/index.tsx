import { Box, Stack, Typography } from '@mui/material';
import { PageHeader } from 'app/components/elements/PageHeader';

export const AboutPage = () => {
  return (
    <Stack flex={1}>
      <PageHeader title={'About'} route={[{ label: 'About', path: '/about' }]} />
      <Stack>
        <Stack>
          <Typography>About page</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
