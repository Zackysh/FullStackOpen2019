import React from 'react'

const ContactForm = ({ onSubmit, name, phone }) =>

    <form onSubmit={onSubmit}>
        <div>
            name: <input value={name.value} onChange={name.onChange} />
            <br />
                number: <input value={phone.value} onChange={phone.onChange} />
        </div>
        <div>
            <button type="submit">Add</button>
        </div>
    </form>

export default ContactForm