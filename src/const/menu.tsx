import { ReactNode } from 'react';
import { DashboardIcon, ProceduresIcon, ProductIcon, SettingIcon, UserIcon } from 'assets/index';

export type MenuItem = {
  label?: string;
  link: string;
  icon?: ReactNode;
  activeUrls?: string[];
};

export const ROUTE_MENU: MenuItem[] = [
  {
    label: 'Home',
    link: '/',
    activeUrls: ['/']
  },
  {
    label: 'Shop',
    link: '/shop',
    activeUrls: ['/shop']
  },
  {
    label: 'About',
    link: '/about',
    activeUrls: ['/about']
  },
  {
    label: 'Contact',
    link: '/contact',
    activeUrls: ['/contact']
  },
  {
    label: 'Blog',
    link: '/blog',
    activeUrls: ['/blog']
  }
];
