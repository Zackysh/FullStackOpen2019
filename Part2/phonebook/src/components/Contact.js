import React from 'react'

const Contact = ({ contact, onDelete }) =>
    <li>
        {`${contact.name}: ${contact.number}`} &nbsp;
        <button onClick={() => onDelete(contact.id)}>delete</button>
    </li>
export default Contact