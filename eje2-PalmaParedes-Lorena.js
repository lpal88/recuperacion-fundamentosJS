/** Calcula la letra del dni a partir de un número proporcionado por el/la usuario/a*/

const LETRAS = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']
let numeroDni = prompt("Introduzca su numero de dni: ", 0)
let letraDni = ''
if (numeroDni < 0 || numeroDni > 99999999 || isNaN(numeroDni)) {
    alert("El número no es correcto")
} else {
    letraDni = LETRAS[numeroDni % 23] // calcula el índice en LETRAS
    alert(`El dni completo es: ${numeroDni}${letraDni}`)
}

