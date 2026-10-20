import {
  Box,
  Button,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  TableCellProps,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { DeleteBin } from 'assets';
import { useCart } from 'contexts/cart';

const COLUMNS = [
  { id: 'img', label: '', minWidth: '105px' },
  { id: 'product', label: 'Product', minWidth: '150px' },
  { id: 'price', label: 'Price', minWidth: '150px' },
  { id: 'quantity', label: 'Quantity', minWidth: '70px' },
  { id: 'subtotal', label: 'Subtotal', minWidth: '150px' },
  { id: 'delete', label: '', width: '50px', align: 'left' }
];

export const CartTable = () => {
  const { cartItem, removeFromCart } = useCart();
  return (
    <Stack flex={2} minWidth={0}>
      <Stack sx={{ overflowX: 'auto' }}>
        <Table stickyHeader sx={{ minWidth: '750px' }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'rgba(249, 241, 231, 1)', border: 'none !important' }}>
              {COLUMNS.map((column) => (
                <TableCellHeaderStyled
                  key={column.id}
                  align={(column.align as TableCellProps['align']) || 'center'}
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
            {cartItem.map((item) => (
              <TableRowStyled key={item.id}>
                <TableCellStyled sx={{ paddingLeft: '0px !important' }}>
                  <ImgStyled src={item.images[0]} />
                </TableCellStyled>
                <TableCellStyled>
                  <Typography
                    sx={{ fontSize: '16px', fontWeight: 400, color: 'rgba(159, 159, 159, 1)' }}>
                    {item.name}
                  </Typography>
                </TableCellStyled>
                <TableCellStyled>
                  <Typography
                    sx={{ fontSize: '16px', fontWeight: 400, color: 'rgba(159, 159, 159, 1)' }}>
                    Rs. {item.price.toLocaleString('de-DE')}
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
                    <Typography>{item.quantity}</Typography>
                  </Stack>
                </TableCellStyled>
                <TableCellStyled>
                  <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>
                    Rs. {(item.price * item.quantity).toLocaleString('de-DE')}
                  </Typography>
                </TableCellStyled>
                <TableCellStyled>
                  <Box
                    sx={{
                      cursor: 'pointer',
                      '&:hover': { backgroundColor: 'transparent', padding: 0 }
                    }}
                    onClick={() => {
                      removeFromCart(item);
                    }}>
                    <DeleteBin />
                  </Box>
                </TableCellStyled>
              </TableRowStyled>
            ))}
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
