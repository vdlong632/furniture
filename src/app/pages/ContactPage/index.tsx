import { Button, Grid, Stack, Typography } from '@mui/material';
import { PageHeader } from 'app/components/elements/PageHeader';
import { ContactInfo } from './components/Contactinfo';
import { ContactForm } from './components/ContactForm';
import { useContactForm } from './hook';
import { FormProvider } from 'react-hook-form';
import { Policy } from '../ShopPage/components/Policy';

export const ContactPage = () => {
  const { methods, handleSubmit } = useContactForm();
  return (
    <FormProvider {...methods}>
      <Stack flex={1}>
        <PageHeader title={'Contact'} route={[{ label: 'Contact', path: '/contact' }]} />
        <Stack flex={1} m={{ xs: '0 16px 32px', sm: '20px 32px', md: '20px 100px' }}>
          <Stack
            m={{ xs: '32px 0', md: '40px 0' }}
            display={'flex'}
            alignItems={'center'}
            gap={'8px'}>
            <Typography
              sx={{ fontSize: 'clamp(25px, 3.5vw, 36px)', fontWeight: 600, textAlign: 'center' }}>
              Get In Touch With Us
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 400,
                color: 'rgba(159, 159, 159, 1)',
                textAlign: 'center',
                maxWidth: '640px'
              }}>
              For More Information About Our Product & Services. Please Feel Free To Drop Us An
              Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
            </Typography>
          </Stack>
          <Stack flex={1} m={{ xs: 0, md: '0px 10vw' }}>
            <Grid container spacing={{ xs: '32px', md: '10px' }}>
              <Grid item xs={12} md={6}>
                <ContactInfo />
              </Grid>
              <Grid item xs={12} md={6}>
                <ContactForm handleSubmit={handleSubmit} />
              </Grid>
            </Grid>
          </Stack>
        </Stack>
        <Policy />
      </Stack>
    </FormProvider>
  );
};
