import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';
import AddContactForm from './Components/AddContactForm/AddContactForm';
import ContactsList from './Components/ContactsList/ContactsList';
import Filter from './Components/Filter/Filter';

import './App.css';

class App extends Component {
  state = {
    contacts: [
      {
        contactName: 'Alice Cooper',
        id: '134j3h4234g3v4324v3j43jh',
        number: '097-131-65-46',
      },
      {
        contactName: 'Roman Ustinov',
        id: '345g435jg2g54jh23g4hj',
        number: '067-523-24-76',
      },
      {
        contactName: 'Artem Korus',
        id: '23j4hv3j4gvjh4k32h4',
        number: '097-643-23-76',
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

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <AddContactForm
          allContacts={this.state.contacts}
          onSubmit={this.onAddContact}
        />

        <h2>Contacts</h2>
        <Filter text={this.state.filter} onChange={this.onFilter} />
        <ContactsList contactsArr={this.getFilteredContacts()} />
      </div>
    );
  }
}

export default App;
