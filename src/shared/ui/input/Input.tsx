import { InputHTMLAttributes, forwardRef, useId } from 'react';
import s from './Input.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  function ForwardedInput({ error, label, ...rest }, ref) {
    const labelId = useId();

    return (
      <div className={s.input_wrapper}>
        <span>
          <label htmlFor={labelId}>{label}</label>
        </span>
        <input
          ref={ref}
          {...rest}
          className={s.input}
          type={label === 'Пароль' ? 'password' : 'text'}
          id={labelId}
        />
        {error && <span className={s.errorMessage}>{error}</span>}
      </div>
    );
  },
);
