import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';
import s from './App.module.css';
import AddContactForm from './Components/AddContactForm/AddContactForm';
import ContactsList from './Components/ContactsList/ContactsList';
import Filter from './Components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      {
        contactName: 'Alice Cooper',
        id: '1234',
        number: '097-131-65-46',
      },
      {
        contactName: 'Jared Leto',
        id: '2345',
        number: '067-131-65-46',
      },
      {
        contactName: 'Bred Pit',
        id: '3456',
        number: '050-131-65-46',
      },
      {
        contactName: 'Kianu Rivz',
        id: '5678',
        number: '050-131-65-46',
      },
    ],
    filter: '',
  };

  onAddContact = options => {
    const { contactName, number } = options;

    this.setState(prevState => {
      return {
        contacts: [
          { contactName, id: uuidv4(), number },
          ...prevState.contacts,
        ],
      };
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.contactName.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  onFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  onDelete = e => {
    const notDeletedContacts = this.state.contacts.filter(contact => {
      return !(contact.id === e.currentTarget.id);
    });

    this.setState({
      contacts: notDeletedContacts,
    });
  };

  render() {
    return (
      <div className={s.container}>
        <h1>Phonebook</h1>
        <AddContactForm
          allContacts={this.state.contacts}
          onSubmit={this.onAddContact}
        />

        <h2>Contacts</h2>
        <Filter text={this.state.filter} onChange={this.onFilter} />
        <ContactsList
          contactsArr={this.getFilteredContacts()}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default App;
