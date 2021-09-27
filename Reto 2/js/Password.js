//JS objetos

/*
Autor: Armando Ramos
Versión: 1.0
*/

// Haz una clase llamada Password que siga las siguientes condiciones:

// • Que tenga los atributos longitud y contraseña . Por defecto, la longitud será de 8.

// • Los constructores serán los siguiente:
// Incluye el método que genere una contraseña aleatoria con esa longitud.

class Password {

    constructor(){
        this.longitud = 8,
        this.contraseña = 0
    }

    nuevaContraseña(){
        let password = [];
        for (let i = 0; i < this.longitud; i++) { 
            password.push(parseInt(Math.random()*10));  
        }
        password = password.join("");
        this.contraseña = password;
    }

}

var password1 = new Password();
password1.nuevaContraseña();
console.log(password1);
