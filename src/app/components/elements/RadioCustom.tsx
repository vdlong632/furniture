import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography
} from '@mui/material';
import { useState } from 'react';

interface CustomRadioGroupProps {
  name?: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string; detail: string }[];
}

export const CustomRadioGroup = ({
  name,
  label,
  value,
  onChange,
  options
}: CustomRadioGroupProps) => {
  const [selected, setSelected] = useState('');
  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <RadioGroup
        style={{ justifyContent: 'space-between' }}
        // row
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <>
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={
                <Radio
                  checked={selected === option.value}
                  onChange={(e) => setSelected(e.target.value)}
                  sx={{
                    color: 'primary.main',
                    '&.Mui-checked': { color: 'primary.main' }
                  }}
                />
              }
              label={option.label}
            />
            {selected === option.value && (
              <Typography
                width={'100%'}
                letterSpacing={'0%'}
                lineHeight={1.8}
                color={'rgba(159, 159, 159, 1)'}>
                {option.detail}
              </Typography>
            )}
          </>
        ))}
      </RadioGroup>
    </FormControl>
  );
};
