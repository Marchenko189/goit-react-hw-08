import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from "./ContactForm.module.css";
import * as yup from 'yup';

const UserSchema = yup.object().shape({
        name: yup.string().min(3, 'Must be min 3 chars').max(50, 'Must be max 50 chars').required('This field is reguired'),
        number: yup.string().min(3, 'Must be min 3 chars').max(50, 'Must be max 50 chars').required('This field is reguired'),
})

export default function ContactForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(addContact(values))
        actions.resetForm();
    };


    return (
    
        <Formik
            initialValues={{
                name: '',
                number: ''
            }}
            validationSchema={UserSchema}
            onSubmit={handleSubmit}
        >
            <Form className={css.form}>
            <div className={css.container}>
            <label className={css.label} htmlFor="username">Name</label>
            <Field className={css.input} id="username" name="name" type="text"></Field>
            <ErrorMessage className={css.error} name="name" component="span"></ErrorMessage>
            </div>
            
            <div className={css.container}>
            <label className={css.label} htmlFor="number">Number</label>
            <Field className={css.input} id="number" name="number" type="text"></Field> 
            <ErrorMessage className={css.error} name="number" component="span"></ErrorMessage>  
            </div>
            
                <button className={css.button}type="submit">Add contact</button> 
               
        </Form>
        </Formik>
    
    )
}