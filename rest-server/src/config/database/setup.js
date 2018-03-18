import {
  createDatabase,
  dropDatabase,
  createUsersTable,
  dropUsersTable,
  createPicksTable,
  dropPicksTable
} from '../../lib/SQL';

const setup = async () => {
  await dropDatabase();

  await dropUsersTable();
  await dropPicksTable();

  await createDatabase();
  
  await createUsersTable();
  await createPicksTable();

  process.exit();
};

setup();


