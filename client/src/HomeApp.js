import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/contact';
import SingleContact from './components/viewcontact';
import Form from './components/addcontact';
import Navbar from './components/navbar';

function Homeapp() {
  return (
    <div className="App">
     <Router>
       <Navbar />
       <Routes>
        <Route exact path= "/Contacts" element={<Contact/>}/>
        <Route exact path= "/Search" element={<SingleContact/>}/>
        <Route exact path= "/AddContact" element={<Form/>}/>
        </Routes>
     </Router>
    </div>
  );
}

export default Homeapp;

