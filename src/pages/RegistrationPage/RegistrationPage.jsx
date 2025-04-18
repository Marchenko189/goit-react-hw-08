import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css"

export default function RegistrationPage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Registration page</h1>
      <RegistrationForm />
    </div>
  );
}
