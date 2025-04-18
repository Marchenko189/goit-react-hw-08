import LoginForm from "../../components/LoginForm/LoginForm";
import css from './LoginPage.module.css'

export default function LoginPage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Login page</h1>
      <LoginForm />
    </div>
  );
}
