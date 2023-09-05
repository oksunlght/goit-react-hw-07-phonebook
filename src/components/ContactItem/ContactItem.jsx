import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/contactsSlice';
import { Item, DeleteBtn } from './ContactItem.styled';

const ContactItem = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = contactId => dispatch(deleteContact(contactId));

  return filteredContacts.map(({ id, name, number }) => {
    return (
      <Item key={id}>
        &#8226; {name} {number}
        <DeleteBtn type="button" onClick={() => handleDeleteContact(id)}>
          Delete
        </DeleteBtn>
      </Item>
    );
  });
};

export default ContactItem;
