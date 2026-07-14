import { Stack, Typography, styled } from '@mui/material';
import { ROUTE_MENU } from 'const/menu';
import { NavLink } from 'react-router-dom';

export const NavbarMenu = () => {
  return (
    <MenuList sx={{ display: { sm: 'none', md: 'flex' } }} direction="row" alignItems="center">
      {ROUTE_MENU.map((item, index) => {
        return (
          <NavLink key={index} to={item.link} style={{ textDecoration: 'none' }}>
            <MenuItem>
              <Typography className="label" sx={{ fontSize: '16px', fontWeight: 500 }}>
                {item.label}
              </Typography>
            </MenuItem>
          </NavLink>
        );
      })}
    </MenuList>
  );
};

const MenuList = styled(Stack)(({ theme }) => ({
  gap: 'clamp(20px, 4vw, 50px)',
  justifyContent: 'center',
  width: 'fit-content',
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

const MenuItem = styled(Stack)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontWeight: 500,
  transition: 'color .2s'
}));
