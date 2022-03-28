import { useState } from "react";

const Form = (props) => {
    const [contact, setContact] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        notes: ""
    });

    //create functions that handle the event of the user typing into the form
    const handleNameChange = (event) => {
        const firstname = event.target.value;
        setContact((contact) => ({ ...contact, firstname }));

    }

    const handleLastnameChange = (event) => {
        const lastname = event.target.value;
        setContact((contact) => ({ ...contact, lastname }));
    }


    const handleEmailChange = (event) => {
        const email = event.target.value;
        setContact((contact) => ({ ...contact, email}));

    }

    const handlePhoneChange = (event) => {
        const phone = event.target.value;
        setContact((contact) => ({ ...contact, phone}));

    }

    const handleNotesChange = (event) => {
        const notes = event.target.value;
        setContact((contact) => ({ ...contact, notes}));

    }
    //A function to handle the post request
    const postcontact = (newcontact) => {
        return fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(newcontact)
      }).then((response) => {
          return response.json()
      }).then((data) => {
        console.log("From the post ", data);
        props.addcontact(data);
      
    });
    }

    const handleSubmit = (e) => {
        let emptyContact = {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            notes: ""
        }
        e.preventDefault();
        setContact(contact);
        postcontact(contact);
        props.addContact(contact);
        setContact(emptyContact);
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>First Name</label>
                <input
                    type="text"
                    id="add-contact-name"
                    placeholder="First Name"
                    required
                    value={contact.name}
                    onChange={handleNameChange}

                />
                <label>Last Name</label>
                <input
                    type="text"
                    id="add-contact-lastname"
                    placeholder="Last Name"
                    required
                    value={contact.lastname}
                    onChange={handleLastnameChange}
                />
                  <label>Email</label>
                <input
                    type="text"
                    id="add-contact-email"
                    placeholder="Last Name"
                    required
                    value={contact.email}
                    onChange={handleEmailChange}
                />
                  <label>Phone</label>
                <input
                    type="text"
                    id="add-contact-phone"
                    placeholder="Add Phone"
                    required
                    value={contact.phone}
                    onChange={handlePhoneChange}
                />
                     <label>Notes</label>
                <input
                    type="text"
                    id="add-contact-notes"
                    placeholder="Notes"
                    required
                    value={contact.notes}
                    onChange={handleNotesChange}
                />
            </fieldset>
            <button type="submit">Add</button>
        </form>
    );
};

export default Form;