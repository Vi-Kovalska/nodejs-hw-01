import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await getAllContacts();
    return contacts.length;
  } catch (error) {
    return error.message;
  }
};

console.log(await countContacts());
