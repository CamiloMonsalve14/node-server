
let readlineSync = require('readline-sync');

let listaDeTarea = [];

function agregarTarea () {
    let indicador = readlineSync.question("ingerese el indicador de la tarea")
    let description = readlineSync.question("ingerese la descripcion de la tarea")

    listaDeTarea.push ( {
        indicador,
        description,
        completed: false
    })
    console.log ("Tarea agregada exitosamente");
}

function eliminarTarea () {
    let indice = readlineSync.question ("Ingrese el indice de la tarea a eliminar")

        if (indice >=0 && indice < listaDeTarea.length) {
            listaDeTarea.splice(indice, 1)
            console.log("Tare eliminada");
        } else
            console.log ("Indice no existe")
}

function completarTarea () {
    let indice = readlineSync.question ("Ingrese el indice de la tarea a completar")

        if (indice >=0 && indice < listaDeTarea.length) {
            listaDeTarea [indice].completed = true
            console.log("Tarea completada");
        } else
            console.log ("Indice no existe")
}

function imprimirlistaDeTarea() {
    console.log('Lista de tareas:');
    tareas.forEach((listaDeTarea, indice) => {
        let estado = listaDeTarea.completed ? "[✓]" : "[]"
    console.log(`${indice}. ${estado} ${listaDeTarea.indicador}: ${listaDeTarea.descripcion}`);
    });
}

function correrPrograma () {
    while (true) {
        console.log ("Elige una Opcion")
        console.log (" ")
        console.log ("1. Crea una tarea")
        console.log ("2. Elimina una tarea")
        console.log ("3. Completar una tarea")
        console.log ("4. Imprimir lista de tareas")
        console.log ("5. Salir")

        const option = readlineSync.question ("Ingrese una opcion: ")

        switch (option) {
            case "1":
                agregarTarea();
                break;
            case "2":
                eliminarTarea();
                break;
            case "3":
                completarTarea();
                    break;
            case "4":
                imprimirlistaDeTarea();
                    break;
            case "5":
                return;
                default:
                    console.log("Opcion invalida!")     
        }

    }
}

correrPrograma();