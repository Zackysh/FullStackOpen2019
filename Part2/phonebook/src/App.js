import React, { useState } from 'react'
import Contacts from './components/Contacts'
import ContactForm from './components/ContactForm'
import Filter from './components/Filter'

const App = () => {

  const [contacts, setContacts] = useState([
    { name: 'Arto Hellas', number: '040-123-4561' },
    { name: 'Ada Lovelace', number: '393-442-5323' },
    { name: 'Dan Abramov', number: '123-433-2343' },
    { name: 'Mary Poppendieck', number: '392-231-6423' }
  ])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const addContact = (event) => {
    event.preventDefault();
    if (contacts.find(person => person.name === newName))
      alert(`${newName} already exist, try another.`)
    else if (contacts.find(person => person.number === newPhone))
      alert(`${newPhone} already exist, try another.`)
    else if (!newName || !newPhone)
      alert('You must fill all fields.')
    else if (newPhone.length < 12)
      alert('Invalid phone number.')
    else {
      event.preventDefault();
      const newContact = {
        name: newName,
        number: newPhone
      }
      console.log(newContact)
      setContacts(contacts.concat(newContact))
      setNewName('')
      setNewPhone('')
    }
  }

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
      <Contacts contacts={showContacts()} />
    </>
  )
}

export default App