import readlineSync from 'readline-sync';
import { addTask, listTasks, completeTask, deleteTask } from './task';
import { addUser, listUsers } from './user';
import { addCategory, listCategories } from './category';



const taskMenu = async () => {
    console.log('--- Task Management ---');
    console.log('1. Add Task');
    console.log('2. List Tasks');
    console.log('3. Complete Task');
    console.log('4. Delete Task');
    console.log('5. Back to Main Menu');
  
    const option = readlineSync.question('Choose an option: ');
  
    switch (option) {
        case '1':
            const description = readlineSync.question('Task description: ');
            const dueDate = readlineSync.question('Due date (optional): ');
            const priority = parseInt(readlineSync.question('Priority (1-5): '), 10);
            
            await addTask(description, dueDate, priority);
            break;

        case '2':
            const tasks = await listTasks();

            if (tasks.length === 0) {
                console.log('No tasks found.');
            } 
            else {
                tasks.forEach(task => {
                    console.log(`${task.id}. [${task.completed ? 'X' : ' '}] ${task.description}`);
                });
            }
            
            break;

        case '3':
            const completeId = parseInt(readlineSync.question('Task ID to complete: '), 10);

            await completeTask(completeId);
            break;

        case '4':
            const deleteId = parseInt(readlineSync.question('Task ID to delete: '), 10);

            await deleteTask(deleteId);
            break;

        case '5':
            return;

        default:
            console.log('Invalid option');
    }
  
    await taskMenu();
};
  


const categoryMenu = async () => {
    console.log('--- Category Management ---');
    console.log('1. Add Category');
    console.log('2. List Categories');
    console.log('3. Back to Main Menu');
  
    const option = readlineSync.question('Choose an option: ');
  
    switch (option) {
        case '1':
            const categoryName = readlineSync.question('Category name: ');
            const description = readlineSync.question('Category description (optional): ');
            
            await addCategory(categoryName, description);
            break;

        case '2':
            const categories = await listCategories();

            if (categories.length === 0) {
                console.log('No categories found.');
            } 
            else {
                categories.forEach(category => {
                    console.log(`${category.id}. ${category.name} - ${category.description || 'No description'}`);
                });
            }
            
            break;

        case '3':
            return;

        default:
            console.log('Invalid option');
    }
  
    await categoryMenu();
};


const userMenu = async () => {
    console.log('--- User Management ---');
    console.log('1. Add User');
    console.log('2. List Users');
    console.log('3. Back to Main Menu');
  
    const option = readlineSync.question('Choose an option: ');
  
    switch (option) {
        case '1':
            const name = readlineSync.question('User name: ');
            const email = readlineSync.question('User email: ');

            await addUser(name, email);
            break;

        case '2':
            const users = await listUsers();
            
            if (users.length === 0) {
                console.log('No users found.');
            } 
            else {
                users.forEach(user => {
                    console.log(`${user.id}. ${user.name} (${user.email})`);
                });
            }
            break;

        case '3':
            return;

        default:
            console.log('Invalid option');
        }

    await userMenu();
};



const mainMenu = async () => {
    console.log('--- To-do Menu ---');
    console.log('1. Manage Tasks');
    console.log('2. Manage Users');
    console.log('3. Manage Categories');
    console.log('4. Exit');

    const option = readlineSync.question('Choose an option: ');

    switch (option) {
        case '1':
            await taskMenu();
            break;

        case '2':
            await userMenu();
            break;

        case '3':
            await categoryMenu();
            break;

        case '4':
            console.log('Exiting...');
            process.exit(0);

        default:
            console.log('Invalid option');
    }

    await mainMenu();
}



mainMenu();