import { Input } from 'src/shared/ui/input/Input.tsx';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormSchema } from 'src/shared/lib/yup/yup.ts';
import s from './Form.module.css';

type Props = {
  title: string;
  handleClick: (email: string, password: string) => void;
  errorMessage?: string;
};

export const Form = ({ title, handleClick, errorMessage }: Props) => {
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
          {title === 'Авторизация' ? 'Войти' : 'Зарегистирироваться'}
        </button>
        <span className={s.error_message}>{errorMessage}</span>
        <div className={s.links}>
          {title === 'Авторизация' ? (
            <div>
              <div>Ещё нет аккаунта?</div>
              <Link to="/signup">Зарегистрируйтесь</Link>
            </div>
          ) : (
            <div>
              <div>Уже есть аккаунт</div>
              <Link to="/signin">Войти</Link>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
