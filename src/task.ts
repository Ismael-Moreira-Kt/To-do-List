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