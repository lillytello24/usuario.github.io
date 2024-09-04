//Inicio de un arreglo para el almacen de tareas

let tareas=[];
// funcion para mostrar nuestro menu

function mostrarMenu(){
    return parseInt(prompt(`
        "opciones disponibles"
        1. Agregar tarea
        2, ver todas las tareas
        3. Marcar mi tarea como completada
        4. salir
        "Elige una opcion:"`));
};
//Funcion para agregar tarea
function agregarTarea(){
    let nombre = prompt("Ingresa el nombre de la tarea");
    if(nombre){
        let tarea ={
            nombre:nombre, 
            completada:false

        };
        tareas.push(tarea);
        alert("Tarea agregada de forma correcta");
    }
        else{
            alert(("El nombre de la tarea no puede estar vacio."))
    }
}

//Funcion para ver todas las tareas
function verTareas(){
    if(tareas.length === 0){
    alert("No tenemos tareas asignadas"); 
    }
    else{
        let mensaje = "Lista de tareas \n"
        tareas.forEach((tarea,index)=>{
            mensaje+=`${index+1}.-${tarea.nombre} [${tarea.completada?"completada": "pendiente"}]`;
        });
        alert(mensaje);
    }
}

//Funcion para manejae wl flujon del programa 

function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 2:
                marcarMisTareas();
                break;
            case 4:
                alert("saliendo del programa...");
                continuar = false;
                break ;
            default(" opcion no valida. Intenta nuevamente");


                

        }
    }
    alert("Programa finalizado");
}
iniciarPrograma();