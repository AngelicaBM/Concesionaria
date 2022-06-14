let tareas = require('./arrayTareas')
// PROBANDO

for (let i = 0;  i < tareas.length; i++) {
    console.log((i + 1) +'. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
} 