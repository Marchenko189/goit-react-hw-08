import ContactList from "./components/ContactList/ContactList";
import Loader from './components/Loader/Loader';
import Error from "./components/Error/Error";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectLoading, selectError } from "./redux/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";


export default function App() {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
<div>
  <h1>Phonebook</h1>
        <ContactForm/>
            <SearchBox />
        {isLoading && <Loader/>}
        {isError && <Error/>}
        {contacts.length > 0 && <ContactList/>}
</div>
)
}

