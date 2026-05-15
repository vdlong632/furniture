import { Theme } from '@mui/material';

export type OwnerState = {
  ownerState?: Record<string, string | number | boolean | undefined>;
};

export type StyledParams = OwnerState & {
  theme: Theme;
};

export type ParamsBaseGet = {
  page: number;
  limit: number;
  order?: string;
  orderBy?: string;
  keyword?: string;
};

export type FileStorage = {
  deletedAt: string;
  id: number;
  storage: Storage;
  storageId: number;
  updatedAt: string;
  url: string;
};

export type Storage = {
  fileName: string;
  fileType: string;
  id: number;
  key: string;
  type: string;
  updatedAt: string;
  url: string;
};

export type Align = 'inherit' | 'left' | 'center' | 'right' | 'justify';

export type HeaderTable = {
  id: string;
  sort?: boolean;
  label: string;
  width?: number;
  minWidth?: number;
  align?: Align;
};
