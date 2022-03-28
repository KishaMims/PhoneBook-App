import React from 'react';
import { useState, useEffect } from "react";

export default function Contact() {
const [contacts, setContacts] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/api/contacts')
    //     .then((response) => response.json())
    //     .then(contacts =>{
    //         //setStudents((students[3]));
    //         //console.log("Testing", typeof students);
    //         for (let index in contacts){
    //            if( index !== "3"){
    //             setContacts(contacts);
    //            }
    //         };       
    //     })
        
    // }, []);
    useEffect(() => {
        fetch('http://localhost:5000/contacts')
           .then((response) => response.json())
           //.then(response => response.text())
            .then(contacts => {
                setContacts(contacts);
            }

            )

    }, []);

  return (
        <div className="contacts">
          <h1> Contacts</h1>
          <ul>
              {contacts.map((contact, index) =>
                  <li key={index}> {contact.firstname} {contact.lastname} {contact.phone} {contact.email} {contact.notes}</li>)}
          </ul>
        </div>
      );
    }
