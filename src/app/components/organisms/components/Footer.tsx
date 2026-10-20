import { Box, Button, Grid, Input, Stack, styled, Typography } from '@mui/material';
import { lowerCase, upperCase } from 'lodash';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const links = ['Home', 'Shop', 'About', 'Contact', 'Blog'];
  const helps = ['Payment Options', 'Return', 'Privaci Policies'];
  return (
    <Stack
      p={{ xs: '30px 16px', sm: '30px 32px', md: '30px 75px 35px 75px' }}
      borderTop={'1px solid rgba(159, 159, 159, 1)'}>
      <Grid container spacing={{ md: '10px', sm: '30px', xs: '30px' }}>
        <Grid item xs={12} md={4}>
          <Stack>
            <LogoStyled>Funiro.</LogoStyled>
            <AddressStyled>
              400 University Drive Suite 200 Coral <br /> Gables, <br />
              FL 33134 USA
            </AddressStyled>
          </Stack>
        </Grid>
        <Grid item xs={12} md={2}>
          <StackStyled>
            <TextStyled>Links</TextStyled>
            <StackStyled>
              {links.map((item) => (
                <IStyled key={item}>
                  <Link to={lowerCase(item)}>{item}</Link>
                </IStyled>
              ))}
            </StackStyled>
          </StackStyled>
        </Grid>
        <Grid item xs={12} md={2}>
          <StackStyled>
            <TextStyled>Help</TextStyled>
            <StackStyled>
              {helps.map((item) => (
                <IStyled key={item}>
                  <Link to={lowerCase(item)}>{item}</Link>
                </IStyled>
              ))}
            </StackStyled>
          </StackStyled>
        </Grid>
        <Grid item xs={12} md={4}>
          <StackStyled sx={{ gap: '25px' }}>
            <TextStyled>Newsletter</TextStyled>
            <Stack flexDirection={'row'} gap={'5px'}>
              <Input placeholder="Enter Your Email Address" sx={{ flex: 1, minWidth: 0 }} />
              <Button
                sx={{
                  borderBottom: '1px solid rgba(0, 0, 0, 1)',
                  color: 'rgba(0, 0, 0, 1)',
                  fontSize: '14px',
                  fontWeight: 500,
                  width: 'fit-content',
                  padding: 0,
                  borderRadius: 0
                }}>
                SUBSCRIBE
              </Button>
            </Stack>
          </StackStyled>
        </Grid>
      </Grid>
      <Box
        display={'flex'}
        borderTop={'1px solid rgba(217, 217, 217, 1)'}
        marginTop={'40px'}
        paddingTop={'35px'}>
        <Typography>2023 furino. All rights reverved</Typography>
      </Box>
    </Stack>
  );
};

const LogoStyled = styled(Typography)(() => ({
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '100%',
  letterSpacing: '0%',
  color: 'rgba(0, 0, 0, 1)'
}));

const AddressStyled = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: '0px',
  color: 'rgba(159, 159, 159, 1)',
  width: '85%'
}));

const TextStyled = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '100%',
  letterSpacing: '0%',
  color: 'rgba(159, 159, 159, 1)'
}));

const StackStyled = styled(Stack)(({ theme }) => ({
  gap: '30px',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px 24px'
  }
}));

const IStyled = styled('i')(() => ({
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '100%',
  letterSpacing: '0px',
  fontStyle: 'normal',
  whiteSpace: 'nowrap'
}));
const TitleStyled = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '100%',
  letterSpacing: '0px',
  color: 'rgba(159, 159, 159, 1)'
}));
