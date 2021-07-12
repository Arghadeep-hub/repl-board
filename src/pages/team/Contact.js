import React, { useEffect, useState,Fragment } from 'react';
import { v4 as uuid_v4 } from 'uuid';
import Sidebar from '../../components/Sidebar';
import AddContact from './AddContact';
import ContactList from './ContactList';
import './Contact.css'
import { useSnackbar } from 'notistack';

function Contact() {
    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState([])
    contacts.sort((a, b) => (a.name > b.name) ? 1 : -1)
    const [search, setSearch] = useState("")
    const [result, setResult] = useState([])

    const {enqueueSnackbar} = useSnackbar();

    const hadleContact = (Contact) => {
        // console.log(Contact);
        setContacts([...contacts, {id: uuid_v4(), ...Contact}])
    }

    const removeContact =(id)=>{
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id;
        });

        setContacts(newContactList);
    }

    const handleSearch = (search) => {
        setSearch(search);
        if (search !== "") {
            const newContactList = contacts.filter((contact) => {
                return (Object.values(contact).join(" ").toLowerCase().includes(search.toLowerCase()))
            })
            setResult(newContactList);
        } else {
            setResult(contacts);
        }
    }

    useEffect(() => {
        const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retriveContacts) {
            setContacts(retriveContacts)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts])
    return (
        <Fragment>
            <div className="contact_body">
                <Sidebar />
                <div className='contact'>
                    <AddContact handleVarient={enqueueSnackbar} hadleContact={hadleContact} />
                    <ContactList contacts={search.length < 1 ? contacts : result} getContactId={removeContact} term={search} handleSearch={handleSearch} />
                </div>
            </div>
        </Fragment>
    )
}

export default Contact
