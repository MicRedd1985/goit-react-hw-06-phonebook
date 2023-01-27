import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { add } from '../../redux/ToolkitSlice';
import { Form, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');

  const nameId = nanoid();
  const phoneId = nanoid();

  const handleChangeName = evt => {
    setName(evt.target.value);
  };

  const handleChangeNumber = evt => {
    setNumber(evt.target.value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  useEffect(() => {
    return setId(nanoid());
  }, [name, number]);

  const addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };
    const checkUser = contacts.find(
      contact => contact.name === newContact.name
    );

    checkUser
      ? alert(`${name} is already in the contacts`)
      : dispatch(add({ name, number, id }));
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    addContact({ name, number });
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name{' '}
        <input
          type="text"
          name="name"
          onChange={handleChangeName}
          id={nameId}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number{' '}
        <input
          type="tel"
          name="number"
          onChange={handleChangeNumber}
          id={phoneId}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
