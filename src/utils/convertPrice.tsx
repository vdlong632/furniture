import { Stack, Typography } from '@mui/material';

export const calculateDiscountPercentage = ({
  price,
  discord = 0
}: {
  price: number;
  discord?: number;
}) => {
  const discountNum = (price * discord) / 100;
  return (
    <Stack direction={'column'}>
      <Typography sx={{ fontSize: '12px', fontWeight: '600' }}>
        {`$${price - discountNum} `}
      </Typography>
      {!!discord && (
        <Typography sx={{ fontSize: '10px', fontWeight: '500', color: '#7B96AD' }}>
          {price != null ? `$${Number(price)}` : '-'}
        </Typography>
      )}
    </Stack>
  );
};
export const convertMargin = ({
  cost,
  price,
  discord = 0
}: {
  cost: number;
  price: number;
  discord?: number;
}) => {
  const discountNum = (price * discord) / 100;
  return (
    <Stack direction={'column'}>
      <Typography sx={{ fontSize: '12px', fontWeight: '600' }}>
        {`$${price - discountNum - cost} `}
      </Typography>
    </Stack>
  );
};
