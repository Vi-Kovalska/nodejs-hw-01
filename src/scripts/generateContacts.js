import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const newData = Array(number).fill(0).map(createFakeContact);
  const existingData = await readContacts();

  const updatingContacts = [...existingData, ...newData];

  await writeContacts(updatingContacts);
};

generateContacts(5);
