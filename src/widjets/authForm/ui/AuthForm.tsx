import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import s from './AuthForm.module.css';

interface MyFormValues {
  login: string;
  password: string;
}

export const AuthForm: React.FC = () => {
  const initialValues: MyFormValues = { login: '', password: '' };
  return (
    <div className={s.wrapper}>
      <h3>Авторизация</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          console.log(values);
        }}
      >
        <Form className={s.form_wrapper}>
          <label htmlFor="firstName">Login</label>
          <Field id="login" name="login" placeholder="login" />
          <label htmlFor="password">Password</label>
          <Field id="password" name="password" placeholder="password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
