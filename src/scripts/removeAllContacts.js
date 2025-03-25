import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const removingContacts = await fs.writeFile(
      PATH_DB,
      JSON.stringify([]),
      'utf8',
    );
    return removingContacts;
  } catch (error) {
    return error.message;
  }
};

removeAllContacts();
