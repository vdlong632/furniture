import { useForm } from 'react-hook-form';
import { TypeBillingForm, FormBillingSchema } from './formType';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAsyncCallback } from 'hooks/useAsyncCallback';

export const useBillingForm = () => {
  const methods = useForm<TypeBillingForm>({
    resolver: zodResolver(FormBillingSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      companyName: '',
      country: '',
      street: '',
      town: '',
      province: '',
      zipCode: undefined,
      phone: undefined,
      email: '',
      additional: '',
      orderOption: ''
    },
    mode: 'onSubmit'
  });
  // console.log(methods.formState)
  const onSubmit = async (data: TypeBillingForm) => {
    console.log('123', data);
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      companyName: data.companyName,
      country: data.country,
      street: data.street,
      town: data.town,
      provine: data.province,
      zipCode: data.zipCode,
      phone: data.phone,
      email: data.email,
      additional: data.additional,
      orderOption: data.orderOption
    };
  };

  const { asyncCallback: handleSubmitAsync } = useAsyncCallback(onSubmit, []);
  return {
    methods,
    handleSubmit: methods.handleSubmit(handleSubmitAsync)
  };
};
