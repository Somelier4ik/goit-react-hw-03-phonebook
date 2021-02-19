// import Contact from '../Contact/Contact';

function ContactsList({ contactsArr }) {
  return (
    <ol>
      {contactsArr.map(contact => {
        // return <Contact key={contact.id} contactName={contact.contactName} />;
        return (
          <li key={contact.id}>{`${contact.contactName} ${contact.number}`}</li>
        );
      })}
    </ol>
  );
}

export default ContactsList;
