// import React from 'react'
// import { useState } from 'react';

// // export default function EditContact({props, contacts:firstname, lastname, email, notes}) {


// // const [editdedContact, setEditedContact] = useState([]);


// export default function EditContact ({ contacts: {firstname, lastname, email, phone, notes, setContacts} }) {
//     const [firstname, setFirstName] = useState(contacts.firstname);
//     const [lastname, setLastName] = useState(contacts.lastname);
//     const [email, setEmail] = useState(contacts.email);
//     const [phone, setPhone] = useState(contacts.phone);
//     const [notes, setNotes] = useState(contacts.notes);


//     //     const handleEditedLastnameChange = (event) => {
//     //         const lastname = event.target.value;
//     //         setEditedContact((editdedContact) => ({ ...editdedContact, lastname }));
//     //     }
//     const updatecontact = (setContacts) => {
//         return fetch('http://localhost:5000/api/contacts', {
//         method: 'PUT',
//         headers: {'Content-Type': 'application/json'}, 
//         body: JSON.stringify(setContacts)
//       }).then((response) => {
//           return response.json()
//       }).then((data) => {
//         console.log("From the post ", data);
//         setContacts(data);
      
//     });
//     }

//     //     const handleEditedEmailChange = (event) => {
//     //         const email = event.target.value;
//     //         setEditedContact((editdedContact) => ({ ...editdedContact, email}));

//     //     }

//     //     const handleEditedPhoneChange = (event) => {
//     //         const phone = event.target.value;
//     //         setEditedContact((editdedContact) => ({ ...editdedContact, phone}));

//     //     }

//     //     const handleEditedNotesChange = (event) => {
//     //         const notes = event.target.value;
//     //         setEditedContact((editdedContact) => ({ ...editdedContact, notes}));

//     //     }



//     //     // const handleSubmit = (e) => {
//     //     //     {contacts.map((contact, index) =>
//     //     //         <li key={index}> 
//     //     //       {contact.firstname} {contact.lastname} {contact.phone} {contact.email} {contact.notes}</li>)
//     //     //     e.preventDefault();
//     //     //     setEditedContact(editdedContact);
//     //     //     postcontact(editdedContact);
//     //     //     props.addContact(editdedContact);
//     //     //     setEditedContact(emptyContact);


//     //     //     }
//     //         // const editContact = (editedContacts) => {
//     //         //     setEditedContact((editedContacts) => [...editedContacts, contacts]);
//     //           }
//     // const editedContact = {
//     //     id: editContactId,
//     //     fullName: editFormData.fullName,
//     //     address: editFormData.address,
//     //     phoneNumber: editFormData.phoneNumber,
//     //     email: editFormData.email,
//     //   };



//     // const handleSubmit = (e) => {
    
//     //     }
//     //     e.preventDefault();
//     //    updatecontact(setContacts)

//     function handleUpdate(e) {
//         updatecontact(setContacts);
//     }
//         // event.preventDefault();


//     return (
//         <div>
//         <button
//             type="submit"
//             className="btn btn-primary"
//             data-toggle="modal"
//             data-target={`#id${contacts.id}`}
//         >
//             Edit
//         </button>
//         <form onSubmit={handleUpdate}>
//                 <fieldset>
//                     <label>First Name</label>
//                     <input
//                         type="text"
//                         id="add-contact-name"
//                         placeholder="First Name"
//                         required
//                         value={firstname}
//                         onChange={(e) => setFirstName(e.target.value)}/>
//                     <label>Last Name</label>
//                     <input
//                         type="text"
//                         id="add-contact-lastname"
//                         placeholder="Last Name"
//                         required
//                         value={lastname}
//                         onChange={(e) => setLastName(e.target.value)}/>
//                     <label>Email</label>
//                     <input
//                         type="text"
//                         id="add-contact-email"
//                         placeholder="Last Name"
//                         required
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}/>
//                     <label>Phone</label>
//                     <input
//                         type="text"
//                         id="add-contact-phone"
//                         placeholder="Add Phone"
//                         required
//                         value={phone}
//                         onChange={(e) => setPhone(e.target.value)}/>
//                     <label>Notes</label>
//                     <input
//                         type="text"
//                         id="add-contact-notes"
//                         placeholder="Notes"
//                         value={notes}
//                         onChange={(e) => setNotes(e.target.value)}/>
//                 </fieldset>
//             </form>
//             </div>
//     );
// }