let archivoTareas = require('./funcionesDeTareas');
//let tareas = require('./arrayTareas')
//Si desea investigar un poco más sobre este módulo nativo de NodeJs
//https://nodejs-es.github.io/api/process.html#process_es_process 

//for (let i = 0;  i < tareas.length; i++) {
 //   console.log((i + 1) +'. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
//}

let accion = process.argv[2];

switch(accion) {
    case 'listar':
        archivoTareas.listarTareas() 
        console.log("Sali")
        break;

    case 'crear':
        let tarea = {
            titulo: process.argv[3],
            estado: 'pendiente'
        };
        archivoTareas.guardarTarea(tarea);

    case "filtrar":
        let estado = process.argv[3];
        let tareasFiltradas = archivoTareas.filtrarPorEstado(estado);
        console.log('Tareas con estado: ' + estado);
        console.log('----------------------');
        tareasFiltradas.forEach((tarea,i) => {
            console.log((i+1) + ". "+tarea.titulo);
        })
        break;

    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;
}
