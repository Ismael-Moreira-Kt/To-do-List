import readlineSync from 'readline-sync';
import { addTask, listTasks, completeTask, deleteTask } from './task';
import { addUser, listUsers } from './user';
import { addCategory, listCategories } from './category';



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
}



mainMenu();