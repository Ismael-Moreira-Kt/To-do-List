import createDatabase from './database';



export type Task = {
    id: number;
    description: string;
    completed: boolean;
    due_date?: string;
    priority?: number;
    user_id?: number;
    category_id?: number;
};


export const addTask = async (description: string, dueDate?: string, priority: number = 3, userId?: number, categoryId?: number): Promise<void> => {
    const db = await createDatabase();
    
    await db.run(
        'INSERT INTO tasks (description, due_date, priority, user_id, category_id) VALUES (?, ?, ?, ?, ?)',
        description, dueDate, priority, userId, categoryId
    );
    
    console.log('Task added successfully!');
};


export const listTasks = async (): Promise<Task[]> => {
    const db = await createDatabase();
    const tasks: Task[] = await db.all('SELECT * FROM tasks');
    
    return tasks;
};


export const completeTask = async (id: number): Promise<void> => {
    const db = await createDatabase();
    await db.run('UPDATE tasks SET completed = 1 WHERE id = ?', id);
    console.log(`Task ${id} completed!`);
};