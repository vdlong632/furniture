import { ReactNode } from 'react';
import { DashboardIcon, ProceduresIcon, ProductIcon, SettingIcon, UserIcon } from 'assets/index';

export type MenuItem = {
  label: string;
  link: string;
  icon: ReactNode;
  activeUrls?: string[];
};

export const ADMIN_MENU: MenuItem[] = [
  {
    label: 'Dashboard',
    link: '/admin/dashboard',
    icon: <DashboardIcon />,
    activeUrls: ['/admin/dashboard']
  },
  {
    label: 'Users',
    link: '/admin/users',
    icon: <UserIcon />,
    activeUrls: ['/admin/users']
  },
  {
    label: 'Clients',
    link: '/admin/clients',
    icon: <UserIcon />,
    activeUrls: ['/admin/clients']
  },
  {
    label: 'Products',
    link: '/admin/products',
    icon: <ProductIcon />,
    activeUrls: ['/admin/products']
  },
  {
    label: 'Procedures',
    link: '/admin/procedures',
    icon: <ProceduresIcon />,
    activeUrls: ['/admin/procedures']
  },
  {
    label: 'Settings',
    link: '/admin/settings',
    icon: <SettingIcon />,
    activeUrls: ['/admin/settings']
  }
];
