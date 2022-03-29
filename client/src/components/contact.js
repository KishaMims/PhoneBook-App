import React from 'react';
import { useState, useEffect } from "react";
//import Form from './createcontacts';

export default function Contact() {
const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/contacts')
           .then((response) => response.json())
           //.then(response => response.text())
            .then(contacts => {
                setContacts(contacts);
            }

            )

    }, []);

    // const addContact = (contact) => {
    //   setContacts((contacts) => [...contacts, contact]);
    // }

  return (
        <div className="contacts">
          <h1> Contacts</h1>
          <ul>
              {contacts.map((contact, index) =>
                  <li key={index}> {contact.firstname} {contact.lastname} {contact.phone} {contact.email} {contact.notes}</li>)}
          </ul>
          {/* <Form addContact={addContact}/> */}
        </div>
      );
    }
