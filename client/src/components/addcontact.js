import { useState, useEffect } from "react";

const Form = () => {
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

    const addContact = (contact) => {
        setContacts((contacts) => [...contacts, contact]);
      }
  


    const [newcontact, setNewContact] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        notes: ""
    });


    // const Form = (props) => { prop in case we need to change this back


    //create functions that handle the event of the user typing into the form
    const handleNameChange = (event) => {
        const firstname = event.target.value;
        setNewContact((newcontact) => ({ ...newcontact, firstname }));

    }

    const handleLastnameChange = (event) => {
        const lastname = event.target.value;
        setNewContact((newcontact) => ({ ...newcontact, lastname }));
    }


    const handleEmailChange = (event) => {
        const email = event.target.value;
        setNewContact((newcontact) => ({ ...newcontact, email}));

    }

    const handlePhoneChange = (event) => {
        const phone = event.target.value;
        setNewContact((newcontact) => ({ ...newcontact, phone}));

    }

    const handleNotesChange = (event) => {
        const notes = event.target.value;
        setNewContact((newcontact) => ({ ...newcontact, notes}));

    }
    //A function to handle the post request
    const postcontact = (addnewcontact) => {
        return fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(addnewcontact)
      }).then((response) => {
          return response.json()
      }).then((data) => {
        console.log("From the post ", data);
        addContact(data);
      
    });
    }


    // this is the post without links
    // const postcontact = (newcontact) => {
    //     return fetch('http://localhost:5000/api/contacts', {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'}, 
    //     body: JSON.stringify(newcontact)
    //   }).then((response) => {
    //       return response.json()
    //   }).then((data) => {
    //     console.log("From the post ", data);
    //     props.addcontact(data);
      
    // });
    // }

    const handleSubmit = (e) => {
        let emptyContact = {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            notes: ""
        }
        e.preventDefault();
        setNewContact(newcontact);
        postcontact(newcontact)
        setNewContact(emptyContact);
       
        
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
                    value={newcontact.name}
                    onChange={handleNameChange}

                />
                <label>Last Name</label>
                <input
                    type="text"
                    id="add-contact-lastname"
                    placeholder="Last Name"
                    required
                    value={newcontact.lastname}
                    onChange={handleLastnameChange}
                />
                  <label>Email</label>
                <input
                    type="text"
                    id="add-contact-email"
                    placeholder="Last Name"
                    required
                    value={newcontact.email}
                    onChange={handleEmailChange}
                />
                  <label>Phone</label>
                <input
                    type="text"
                    id="add-contact-phone"
                    placeholder="Add Phone"
                    required
                    value={newcontact.phone}
                    onChange={handlePhoneChange}
                />
                     <label>Notes</label>
                <input
                    type="text"
                    id="add-contact-notes"
                    placeholder="Notes"
                    required
                    value={newcontact.notes}
                    onChange={handleNotesChange}
                />
            </fieldset>
            <button type="submit">Add</button>
        </form>
        
    );
};

export default Form;