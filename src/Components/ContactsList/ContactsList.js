import s from './ContactsList.module.css';
import Contact from '../Contact/Contact';

function ContactsList({ contactsArr, onDelete }) {
  return (
    <ol className={s.list}>
      {contactsArr.map(contact => {
        return (
          <Contact key={contact.id} contact={contact} onDelete={onDelete} />
        );
      })}
    </ol>
  );
}

export default ContactsList;
