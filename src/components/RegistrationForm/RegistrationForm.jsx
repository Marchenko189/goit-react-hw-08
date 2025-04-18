import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';
import * as yup from 'yup';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  const UserShema = yup.object().shape({
    name: yup.string().min(3, 'Must be min 3 chars').max(50, 'Must be max 50 chars').required('This field is reguired'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(8, 'Password must contain at least 8 characters').matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one digit').required('Password is required')
  })

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={UserShema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field className={css.field} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span"></ErrorMessage>
        </label>
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
        <button className={css.btn} type="submit">Register</button>
      </Form>
    </Formik>
  );
}

