import css from "./Contact.module.css"
import { useDispatch } from 'react-redux';
import { deleteContact } from "../../redux/contactsOps";
import { BiSolidUser, BiSolidPhone } from "react-icons/bi";

export default function Contact({ contact }) {
    const dispatch = useDispatch();
    
     const handleDelete = () => {
        dispatch(deleteContact(contact.id));
    }

    
    return (
        <li className={css.item}>
            <div className={css.container_one}>
            <div className={css.container}>
                <BiSolidUser className={css.icon} />
                <p className={css.text}>{contact.name}</p>
            </div>
            <div className={css.container}>
                <BiSolidPhone className={css.icon}/>
                <p className={css.text}>{contact.number}</p>
            </div>
            </div>
            <button className={css.button} type="button" onClick={handleDelete}>Delete</button>
        </li> 
    )
}