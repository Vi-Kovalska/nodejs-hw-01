import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const response = await fs.writeFile(PATH_DB, updatedContacts, 'utf8');
    return response;
  } catch (error) {
    return error.message;
  }
};
