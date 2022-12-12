import mysql2 from "mysql2/promise";

const con = await mysql2.createConnection({
  server: "localhost:3001",
  user: "root",
  password: "root",
  database: "portfolj",
});

export const getAll = async (table) => {
  try {
    const [rows, fields] = await con.query(`SELECT * FROM ${table}`);
    return rows;
  } catch (err) {
    console.log(err);
    throw new Error();
  }
};

export const selectFrom = async (table, ref, value) => {
  try {
    const [rows, fields] = await con.query(
      `SELECT * FROM ${table} WHERE ${ref} = "${value}"`
    );
    return rows;
  } catch (err) {
    throw new Error();
  }
};

export const selectFromSingleJoin = async (table, ref, value, join) => {
  try {
    const [rows, fields] = await con.query(
      `SELECT * FROM ${table} INNER JOIN ${join} ON ${table}.ID = ${join}.${table}_ID AND ${table}.${ref} = ${value}`
    );
    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

export const insert = async (table, tableValues, newValues) => {
  try {
    const [rows, fields] = await con.query(
      `INSERT INTO ${table} (${tableValues}) VALUES ?`,
      [newValues]
    );
    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteFrom = async (table, ref, value) => {
  try {
    const [rows, fields] = await con.query(
      `DELETE FROM ${table} WHERE ${ref} = '${value}'`
    );
    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

export const freeQuery = async (query) => {
  try {
    const [rows, fields] = await con.query(query);
    return rows;
  } catch (err) {
    console.log(err);

    throw new Error(err);
  }
};
