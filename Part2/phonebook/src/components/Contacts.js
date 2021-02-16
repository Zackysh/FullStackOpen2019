import React from 'react'
import Contact from './Contact'

const Contacts = ({ contacts }) =>
    <ul>
        {contacts.map(contact =>
            <Contact key={contact.name} contact={contact} />)
        }
    </ul>

export default Contacts