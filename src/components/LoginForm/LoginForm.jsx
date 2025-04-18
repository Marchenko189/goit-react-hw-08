import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { login } from '../../redux/auth/operations';
import css from './LoginForm.module.css';
import * as yup from 'yup';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  const UserShema = yup.object().shape({
      email: yup.string().email('Invalid email format').required('Email is required'),
      password: yup.string().min(8, 'Password must contain at least 8 characters').matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[0-9]/, 'Password must contain at least one digit').required('Password is required')
    })

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={UserShema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field className={css.field} type="email" name="email" />
          <ErrorMessage className={css.error} name="email" component="span"></ErrorMessage>
        </label>
        <label className={css.label}>
          Password
          <Field className={css.field} type="password" name="password" />
          <ErrorMessage className={css.error} name="password" component="span"></ErrorMessage>
        </label>
        <button className={css.btn} type="submit">Login</button>
      </Form>
    </Formik>
  );
}
