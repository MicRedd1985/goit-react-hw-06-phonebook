import React from 'react';
import './App.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import Filter from "./Filter/Filter";
import { setFilter } from '../redux/ToolkitSlice';

export default function App() {

  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);


  const handleChange = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

    return (
      
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter handleChange={handleChange} filter={filter} />
        <ContactList />
      </div>
    );
}