/** Se calcula el número factorial a partir de un número proporcionado por el/la usuario/a.
Mediante un bucle for se van multiplicando todos los números entre 1 y el 
número proporcionado*/

let numero = prompt("Escribe un número:", 0)
let solucion = 1
for (let i = 1; i <= numero; i++) { 
    solucion = solucion * i
}
alert(solucion)
