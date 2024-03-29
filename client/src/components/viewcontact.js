import { useState, useEffect } from "react";


function SingleContact() {

    const [contacts, setContacts] = useState([]);
    const [foundContacts, setFoundContacts] = useState(contacts);
    const [firstname, setName] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/contacts')
            .then((response) => response.json())
            //.then(response => response.text())
            .then(contacts => {
                setContacts(contacts);
            }

            )

    }, []);
    console.log(contacts);
    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = contacts.filter((contact) => {
                return contact.firstname.toLowerCase().startsWith(keyword.toLowerCase());

            });

            setFoundContacts(results);

        } else {


            setFoundContacts(contacts)

        }

        setName(keyword);

    };


    return (
        <div className="foundcontact">
            <input
                type="search"
                value={firstname}
                onChange={filter}
                className="input"
                placeholder="🔍 Search"
            />
        <div className="contact-list">
            {foundContacts && foundContacts.length > 0 ? (
                foundContacts.map((contacts, index) => (
                    <li key={index}>
                    <span className="contact-firstname">Name: {contacts.firstname}</span>
                     <span className="contact-lastname">{contacts.lastname}</span> <br />
                     <span className="contact-phone">Phone: {contacts.phone}</span><br />
                     <span className="contact-email">Email: {contacts.email}</span> <br />
                     <span className="contact-notes">Notes: {contacts.notes}</span><br />
                     </li>
                ))
            ) : (
            <h1>No Results Found</h1>
            )}
        </div>
        </div>
    );
}

export default SingleContact;



