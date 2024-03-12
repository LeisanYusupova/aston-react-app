import { Input } from 'src/shared/ui/input/Input.tsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormSchema } from 'src/shared/lib/yup/yup.ts';
import s from './Form.module.css';

type Props = {
  title: string;
  handleClick: (email: string, password: string) => void;
};

export const Form = ({ title, handleClick }: Props) => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(FormSchema),
  });
  const { errors } = formState;

  return (
    <div className={s.wrapper}>
      <h2 className={s.input_title}>{title}</h2>
      <form
        className={s.form_wrapper}
        onSubmit={handleSubmit((data) =>
          handleClick(data.email, data.password),
        )}
      >
        <Input
          label={'Логин'}
          {...register('email')}
          error={errors?.email?.message}
        ></Input>
        <Input
          label={'Пароль'}
          {...register('password')}
          error={errors?.password?.message}
        />
        <button className={s.form_button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
