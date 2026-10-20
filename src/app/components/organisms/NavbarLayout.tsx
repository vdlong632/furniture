import { Box, Button, Input, Stack, styled, Typography } from '@mui/material';
import { ReactNode, useState } from 'react';
import { Logo } from './components/Logo';
import { NavbarMenu } from './components/NavbarMenu';
import { NavbarAction } from './components/NavbarAction';
import { CloseIcon, MenuButton } from 'assets';
import { ROUTE_MENU } from 'const/menu';
import { Link, NavLink } from 'react-router-dom';
import { Footer } from './components/Footer';

type Props = {
  children: ReactNode;
};

export const NavbarLayout = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <WrapperNavbar>
        <NavbarContent>
          <Logo />
          <NavbarMenu />
          <NavbarAction />
          <Stack display={{ xs: 'flex', md: 'none' }}>
            {!open ? (
              <MenuButton
                height={'29px'}
                width={'24px'}
                color={'inherit'}
                onClick={() => setOpen(!open)}
              />
            ) : (
              <CloseIcon
                height={'29px'}
                width={'24px'}
                color={'inherit'}
                onClick={() => setOpen(!open)}
              />
            )}
          </Stack>
        </NavbarContent>
      </WrapperNavbar>
      <MenuToggle sx={{ display: open ? 'flex' : 'none' }}>
        {ROUTE_MENU.map((item, index) => (
          <NavLink key={index} to={item.link} style={{ textDecoration: 'none' }}>
            <MenuItem
              onClick={() => {
                setOpen(false);
              }}>
              {item.label}
            </MenuItem>
          </NavLink>
        ))}
      </MenuToggle>
      <MainContent>{children}</MainContent>
      <Footer />
    </Stack>
  );
};

const WrapperNavbar = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: '100px',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    height: '70px'
  }
}));

const NavbarContent = styled(Stack)(({ theme }) => ({
  margin: '29px 80px 29px 54px',
  height: '41px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
  [theme.breakpoints.down('md')]: {
    margin: '29px 32px'
  },
  [theme.breakpoints.down('sm')]: {
    margin: '15px 16px',
    gap: '12px'
  }
}));

const MenuToggle = styled(Stack)(({ theme }) => ({
  display: 'none',
  position: 'absolute',
  top: '100px',
  [theme.breakpoints.down('sm')]: {
    top: '70px'
  },
  left: 0,
  right: 0,
  backgroundColor: '#F7F3EA',
  borderBottom: '1px solid #E5DFC8',
  padding: '18px 24px',
  zIndex: 299,
  flexDirection: 'column',
  gap: '2px'
}));

const MenuItem = styled(Stack)(() => ({
  fontWeight: 700,
  padding: '15px 0px'
}));

const MainContent = styled(Box)(() => ({
  // minHeight: '100vh',
  backgroundColor: '#FDFCF8'
}));
