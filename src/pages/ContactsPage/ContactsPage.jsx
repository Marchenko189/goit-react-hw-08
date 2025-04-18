import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader"
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import css from './ContactsPage.module.css';


export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
       <h1 className={css.title}>Your Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
      <div>{isLoading && <Loader/>}</div>
      <ContactList />
    </div>
  );
}
