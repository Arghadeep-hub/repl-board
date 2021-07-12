import React, { useRef } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import * as FiIcon from "react-icons/fi"
import { Typography } from '@material-ui/core';


function ContactList(props) {
    const inputEl = useRef("");
    const deleteContact = (id) => {
        props.getContactId(id)
    }
    const renderContacts = props.contacts.map((contact) => {
        return (
            <div className="item" key={contact.id}>
                <IconButton color="primary" className="avatar_profile">
                    <Avatar src={`https://avatars.dicebear.com/api/initials/${contact.name}.svg`} />
                </IconButton>
                <div className="content">
                    <h6>{contact.name}</h6>
                    <p>{contact.email}</p>
                </div>
                <IconButton className="icon_button" color="secondary" onClick={() => deleteContact(contact.id)}>
                    <FiIcon.FiTrash />
                </IconButton>
            </div>
        )
    })

    const getHandleSearch = () => {
        props.handleSearch(inputEl.current.value)
    }

    return (
        <div className="modal">
            <div className="modal-avatar">
                <Typography variant="h5" color="primary">Your contacts</Typography>
            </div>
            <div className="modal-body">
                <input ref={inputEl} type="text" className="input" placeholder="Search Here" value={props.term} onChange={getHandleSearch} />
            </div>

            <div className="modal-body">
                {renderContacts.length ? renderContacts : <Typography variant="h5" color="secondary">There are no contacts are avaliable.</Typography>}
            </div>
        </div>
    )
}

export default ContactList
