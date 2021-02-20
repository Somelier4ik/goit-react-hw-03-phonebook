import s from './Contact.module.css';

function Contact({ contact, onDelete }) {
  return (
    <li className={s.listItem}>
      {`${contact.contactName}: ${contact.number}`}
      <button
        className={s.btn}
        id={contact.id}
        type="button"
        onClick={onDelete}
      >
        Delete
      </button>
    </li>
  );
}
export default Contact;
