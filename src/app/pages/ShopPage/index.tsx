import { MenuItem, Select, Stack, styled, Typography } from '@mui/material';
import { PageHeader } from 'app/components/elements/PageHeader';
import { FilterIcon, GridIcon, ViewList } from 'assets';
import { useState } from 'react';
import { Policy } from './components/Policy';
import { ProductSection } from '../HomePage/components/ProductSection';
import { useProductSection } from '../HomePage/hook';

export const ShopPage = () => {
  const [room, setRoom] = useState('default');
  const { products } = useProductSection();
  return (
    <Stack flex={1}>
      <PageHeader title={'Shop'} route={[{ label: 'Shop', path: '/shop' }]} />
      <FilterBar>
        <Stack flexDirection={'row'} alignItems={'center'} gap={'25px'}>
          <Stack flexDirection={'row'} alignItems={'center'} gap={'15px'}>
            <FilterIcon />
            <Typography
              sx={{ fontSize: '20px', fontWeight: 400, lineHeight: '100%', letterSpacing: '0%' }}>
              Filter
            </Typography>
          </Stack>
          <GridIcon />
          <ViewList />
          <DividerStyled />
          <Typography>Showing 1–16 of 32 results</Typography>
        </Stack>
        <Stack flexDirection={'row'} alignItems={'center'} gap={'20px'}>
          <Typography sx={{ fontSize: '20px', fontWeight: 400 }}>Show</Typography> <StyledInput />
          <Typography sx={{ fontSize: '20px', fontWeight: 400 }}>Short by</Typography>{' '}
          <Select
            sx={{
              width: '130px',
              fontSize: '20px',
              color: 'rgba(159, 159, 159, 1)',
              borderRadius: 0,
              border: `1px solid rgba(255, 255, 255, 1)`,
              '&:focus': {
                backgroundColor: '#F8F8F8',
                borderWidth: 1.5
              }
            }}
            value={room}
            onChange={(e) => setRoom(e.target.value)}>
            <MenuItem value="default">Default</MenuItem>
            <MenuItem value="living">Living</MenuItem>
            <MenuItem value="kitchen">Kitchen</MenuItem>
            <MenuItem value="bedroom">Bedroom</MenuItem>
            <MenuItem value="dining">Dining</MenuItem>
            <MenuItem value="outdoor">Outdoor</MenuItem>
          </Select>
        </Stack>
      </FilterBar>
      <ProductSection limit={16} showMore={false} filterRoom={room} products={products} />
      <Policy />
    </Stack>
  );
};

const FilterBar = styled(Stack)(() => ({
  width: '100%',
  height: '100px',
  backgroundColor: 'rgba(249, 241, 231, 1)',
  padding: '25px 75px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row'
}));

const DividerStyled = styled(Stack)(() => ({
  width: '2px',
  height: '36px',
  backgroundColor: 'rgba(159, 159, 159, 1)'
}));

const StyledInput = styled('input')(() => ({
  width: '40px',
  height: '40px',
  fontSize: '20px',
  color: 'rgba(159, 159, 159, 1)',
  textAlign: 'center',
  border: `1px solid rgba(255, 255, 255, 1)`,
  outline: 'none',
  transition: 'border-color 0.2s',
  '&:focus': {
    backgroundColor: '#F8F8F8',
    borderWidth: 1.5
  }
}));
