const fs = require('fs');

let archivoTareas = {
    
    archivo: 'tareas.json',

    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'))
    },

    listarTareas: function () {
        let tareas = this.leerArchivo()
        console.log('Listado de tareas');
        console.log('------------------');
     
        tareas.forEach((tarea,i)=>{ 
           console.log((i + 1) +'. Tarea: ' + tareas.titulo + ' - Estado: ' + tareas.estado);
        })
    },

    escribirJSON: function (arrayTareas){
        //convertir en JSON
        let arrayTareasJSON = JSON.stringify(arrayTareas)
        //sobreescribir: archivo original
        fs.writeFileSync(this.archivo, arrayTareasJSON)
        //es lo mismo: fs.writeFileSync('./tareas.json', arrayTareasJSON)
    },

    guardarTarea: function (tarea){
        let tareasActuales = this.leerArchivo()
        tareasActuales.push(tarea);
        this.escribirJSON(tareasActuales);
        console.log('Nueva tarea creada')
        console.log('----------------')
        console.log(tarea.titulo + " ->" + tarea.estado)
    },

    filtrarPorEstado : function (estado){
        let tareas = this.leerArchivo();
        let tareasFiltradas = tareas.filter (tareas => tareas.estado == estado);
        return tareasFiltradas
    }
}
module.exports = archivoTareas;