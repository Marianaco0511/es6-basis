//traer la dependencia del componente sumar
import {sumar, restar} from './sumar.js'
import materias from './materias.js'

/*
//desestructuraciín:

 let {first_name , last_name , id}  = estudiantes
 */

/*
//let: variables
let a = 10

//cconst: constantes
const b = 29

console.log(`suma de a+b: ${restar (a , b)}`)*/


//1. Recordatorio de arreglo: forEach
materias.forEach((materia) => {

 if(materia.profesor === 'Cristian Buitrago'){
 console.log(`materia: ${materia.name}`)
 console.log(`notas: ${materia.notas}`)
 }
});

//2. convertir un arreglo de profesores 
// metodo map()
let profesores = materias.map(function(materia){
    return materia.profesor
})

//3. agregar una materia al arreglo de materia
// push()
materias.push({
    id: 5,
    name: "cultura física",
    profesor: "Luis Baquero",
    notas: [
        2,
        3.5
    ]
  }
)

//4. busqueda en arreglos: 
//find
const PHP = materias.find(function(materia){
    return materia.profesor == 'Cristian Buitrago'
})

console.log(PHP)

/*
console.log(`Nombre estudiante ${ first_name}`)
console.log(`apellido estudiante ${ last_name}`)
console.log(`id estudiante ${ id}`)
*/