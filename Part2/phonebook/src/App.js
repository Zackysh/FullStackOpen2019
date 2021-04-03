import React, { useState, useEffect } from 'react'
import axios from 'axios'

import contactServices from './services/contact'

import Contacts from './components/Contacts'
import ContactForm from './components/ContactForm'
import Filter from './components/Filter'

const App = () => {

  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  useEffect(() => {
    contactServices
      .getAll()
      .then(response => {
        setContacts(response)
      })
  }, [])

  const addContact = (event) => {
    event.preventDefault();
    const nameMatch = contacts.find(person => person.name === newName);
    const numberMatch = contacts.find(person => person.number === newPhone);

    if (!newName || !newPhone) {
      alert('You must fill all fields.')
    } else if (newPhone.length < 12)
      alert('Invalid phone number.')
    else if (nameMatch) { /* if name is already taken */
      if (numberMatch) /* if number is already taken */
        if (numberMatch === nameMatch)
          alert('You have specified an existing contact')
        else {
          alert(`Given name already exist and given number belongs to ${numberMatch.name}`)
        }
      else {
        const answer = window.confirm(`${newName} already exist, replace the old number with a new one?.`);
        if (answer) { /* if user want to change phone number */
          const contactToEdit = contacts.find(contact => contact.name === newName);
          const editedContact = { ...contactToEdit, number: newPhone };

          contactServices
            .update(contactToEdit.id, editedContact);

          setContacts(contacts.map(contact => contact !== contactToEdit ? contact : editedContact))
          setNewName('')
          setNewPhone('')
        }
      }

    } else { /* all Ok */
      let create = true;

      if (numberMatch) {
        create = window.confirm(`Given number belongs to ${numberMatch.name}, do you still want to create this contact?`)
      }

      if (create) {
        const newContact = {
          name: newName,
          number: newPhone
        }

        contactServices
          .create(newContact)
          .then(response => {
            setContacts(contacts.concat(response))
            setNewName('')
            setNewPhone('')
          })
      }
    }
  }

  const deleteContact = (id) => {
    const contact = contacts.find(contact => contact.id === id)
    if (window.confirm(`Do you want to remove ${contact.name} contact?`)) {
      contactServices.deleteO(id).then(() => setContacts(contacts.filter(contact => contact.id !== id)))
    } else
      alert('Operation cancelled')
  }

  /* ------------------ onChange Handlers ------------------- */
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handlePhoneChange = (event) => {
    if (event.target.value.length <= 12) { /* 10 cifras y dos guiones */
      var cleaned = ("" + event.target.value).replace(/\D/g, "");

      let normValue = `${cleaned.substring(0, 3)}${cleaned.length > 3 ? "-" : ""
        }${cleaned.substring(3, 6)}${cleaned.length > 6 ? "-" : ""
        }${cleaned.substring(6, 11)}`;

      setNewPhone(normValue);
    }
  }
  /* ------------------ onChange Handlers ------------------- */

  /**
   * This method return an array after aplying a filter to it.
   */
  const showContacts = () => {
    return contacts.filter(person =>
      person.name.toLowerCase().includes(filter.toLowerCase()))
  }

  return (
    <>
      <h2>Phonebook</h2>
      <h3>Filter</h3>
      <Filter value={filter} onChange={handleFilterChange} />

      <h3>Add new</h3>
      <ContactForm
        onSubmit={addContact}
        name={{ value: newName, onChange: handleNameChange }}
        phone={{ value: newPhone, onChange: handlePhoneChange }}
      />

      <h2>Contacts</h2>
      <Contacts contacts={showContacts()} onDelete={deleteContact} />
    </>
  )
}

export default App