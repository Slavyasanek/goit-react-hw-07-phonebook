import { Contact, List, Name, Tel, DeleteButton } from './ContactList.styled';
import { RiDeleteBin6Line } from 'react-icons/ri'
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
    const dispatch = useDispatch();

    const contacts = useSelector(selectFilteredContacts);

    const deleteNote = (e) => {
        const contactId = e.target.closest('li').dataset.contact;
        dispatch(deleteContact(contactId));
    }

    return (
        <List>
            {contacts.length > 0 ? (
                contacts.map(contact => {
                    return (
                        <Contact key={contact.id} data-contact={contact.id}>
                            <Name>{contact.name}</Name>
                            <Tel>{contact.phone}</Tel>
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
        phone: PropTypes.string.isRequired
    })),
}