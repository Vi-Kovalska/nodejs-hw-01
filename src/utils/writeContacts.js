import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (newContacts) => {
  await fs.writeFile(PATH_DB, JSON.stringify(newContacts, null, 2), 'utf8');
};
