require('dotenv').config();

import db from '../../config/database';

const database = process.env.NODE_ENV === 'production' ? process.env.AWS_DATABASE : process.env.LOCAL_DATABASE;

export const createDatabase = async () => {
  try {
    await db.queryAsync(
      `CREATE DATABASE ${database}`
    );
    console.log('successfully created database ', database); 
} catch (err) {
    console.log('error creating database, '); 
  }
}

export const dropDatabase = async () => {
  try {
    await db.queryAsync(
      `DROP DATABASE IF EXISTS ${database}`
    ); 
    console.log('successfully dropped database ', database)
} catch (err) {
    console.log('error dropping database '); 
  }
}; 

export const useDatabase = async () => {
  try {
    await db.queryAsync(
      `USE IF EXISTS ${database}`
    );
    console.log('successfully using database ', database)
} catch (err) {
    console.log('error using database ', err); 
  }
};

export const createUsersTable = async () => {
  try {
    await db.queryAsync(
      `CREATE TABLE IF NOT EXISTS users (
        id SERIAL, 
        name VARCHAR(255),
        email VARCHAR(255) UNIQUE NOT NULL,
        uid VARCHAR (255) NOT NULL, 
        image text,
        CONSTRAINT users_pk PRIMARY KEY(id)
      )
        `
    );
    console.log('successfully created users table');

} catch (err) {
    console.log('error creating users table ', err); 
  }
};

export const dropUsersTable = async () => {
  try {
    await db.queryAsync( 
        `DROP TABLE IF EXISTS users`
    );
    console.log('successfully dropped users table')
} catch (err) {
    console.log('error dropping users table ', err); 
  }
};

export const createPicksTable = async () => {
  try {
    await db.queryAsync(
      `CREATE TABLE IF NOT EXISTS picks (
        id SERIAL,
        groupA1 VARCHAR (255),
        groupA2 VARCHAR (255),
        groupB1 VARCHAR (255),
        groupB2 VARCHAR (255),
        groupC1 VARCHAR (255),
        groupC2 VARCHAR (255),
        groupD1 VARCHAR (255),
        groupD2 VARCHAR (255),
        groupE1 VARCHAR (255),
        groupE2 VARCHAR (255),
        groupF1 VARCHAR (255),
        groupF2 VARCHAR (255),
        groupG1 VARCHAR (255),
        groupG2 VARCHAR (255),
        groupH1 VARCHAR (255),
        groupH2 VARCHAR (255),
        CONSTRAINT users_pk PRIMARY KEY(id)
        CONSTRAINT fk_picks_creator FOREIGN KEY(picker) REFERENCES users(id),
        
      )
        `
    )
  } catch (err) {
    console.log('error creating picks table ', err);
  }
};

export const dropPicksTable = async () => {
  try {
    await db.queryAsync( 
        `DROP TABLE IF EXISTS picks`
    );
    console.log('successfully dropped picks table')
} catch (err) {
    console.log('error dropping picks table ', err); 
  }
}


export const dropAllTables = async () => {
  await dropUsersTable();
  await dropPicksTable();
}

export const createAllTables = async () => {
  await createPicksTable();
  await createUsersTable();
}

