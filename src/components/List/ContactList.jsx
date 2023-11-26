import React, { useEffect } from 'react';
import ContactItem from './ContactItem';
import Loader from 'components/Loaader';
import ErrorMessage from 'components/ErrorMessage';
import { getIsLoading, getContactsList, getError } from 'redux/contactsReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filtersSlice';
import { fetchContacts } from 'redux/contacts.operations';

const ContactList = () => {
  const error = useSelector(getError);
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContactsList);
  const loading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  console.log(contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = !filter
    ? contacts
    : contacts?.filter(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.phone.toLowerCase().includes(filter.toLowerCase())
      );

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorMessage />;
  }
  if (!contacts.length) {
    return <h3>You don't have any contacts.</h3>;
  }
  if (filter && !filteredContacts.length) {
    return <h3>There are no contacts matching your request.</h3>;
  }
  return (
    <>
      {filteredContacts.map(contact => {
        return (
          <ContactItem
            userName={contact.name}
            userNumber={contact.phone}
            userId={contact.id}
            key={contact.id}
          />
        );
      })}
    </>
  );
};

export default ContactList;
