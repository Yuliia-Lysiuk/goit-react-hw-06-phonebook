import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Phonebook, SecondTitle, Title, Box } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Text } from './ContactList/ContactList.styled';

function App() {
  const contacts = useSelector(getContacts);

  useEffect(() => {
    localStorage.setItem('CONTACTS', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Box>
      <Phonebook>
        <Title>Phonebook</Title>
        <ContactForm />

        {contacts.length > 0 ? (
          <>
            <SecondTitle>Contacts</SecondTitle>
            <Filter />
            <ContactList />
          </>
        ) : (
          <Text>No contacts add</Text>
        )}
      </Phonebook>
    </Box>
  );
}

export default App;
