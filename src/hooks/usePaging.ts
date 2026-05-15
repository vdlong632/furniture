import { useState, useMemo } from 'react';
import { OptionsType, PagingResult } from 'types/paging';

const CURRENT_PAGE_DEFAULT = 1;
/**
 * @returns function that handle paging table
 */
export function usePaging(options?: OptionsType): PagingResult {
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(options?.total || 0);
  const [rowsPerPage, setRowsPerPage] = useState(options?.rowsPerPage || 10);

  const pagingInfo = useMemo(() => {
    const totalItemPage = (currentPage - CURRENT_PAGE_DEFAULT) * rowsPerPage + CURRENT_PAGE_DEFAULT;
    const totalItemNextPage = rowsPerPage * currentPage < total ? rowsPerPage * currentPage : total;
    const pageCount = total > rowsPerPage ? Math.ceil(total / rowsPerPage) : 0;
    return {
      currentPage,
      totalItemPage,
      totalItemNextPage,
      pageCount,
      totalItems: total
    };
  }, [currentPage, rowsPerPage, total]);

  return {
    pagingInfo,
    currentPage,
    setCurrentPage,
    total,
    setTotal,
    rowsPerPage,
    setRowsPerPage
  };
}
