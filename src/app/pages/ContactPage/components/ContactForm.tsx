import { Button, Grid, Stack } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { TypeContactForm } from '../formType';
import { InputText } from 'app/components/elements/InputText';
import { InputArea } from 'app/components/elements/InputArea';

type Props = {
  handleSubmit: () => void;
};
export const ContactForm = ({ handleSubmit }: Props) => {
  const {
    setValue,
    control,
    register,
    formState: { errors }
  } = useFormContext<TypeContactForm>();
  return (
    <Stack flex={1}>
      <Grid container spacing={'20px'}>
        <Grid item xs={12}>
          <InputText
            title="Your name"
            placeholder="Abc"
            inputError={errors.name?.message}
            inputProps={{ ...register('name') }}
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            title="Email adress"
            placeholder="Abc@def.com"
            inputError={errors.email?.message}
            inputProps={{ ...register('email') }}
          />
        </Grid>{' '}
        <Grid item xs={12}>
          <InputText
            title="Subject"
            placeholder="This is an optional"
            inputError={errors.subject?.message}
            inputProps={{ ...register('subject') }}
          />
        </Grid>{' '}
        <Grid item xs={12}>
          <Controller
            control={control}
            name="messager"
            render={({ field, fieldState }) => (
              <InputArea
                title={'Message'}
                placeholder="Hi! i’d like to ask about"
                rows={2}
                {...field}
                inputError={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            sx={{
              bgcolor: 'rgba(184, 142, 47, 1)',
              p: '10px 40px',
              color: '#fff',
              '&:hover': { bgcolor: 'rgba(184, 142, 47, 1)' }
            }}
            onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
};
