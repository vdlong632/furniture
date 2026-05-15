import { ReactNode } from 'react';

export type PagingInfo = {
  currentPage: number;
  totalItemPage: number;
  totalItemNextPage: number;
  pageCount: number;
  totalItems: number;
};

export type OptionsType = {
  rowsPerPage?: number;
  total?: number;
  currentPage?: number;
};

export type PagingResult = {
  pagingInfo: PagingInfo;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  total: number;
  setTotal: (total: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (rowsPerPage: number) => void;
};

export type Header = {
  label: string;
  width?: string;
  option?: ReactNode;
};
