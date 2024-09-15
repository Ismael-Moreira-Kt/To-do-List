import sqlite3 from 'sqlite3';
import { open } from 'sqlite';



const createDatabase = async () => {
    const db = await open({
        filename: './tasks.db',
        driver: sqlite3.Database
    });


    await db.exec(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )`);


    await db.exec(`CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        description TEXT
    )`);


    return db;
};



export default createDatabase;