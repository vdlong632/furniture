import { Box, Button, Input, Stack, styled, Typography } from '@mui/material';
import { ReactNode, useState } from 'react';
import { Logo } from './components/Logo';
import { NavbarMenu } from './components/NavbarMenu';
import { NavbarAction } from './components/NavbarAction';
import { MenuButton } from 'assets';
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
          <Stack display={{ sm: 'flex', md: 'none' }}>
            <MenuButton
              height={'29px'}
              width={'24px'}
              color={'inherit'}
              onClick={() => setOpen(!open)}
            />
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

const WrapperNavbar = styled(Stack)(() => ({
  width: '100%',
  height: '100px',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  position: 'relative',
}));

const NavbarContent = styled(Stack)(() => ({
  margin: '29px 80px 29px 54px',
  height: '41px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

const MenuToggle = styled(Stack)(() => ({
  display: 'none',
  position: 'sticky',
  top: '100px',
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
