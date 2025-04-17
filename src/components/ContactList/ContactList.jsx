import Contact from "../Contact/Contact";
import { useSelector } from 'react-redux';
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
    const contacts = useSelector(selectFilteredContacts);
    
    return (
        <ul className={css.list}>
            {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} />
            ))}
        </ul>
    );
}