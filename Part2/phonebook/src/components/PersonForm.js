import React from 'react'
import Person from './Person'

const PersonForm = ({ addPerson }) => {
    return (
        <>
            <h3>Add new</h3>
            <form onSubmit={addPerson}>
                <div>
                    name: <input
                        value={newName}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    number: <input
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </>
    )
}

export default PersonForm