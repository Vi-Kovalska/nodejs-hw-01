import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { faker } from '@faker-js/faker';

const generateContacts = async (number) => {
  const newData = faker.helpers.multiple(createFakeContact, { count: number });
  try {
    const existingDataPromises = await fs.readFile(PATH_DB, 'utf8');
    const existingData = JSON.parse(existingDataPromises);

    const updatingContacts = JSON.stringify([...existingData, ...newData]);

    const response = await fs.writeFile(PATH_DB, updatingContacts, 'utf8');
    return response;
  } catch (error) {
    return error.message;
  }
};

generateContacts(5);
