import createDatabase from './database';



export type Category = {
    id: number;
    name: string;
    description?: string;
};


export const addCategory = async (name: string, description?: string): Promise<void> => {
    const db = await createDatabase();
    await db.run('INSERT INTO categories (name, description) VALUES (?, ?)', name, description);
    console.log('Category added successfully!');
};