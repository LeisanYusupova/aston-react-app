import { useNavigate } from 'react-router-dom';
import { Input } from 'src/shared/ui/input/Input.tsx';
import { useForm } from 'react-hook-form';
import { FormSchema } from 'src/shared/lib/yup/yup.ts';
import { yupResolver } from '@hookform/resolvers/yup';
import s from './AuthForm.module.css';

export const AuthForm = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(FormSchema),
  });
  const navigate = useNavigate();
  const { errors } = formState;

  const handleLogin = () => {
    localStorage.setItem('action', 'auth');
    navigate('/');
  };
  return (
    <div className={s.wrapper}>
      <h2 className={s.input_title}>Авторизация</h2>
      <form className={s.form_wrapper} onSubmit={handleSubmit(handleLogin)}>
        <Input
          label={'Логин'}
          {...register('email')}
          error={errors?.email?.message}
        ></Input>
        <Input
          label={'Password'}
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
