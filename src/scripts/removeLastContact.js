import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';
import fs from 'node:fs/promises';
export const removeLastContact = async () => {
  try {
    const contacts = await getAllContacts();
    if (contacts.length === 0) return;
    contacts.pop();
    const updatingContacts = await fs.writeFile(
      PATH_DB,
      JSON.stringify(contacts),
      'utf8',
    );
    return updatingContacts;
  } catch (error) {
    return error.message;
  }
};

removeLastContact();
