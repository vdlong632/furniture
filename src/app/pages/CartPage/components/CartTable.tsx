import {
  Box,
  Button,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { DeleteBin } from 'assets';
import { Align } from 'services/clinic-procedures';
import { Product } from 'services/product';

const COLUMNS = [
  { id: 'img', label: '', minWidth: '105px' },
  { id: 'product', label: 'Product', minWidth: '150px' },
  { id: 'price', label: 'Price', minWidth: '150px' },
  { id: 'quantity', label: 'Quantity', minWidth: '70px' },
  { id: 'subtotal', label: 'Subtotal', minWidth: '150px' },
  { id: 'delete', label: '', minWidth: '50px', align: 'left' }
];

export const CartTable = () => {
  return (
    <Stack flex={1}>
      <Stack>
        <Table stickyHeader sx={{ minWidth: '500p' }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'rgba(249, 241, 231, 1)', border: 'none !important' }}>
              {COLUMNS.map((column) => (
                <TableCellHeaderStyled
                  key={column.id}
                  align={(column.align as Align) || 'center'}
                  sx={{
                    minWidth: column.minWidth,
                    fontSize: '14px'
                  }}>
                  <Stack
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    gap={0.5}>
                    <Typography fontWeight={600}>{column.label}</Typography>
                  </Stack>
                </TableCellHeaderStyled>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRowStyled>
              <TableCellStyled sx={{ paddingLeft: '0px !important' }}>
                <ImgStyled src="item" />
              </TableCellStyled>
              <TableCellStyled>
                <Typography
                  sx={{ fontSize: '16px', fontWeight: 400, color: 'rgba(159, 159, 159, 1)' }}>
                  Asgaard sofa
                </Typography>
              </TableCellStyled>
              <TableCellStyled>
                <Typography
                  sx={{ fontSize: '16px', fontWeight: 400, color: 'rgba(159, 159, 159, 1)' }}>
                  Rs. 250,000.00
                </Typography>
              </TableCellStyled>
              <TableCellStyled sx={{ alignItems: 'center' }}>
                <Stack
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '32px',
                    height: '32px',
                    borderRadius: '5px',
                    border: '1px solid rgba(159, 159, 159, 1)',
                    margin: '0 auto'
                  }}>
                  <Typography>100</Typography>
                </Stack>
              </TableCellStyled>
              <TableCellStyled>
                <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>Rs. 250,000.00</Typography>
              </TableCellStyled>
              <TableCellStyled>
                <Button sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
                  <DeleteBin />
                </Button>
              </TableCellStyled>
            </TableRowStyled>
          </TableBody>
        </Table>
      </Stack>
    </Stack>
  );
};

const TableCellHeaderStyled = styled(TableCell)(() => ({
  padding: '16px',
  whiteSpace: 'nowrap',
  backgroundColor: 'transparent',
  fontSize: '14px',
  fontWeight: 600
}));

const TableRowStyled = styled(TableRow)(() => ({}));
const TableCellStyled = styled(TableCell)(() => ({
  color: '#161616',
  fontSize: '12px',
  fontWeight: 500,
  borderBottom: '1px solid #CECECE'
}));

const ImgStyled = styled('img')(() => ({
  width: '105px',
  height: '105px',
  borderRadius: '10px',
  border: 'none',
  objectFit: 'cover'
}));
