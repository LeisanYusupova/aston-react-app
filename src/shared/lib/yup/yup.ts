import * as yup from 'yup';

const requiredErrorMessage = 'Поле обязательно для заполнения';

export const FormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Некорректный формат электронной почты')
    .required(requiredErrorMessage),
  password: yup
    .string()
    .min(6, 'Пароль должен содержать минимум 6 символов')
    .max(24)
    .required(),
});
