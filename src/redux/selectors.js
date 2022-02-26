export const getFilter = ({ contacts }) => contacts.filter;

export const getContacts = ({ contacts }) => contacts.items;

export const getvisibleContacts = ({ contacts }) =>
  contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(contacts.filter)
  );
