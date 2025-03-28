import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
export const addOneContact = async () => {
  const contact = createFakeContact();
  const existingData = await readContacts();
  const updatingData = [...existingData, contact];
  await writeContacts(updatingData);
};
addOneContact();
