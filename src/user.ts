import createDatabase from './database';



export type User = {
    id: number;
    name: string;
    email: string;
};


export const addUser = async (name: string, email: string): Promise<void> => {
    const db = await createDatabase();
    await db.run('INSERT INTO users (name, email) VALUES (?, ?)', name, email);
    console.log('User added successfully!');
};


export const listUsers = async (): Promise<User[]> => {
    const db = await createDatabase();
    const users: User[] = await db.all('SELECT * FROM users');
    return users;
};