import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
export const addOneContact = async () => {
  const contact = createFakeContact();
  try {
    const existDataPromises = await fs.readFile(PATH_DB, 'utf8');
    const existData = JSON.parse(existDataPromises);
    const updatingData = JSON.stringify([...existData, contact]);
    const response = await fs.writeFile(PATH_DB, updatingData, 'utf8');
    return response;
  } catch (error) {
    return error.message;
  }
};
addOneContact();
