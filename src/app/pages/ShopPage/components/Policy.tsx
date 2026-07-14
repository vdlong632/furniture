import { Grid, Stack, styled, Typography } from '@mui/material';
import { Protect, Quality, Ship, Support } from 'assets';

export const Policy = () => {
  return (
    <Stack
      flex={1}
      height={'70px'}
      bgcolor={'rgba(250, 243, 234, 1)'}
      p={'60px 40px'}
      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}>
      {/* <StackStyled>
        <Quality width={'50px'} height={'50px'} />
        <Stack>
          <TitleStyled>High Quality</TitleStyled>
          <DesStyled>crafted from top materials</DesStyled>
        </Stack>
      </StackStyled>
      <StackStyled>
        <Protect width={'50px'} height={'50px'} />
        <Stack>
          <TitleStyled>Warranty Protection</TitleStyled>
          <DesStyled>Over 2 years</DesStyled>
        </Stack>
      </StackStyled>
      <StackStyled>
        <Ship width={'50px'} height={'50px'} />
        <Stack>
          <TitleStyled>Free Shipping</TitleStyled>
          <DesStyled>Order over 150 $</DesStyled>
        </Stack>
      </StackStyled>
      <StackStyled>
        <Support width={'50px'} height={'50px'} />
        <Stack>
          <TitleStyled>24 / 7 Support</TitleStyled>
          <DesStyled>Dedicated support</DesStyled>
        </Stack>
      </StackStyled> */}
      <Grid container spacing={{md: '5px', sm: '20px', xs: '15px'}}>
        <Grid item xs={6} sm={6} md={3.3}>
          <StackStyled>
            <Quality width={'50px'} height={'50px'} />
            <Stack>
              <TitleStyled>High Quality</TitleStyled>
              <DesStyled>crafted from top materials</DesStyled>
            </Stack>
          </StackStyled>
        </Grid>
        <Grid item xs={6} sm={6} md={3.3}>
          <StackStyled>
            <Protect width={'50px'} height={'50px'} />
            <Stack>
              <TitleStyled>Warranty Protection</TitleStyled>
              <DesStyled>Over 2 years</DesStyled>
            </Stack>
          </StackStyled>
        </Grid>
        <Grid item xs={6} sm={6} md={2.7}>
          <StackStyled>
            <Ship width={'50px'} height={'50px'} />
            <Stack>
              <TitleStyled>Free Shipping</TitleStyled>
              <DesStyled>Order over 150 $</DesStyled>
            </Stack>
          </StackStyled>
        </Grid>
        <Grid item xs={6} sm={6} md={2.7}>
          <StackStyled>
            <Support width={'50px'} height={'50px'} />
            <Stack>
              <TitleStyled>24 / 7 Support</TitleStyled>
              <DesStyled>Dedicated support</DesStyled>
            </Stack>
          </StackStyled>
        </Grid>
      </Grid>
    </Stack>
  );
};

const StackStyled = styled(Stack)(() => ({
  flexDirection: 'row',
  gap: '15px',
  alignItems: 'center'
}));

const TitleStyled = styled(Typography)(() => ({
  fontSize: 'clamp(18px, 2vw, 22px)',
  fontWeight: 600,
  color: 'rgba(36, 36, 36, 1)',
  lineHeight: '150%',
  letterSpacing: '0%'
}));

const DesStyled = styled(Typography)(() => ({
  fontSize: 'clamp(15px 2vw, 18px)',
  fontWeight: 500,
  color: 'rgba(137, 137, 137, 1)',
  lineHeight: '150%',
  letterSpacing: '0%'
}));
