import React from 'react'
import Person from './Person'

const Contacts = ({ persons }) => {
    return (
        <>
            <h2>Contacts</h2>
            <ul>
                {persons.map(person =>
                    <Person key={person.name} person={person} />
                )}
            </ul>
        </>
    )
}

export default Contacts