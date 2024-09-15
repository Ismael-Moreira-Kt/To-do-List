import sqlite3 from 'sqlite3';
import { open } from 'sqlite';



const createDatabase = async () => {
    const db = await open({
        filename: './tasks.db',
        driver: sqlite3.Database
    });


    return db;
};



export default createDatabase;