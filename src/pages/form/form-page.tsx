import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../components/Input';

interface FormData {
  firstName: string;
  lastName: string;
  age: number;
}

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required!'),
  lastName: yup.string().required('Last Name is required!'),
  age: yup.number().required('Age is required!'),
});

const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data: FormData) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <Input {...register('firstName')} />
      {errors.firstName?.message && <p>{errors.firstName?.message}</p>}
      <Input {...register('lastName')} />
      {errors.lastName?.message && <p>{errors.lastName?.message}</p>}
      <Input {...register('age')} />
      {errors.age?.message && <p>{errors.age?.message}</p>}
      <Input type="submit" />
    </form>
  );
};

export default FormPage;
