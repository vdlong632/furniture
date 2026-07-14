import { useForm } from 'react-hook-form';
import { FormContactSchema, TypeContactForm } from './formType';
import { useAsyncCallback } from 'hooks/useAsyncCallback';
import { zodResolver } from '@hookform/resolvers/zod';

export const useContactForm = () => {
  const methods = useForm<TypeContactForm>({
    resolver: zodResolver(FormContactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      messager: ''
    },
    mode: 'onSubmit'
  });
  // console.log(methods.formState.errors)

  const onSubmit = async (data: TypeContactForm) => {
    console.log('Submited', data);
    const payload = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      messager: data.messager
    };
  };
  const { asyncCallback: handleSubmitAsync } = useAsyncCallback(onSubmit, []);
  return {
    methods,
    handleSubmit: methods.handleSubmit(handleSubmitAsync)
  };
};
