import React, { useState } from 'react'
import Contacts from './components/Contacts'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123-4561' },
    { name: 'Ada Lovelace', number: '393-442-5323' },
    { name: 'Dan Abramov', number: '123-433-2343' },
    { name: 'Mary Poppendieck', number: '392-231-6423' }
  ])
  const [newName, setNewName] = useState('')
  const [filter, setFilter] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.find(person => person.name === newName))
      alert(`${newName} already exist, try another.`)
    else if (persons.find(person => person.number === newNumber))
      alert(`${newNumber} already exist, try another.`)
    else if (!newName || !newNumber)
      alert('You must fill all fields.')
    else if (newNumber.length < 12)
      alert('Invalid number.')
    else {
      event.preventDefault();
      const newPerson = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    setPersons(persons.filter(person => person.name.includes(filter)))
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    if (event.target.value.length <= 12) { /* 10 cifras y dos guiones */
      var cleaned = ("" + event.target.value).replace(/\D/g, "");

      let normValue = `${cleaned.substring(0, 3)}${cleaned.length > 3 ? "-" : ""
        }${cleaned.substring(3, 6)}${cleaned.length > 6 ? "-" : ""
        }${cleaned.substring(6, 11)}`;

      setNewNumber(normValue);
    }
  }

  return (
    <>
      <h2>Phonebook</h2>
      <h3>Filter</h3>
      <input
        value={filter}
        onChange={handleFilterChange}
      />
      
      <Contacts persons={persons} />
    </>
  )
}

export default App