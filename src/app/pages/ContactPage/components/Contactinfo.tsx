import { Stack, styled, Typography } from '@mui/material';
import { Address, Clock, PhoneIcon } from 'assets';

export const ContactInfo = () => {
  return (
    <Stack flex={1} gap={'20px'}>
      <Stack flexDirection={'row'} gap={'25px'}>
        <Address width={'30px'} height={'30px'} />
        <Stack>
          <TitleStyled>Address</TitleStyled>
          <DescStyled width={{ lg: '50%', md: '100%', sm: '100%' }}>
            236 5th SE Avenue, New York NY10000, United States
          </DescStyled>
        </Stack>
      </Stack>
      <Stack flexDirection={'row'} gap={'25px'}>
        <PhoneIcon width={'30px'} />
        <Stack>
          <TitleStyled>Phone</TitleStyled>
          <DescStyled>
            Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
          </DescStyled>
        </Stack>
      </Stack>
      <Stack flexDirection={'row'} gap={'25px'}>
        <Clock width={'30px'} />
        <Stack>
          <TitleStyled>Working Time</TitleStyled>
          <DescStyled width={{ lg: '80%', md: '100%' }}>Monday-Friday: 9:00 - 22:00</DescStyled>
          <DescStyled width={{ lg: '85%', md: '100%' }}>Saturday-Sunday: 9:00 - 21:00</DescStyled>
        </Stack>
      </Stack>
    </Stack>
  );
};

const TitleStyled = styled(Typography)(() => ({
  fontSize: '24px',
  fontWeight: 500,
  lineHeight: '120%',
  marginBottom: '5px',
  letterSpacing: '0%',
  color: 'rgba(0, 0, 0, 1)'
}));

const DescStyled = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '1.5',
  letterSpacing: '0%',
  color: 'rgba(0, 0, 0, 1)'
}));
