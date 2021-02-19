import { Component } from 'react';

class AddContactForm extends Component {
  state = {
    contactName: '',
    number: '',
  };

  onChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  onSubmitForm = e => {
    e.preventDefault();
    const { contactName } = this.state;
    const { allContacts, onSubmit } = this.props;

    if (allContacts.some(contact => contact.contactName === contactName)) {
      alert(`${contactName} is already in contacts`);
    } else {
      onSubmit(this.state);
      this.setState({ contactName: '', number: '' });
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <label>
          Name
          <input
            name="contactName"
            onChange={this.onChange}
            value={this.state.contactName}
          ></input>
        </label>

        <label>
          Number
          <input
            name="number"
            onChange={this.onChange}
            value={this.state.number}
          ></input>
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default AddContactForm;
