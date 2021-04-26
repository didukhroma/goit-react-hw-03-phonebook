import { Component } from 'react';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import searchName from '../../utils/searchName';
import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // contacts: [],
    filter: '',
  };

  addNewContact = data => {
    const { name } = data;
    const { contacts } = this.state;
    const isFind = searchName(contacts, name);

    if (isFind) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  deleteContactById = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  filterHandler = event => {
    const {
      target: { value },
    } = event;
    this.setState(() => ({
      filter: value,
    }));
  };

  getCurrentContacts = () => {
    const { filter, contacts } = this.state;
    const regExp = new RegExp(filter, 'gi');

    if (filter) {
      return contacts.filter(contact => regExp.test(contact.name));
    }

    return contacts;
  };

  render() {
    const currentContacts = this.getCurrentContacts();
    return (
      <div className={styles.app}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.filterHandler} />
        <ContactList
          contacts={currentContacts}
          onClick={this.deleteContactById}
        />
      </div>
    );
  }
}

export default App;
