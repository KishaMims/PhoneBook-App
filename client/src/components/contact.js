import React from 'react';
import { useState, useEffect } from "react";
// import EditContact from './/updatecontact';
// import ReadOnlyRow from '/.readonly';


export default function Contact() {
const [contacts, setContacts] = useState([]);
//const [updatecontact, setUpdatedcontact]= useState(contacts);
//const [editdedContact, setEditedContact] = useState(contacts);

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
  // const [editFormData, setEditFormData] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   phone: "",
  //   notes: ""
  //   }); 
  
  // const [editContactId, setEditContactId] = useState(null);
  //   // const editContact = (editedContact) => {
  //   //   setEditedContact((editdedContact) => [...editdedContact, contacts]);
  //   // }
  // const handleAddFormChange = (event) => {
  // event.preventDefault();
  
  // const handleEditFormChange = (event) => {
  // event.preventDefault();
  
  // const handleEditFormSubmit = (event) => {
  //   event.preventDefault();

  //   const editedContact = {
  //     firstname: editFormData.firstName,
  //     lastname: editFormData.lastname,
  //     email: editFormData.email,
  //     phone: editFormData.phone,
  //     notes: editFormData.notes,
  //   };
  
  //   const index = contacts.findIndex((contact) => contact.id === editContactId);

  //   newContacts[index] = editedContact;

  //   setContacts(newContacts);
  //   setEditContactId(null);
  // };

  return (
        <div className="contacts">
          <h1> Contacts</h1>
          <ul>
              {contacts.map((contact, index) =>
                  <li key={index}> 
                {contact.firstname} {contact.lastname} {contact.phone} {contact.email} {contact.notes}</li>)}
                {/* <button onClick={()=>className="edit-button">Edit</button> */}
          </ul>
          {/* <EditContact EditContact={EditContact}/>  */}
        </div>
      );
    }
