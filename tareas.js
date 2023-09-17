
// // Haz un script que permita crear una lista de tareas, cada tarea debe contener un indicador,
// descripción y estado (completada o no).

let readlineSync = require("readline-sync");

// Función para crear una tarea (retorna una promesa)
function createTask(task) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(task);
    }, 1000);
    });
}

function deleteTask(taskId) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Tarea con ID ${taskId} eliminada`);
    }, 800);
    });
}

function completeTask(taskId) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Tarea con ID ${taskId} completada`);
    }, 1200);
    });
}

async function mainAsync() {
    try {
    const newTask = await createTask({ id: 1, description: 'Nueva tarea' });
    console.log(newTask);

    const deletedTask = await deleteTask(1);
    console.log(deletedTask);

    const completedTask = await completeTask(1);
    console.log(completedTask);
    } catch (error) {
    console.error(error);
    }
}

mainAsync();

function mainThen() {
    createTask({ id: 2, description: 'Nueva tarea' })
    .then(newTask => {
        console.log(newTask);
        return deleteTask(2);
    })
    .then(deletedTask => {
        console.log(deletedTask);
        return completeTask(2);
    })
    .then(completedTask => {
        console.log(completedTask);
    })
    .catch(error => {
        console.error(error);
    });
} 

mainThen();
