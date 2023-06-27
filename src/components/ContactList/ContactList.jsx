import { Contact, List, Name, Tel, DeleteButton } from './ContactList.styled';
import { RiDeleteBin6Line } from 'react-icons/ri'
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

const filterContacts = (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
}

export const ContactList = () => {
    const dispatch = useDispatch();

    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const filteredContacts = filterContacts(contacts, filter);

    const deleteNote = (e) => {
        const contactId = e.target.closest('li').dataset.contact;
        dispatch(deleteContact(contactId))
    }

    return (
        <List>
            {filter === '' ? 
            (contacts.length > 0 ? (
                contacts.map(contact => {
                    return (
                        <Contact key={contact.id} data-contact={contact.id}>
                            <Name>{contact.name}</Name>
                            <Tel>{contact.number}</Tel>
                            <DeleteButton type='button' onClick={deleteNote}><RiDeleteBin6Line /></DeleteButton>
                        </Contact>
                    )
                })
            ) : <Contact>Add contacts to proceed</Contact>) 
            : filteredContacts.length > 0 ? (
                        filteredContacts.map(contact => {
                            return (
                                <Contact key={contact.id} data-contact={contact.id}>
                                    <Name>{contact.name}</Name>
                                    <Tel>{contact.number}</Tel>
                                    <DeleteButton type='button' onClick={deleteNote}><RiDeleteBin6Line /></DeleteButton>
                                </Contact>
                            )
                        })
                    )
                        : (<Contact>No matches</Contact>)
                    }
        </List>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),
}