import React from 'react'
import Contact from './Contact'

const Contacts = ({ contacts, onDelete }) =>
    <ul>
        {contacts.map(contact =>
            <Contact key={contact.name} contact={contact} onDelete={onDelete}/>)
        }
    </ul>

export default Contacts