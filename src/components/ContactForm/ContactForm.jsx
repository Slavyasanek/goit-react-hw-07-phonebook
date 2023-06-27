import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Form, Input, Label, Button } from './ContactForm.styled';
import {useDispatch, useSelector} from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameInputId = nanoid();
    const telInputId = nanoid();

    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleChange = ({ target }) => {
        if (target.name === 'name') {
            setName(target.value);
        } else if (target.name === 'number') {
            setNumber(target.value);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (contacts.find(contact => contact.name === name)) {
            alert(`${name} is already in contacts`);
            reset();
            return;
        }
        dispatch(addContact(name, number));
        reset();
    }

    const reset = () => {
        setName('');
        setNumber('');
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Label htmlFor={nameInputId}>Name</Label>
            <Input
                type="text"
                id={nameInputId}
                name="name"
                pattern="^[A-Za-z\u0080-\uFFFF ']+$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                value={name}
                onChange={handleChange}
                required
            />
            <Label htmlFor={telInputId}>Number</Label>
            <Input
                type="tel"
                id={telInputId}
                name="number"
                pattern="^(\+?[0-9.\(\)\-\s]*)$"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                value={number}
                onChange={handleChange}
                required
            />
            <Button type='submit'>Add contact</Button>
        </Form>
    );
}