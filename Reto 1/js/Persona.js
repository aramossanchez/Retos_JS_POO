//JS objetos

/*
Autor: Armando Ramos
Versión: 1.0
*/

// Haz una clase llamada Persona que siga las siguientes condiciones:

// • Sus atributos son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura.

// • Por defecto, todos los atributos menos el DNI serán valores por defecto según su tipo
// (0 números, cadena vacía para String, etc.). Sexo será hombre por defecto, usa una
// constante para ello.

// • Instancia al menos tres objetos.

const H = "hombre";
const M = "mujer";

class Persona {

    constructor(dni){
        this.nombre = "",
        this.edad = 0,
        this.dni = dni,
        this.sexo = H,
        this.peso = 0,
        this.altura = 0
    }

}

let persona1 = new Persona("456456456Q");
console.log(persona1);

let persona2 = new Persona("123123123A");
console.log(persona2);

let persona3 = new Persona("478547856M");
console.log(persona3);
