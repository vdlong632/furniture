import { Stack, styled, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from 'assets/pageheader.jpg';
import { FurnitureLogo } from 'assets';

export type PageHeaderProps = {
  title: string;
  route: { label: string; path: string }[];
};
export const PageHeader = ({ title, route }: PageHeaderProps) => {
  const navigate = useNavigate();
  return (
    <HeaderSwap>
      <OverlayStyled>
        <FurnitureLogo />
        <TitleStyled>{title}</TitleStyled>
        <Stack sx={{ flexDirection: 'row' }} gap={'5px'} alignItems={'center'}>
          <Typography
            sx={{ fontSize: '16px', fontWeight: 500, cursor: 'pointer' }}
            onClick={() => {
              navigate('/');
            }}>
            {'Home'}
          </Typography>
          <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>{'>'}</Typography>
          {route.map((item, index) => (
            <Typography sx={{ fontSize: '16px', fontWeight: 300 }} key={index}>
              <Link to={item.path}>{item.label}</Link>
            </Typography>
          ))}
        </Stack>
      </OverlayStyled>
    </HeaderSwap>
  );
};

const HeaderSwap = styled(Stack)(() => ({
  width: '100%',
  height: '40vh',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative'
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center',
  // textAlign: 'center',
  // gap: '15px'
}));

const TitleStyled = styled(Typography)(() => ({
  //   fontSize: '48px',
  fontSize: 'clamp(20px, 4vw, 48px)',
  fontWeight: 500,
  lineHeight: '100%',
  letterSpacing: '0%'
}));

const OverlayStyled = styled(Stack)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(255, 255, 255, 0.5)',
  backdropFilter: 'blur(3px)',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: '15px'
}));
