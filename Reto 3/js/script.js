// //JS objetos

// /*
// Autor: Armando Ramos
// Versión: 1.0
// */

// Crearemos una superclase llamada Electrodoméstico con las siguientes
// características:

// • Sus atributos son precio base, color, consumo energético (letras entre A y F) y
// peso. Indica que se podrán heredar.

// • Por defecto, el color será blanco, el consumo energético será F, el precio Base es
// de 100 € y el peso de 5 kg. Usa constantes para ello.

// • Los colores disponibles son blanco, negro, rojo, azul y gris. No importa si el
// nombre esta en mayúsculas o en minúsculas.

// Los métodos que implementara serán:

// • Métodos get de todos los atributos.

// • comprobarConsumoEnergetico(char letra): comprueba que la letra es correcta,
// sino es correcta usara la letra por defecto. Se invocara al crear el objeto y no será
// visible.

// • comprobarColor(String color): comprueba que el color es correcto, sino lo es
// usa el color por defecto. Se invocara al crear el objeto y no será visible.

// • precioFinal(): según el consumo energético, aumentara su precio, y según su
// tamaño, también.

// Esta es la lista de precios:












// Crearemos una subclase llamada Lavadora con las siguientes características:

// • Su atributo es carga, además de los atributos heredados.

// • Por defecto, la carga es de 5 kg. Usa una constante para ello.

// Recuerda que debes llamar al constructor de la clase padre.

// Los métodos que se implementara serán:

// • Método get de carga.

// • precioFinal():, si tiene una carga mayor de 30 kg, aumentara el precio 50 €, sino
// es así no se incrementara el precio. Llama al método padre y añade el código
// necesario. Recuerda que las condiciones que hemos visto en la clase
// Electrodomestico también deben afectar al precio.

// Crearemos una subclase llamada Televisión con las siguientes características:

// • Sus atributos son resolución (en pulgadas) y 4K(booleano), además de los atributos
// heredados.

// • Por defecto, la resolución será de 20 pulgadas y el 4k será false.

// Recuerda que debes llamar al constructor de la clase padre.

// Los métodos que se implementara serán:

// • Método get de resolución y atributo de 4K.

// • precioFinal(): si tiene una resolución mayor de 40 pulgadas, se incrementara el
// precio un 30% y si tiene 4k incorporado, aumentara 50 €. Recuerda que las
// condiciones que hemos visto en la clase Electrodoméstico también deben afectar al
// precio.

// Ahora crea una clase mainApp que realice lo siguiente:

// • Crea un array de Electrodomésticos de 10 posiciones.

// • Asigna a cada posición un objeto de las clases anteriores con los valores que desees.

// • Ahora, recorre este array y ejecuta el método precioFinal().

// • Deberás mostrar el precio de cada clase, es decir, el precio de todas las televisiones
// por un lado, el de las lavadoras por otro y la suma de los Electrodomésticos (puedes
// crear objetos Electrodoméstico, pero recuerda que Televisión y Lavadora también son
// electrodomésticos). Por ejemplo, si tenemos un Electrodoméstico con un precio final
// de 300, una lavadora de 200 y una televisión de 500, el resultado final será de 1000
// (300+200+500) para electrodomésticos, 200 para lavadora y 500 para televisión.


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// DECLARO VARIABLES

//CONTROLA SI LAS LETRAS DE CONSUMO ENERGETICO SE INTRODUCEN CORRECTAMENTE
let letras = ["A", "B", "C", "D", "E", "F"];

//CONTROLA SI LOS COLORES SE INTRODUCEN CORRECTAMENTE
let colores = ["blanco", "negro", "rojo", "azul", "gris"];

//TRADUCTOR PARA SABER QUE PRECIO TIENE EL ELECTRODOMESTICO EN FUNCION DE SU CONSUMO ENERGÉTICO
let precios = {
    "A": 100,
    "B": 80,
    "C": 60,
    "D": 50,
    "E": 30,
    "F": 10
}

//AQUÍ VAMOS GUARDANDO LOS PRECIOS FINALES DE CADA ELECTRODOMESTICO
let precioElectrodomesticos = 0;
let precioLavadoras = 0;
let precioTelevisiones = 0;
let precioArticulo = 0;

//AQUÍ GUARDAMOS LA CONSTANTE CARGA PARA LAS LAVADORAS
const carga = 5;

//AQUÍ CREAMOS EL ARRAY DONDE GUARDAREMOS CADA OBJETO QUE CREEMOS
let array = [{},{},{},{},{},{},{},{},{},{}];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// SUPERCLASE ELECTRODOMESTICO
class Electrodomestico {

    constructor(){
        this.color = "blanco",
        this.precio_base = 100,
        this.consumo_energetico = "F",
        this.peso = 5
    }

    getPrecioBase(precio){
        this.precio_base = precio
    }

    getColor(color){
        this.color = color;
    }

    getConsumoEnergetico(consumo){
        this.consumo_energetico = consumo;
    }

    getPeso(peso){
        this.peso = peso;
    }

    comprobarConsumoEnergetico(){
        let letraCorrecta = false;
        for (let i = 0; i < letras.length; i++) {
            if (letras[i] == this.consumo_energetico  && !letraCorrecta) {
                this.consumo_energetico = letras[i];
                letraCorrecta = true;
            }            
        }
        if (!letraCorrecta) {
            this.consumo_energetico = "F";                
        }
    }

    comprobarColor(){
        let colorCorrecto = false;
        for (let i = 0; i < colores.length; i++) {
            if (colores[i] == this.color.toLowerCase()  && !colorCorrecto) {
                this.color = colores[i];
                colorCorrecto = true;
            }            
        }
        if (!colorCorrecto) {
            this.color = "blanco";                
        }
    }

    precioFinal(){
        precioArticulo = this.precio_base;
        let consumo = this.consumo_energetico;
        precioArticulo += precios[consumo];
        let peso = this.peso;
        if (peso < 20 ) {
            precioArticulo += 10;
        }
        if (peso >= 20 && peso < 50) {
            precioArticulo +- 50;
        }
        if (peso >= 50 && peso < 80) {
            precioArticulo += 80;
        }
        if (peso >= 80) {
            precioArticulo += 100
        }
        precioElectrodomesticos += precioArticulo;
    }

}

//CLASE LAVADORA
class Lavadora extends Electrodomestico{

    constructor(){
        super(),
        this.carga = carga;
    }

    getCarga(carga){
        this.carga = carga;
    }
    precioFinal(){
        super.precioFinal();
        let precioElectrodomesticoExtra = 0;
        if (this.carga > 30) {
            precioArticulo += 50;
            precioElectrodomesticoExtra += 50;
        }
        console.log("El precio de esta lavadora es " + precioArticulo);
        precioLavadoras += precioArticulo;
        precioElectrodomesticos += precioElectrodomesticoExtra;
    }
}

//CLASE TELEVISION
class Television extends Electrodomestico{

    constructor(){
        super(),
        this.resolucion = 20,
        this.cuatroK = false
    }

    getResolucion(resolucion){
        this.resolucion = resolucion;
    }
    getCuatroK(cuatroK){
        this.cuatroK = cuatroK;
        }

    precioFinal(){
        super.precioFinal();
        let precioElectrodomesticoExtra = 0;
        if (this.resolucion > 40) {
            let treintaPorcentaje = precioArticulo * 0.3;
            precioArticulo += treintaPorcentaje; //NO SE HACE EL CALCULO SOBRE EL PRECIO TOTAL (NO SE TIENE EN CUENTA EL POSIBLE AUMENTO DE 50 EUROS POR EL 4K (ASÍ SE INDICA EN EL EJERCICIO)
            precioElectrodomesticoExtra += treintaPorcentaje;
        }
        if (this.cuatroK) {
            precioArticulo += 50;
            precioElectrodomesticoExtra += 50;
        }
        console.log("El precio de esta televisión es " + precioArticulo);
        precioTelevisiones += precioArticulo;
        precioElectrodomesticos += precioElectrodomesticoExtra;
    }
}

//CLASE MAINAPP
class mainApp{
    
    static crearArray () {
        let tiposObjetos = ["Electrodomestico", "Lavadora", "Televisión"];
        //CREAMOS UN GENERADOR ALEATORIO DE OBJETOS Y LOS INTRODUCIMOS EN EL ARRAY DE OBJETOS
        for (let i = 0; i < array.length; i++) {
            let tipo = tiposObjetos[parseInt(Math.random() * (3-0))];
            switch (tipo) {
                case "Electrodomestico":
                    let telei = new Electrodomestico();
                    array[i] = telei;
                    break;
                case "Lavadora":
                    array[i] = (new Lavadora());
                    break;
                case "Televisión":
                    array[i] = (new Television());
                    break;
            
                default:
                    console.log("Algo salió mal... Revisa el código");
                    break;
            };
        };
        //CREAMOS UN GENERADOR ALEATORIO DE PROPIEDADES PARA CADA OBJETO
        for (let i = 0; i < array.length; i++) {

            //AÑADIMOS COLOR ALEATORIO A LOS ELECTRODOMESTICOS Y COMPROBAMOS SI ESTÁ INTRODUCIDO CORRECTAMENTE  
            let color = colores[parseInt(Math.random() * (5-0))];
            array[i].getColor(color);
            array[i].comprobarColor();

            //AÑADIMOS CONSUMO ENERGÉTICO ALEATORIO A LOS ELECTRODOMESTICOS Y COMPROBAMOS SI ESTÁ INTRODUCIDO CORRECTAMENTE
            let consumoEnergetico = letras[parseInt(Math.random() * (6-0))];
            array[i].getConsumoEnergetico(consumoEnergetico);
            array[i].comprobarConsumoEnergetico();

            //AÑADIMOS PESO ALEATORIO A LOS ELECTRODOMESTICOS Y COMPROBAMOS SI ESTÁ INTRODUCIDO CORRECTAMENTE
            let pesoElectrodomestico = parseInt(parseInt(Math.random() * (61-19)+ 19));
            array[i].getPeso(pesoElectrodomestico);

            //AÑADIMOS CARACTERÍSTICAS ALEATORIAS A LAS LAVADORAS Y LAS TELEVISIONES
            let tamañoObjeto = Object.keys(array[i]).length;
            switch (tamañoObjeto) {
                case 4:
                    break;
                case 5:
                    let cargaAleatoria = parseInt(parseInt(Math.random() * (51-10)+ 10));
                    array[i].getCarga(cargaAleatoria);
                    break;
                case 6:
                    let resolucionAleatoria = parseInt(parseInt(Math.random() * (61-20)+ 20));
                    array[i].getResolucion(resolucionAleatoria);
                    let cuatroKAleatorio = parseInt(parseInt(Math.random() * (2-0)));
                    if (cuatroKAleatorio) {
                        array[i].getCuatroK(true);
                    }else{
                        array[i].getCuatroK(false);
                    }
                    break;
            
                default:
                    console.log("Algo salió mal... Revisa el código");
                    break;
            };
        };
    };

    static mostrarElectrodomesticos(){
        let mostrarLista = document.getElementById("mostrar-lista");
        mostrarLista.style.display = "none";
        let lista = document.getElementById("lista-electrodomesticos");
        let precios = document.getElementById("precios");
        lista.innerHTML = "";
        precioElectrodomesticos = 0;
        precioLavadoras = 0;
        precioTelevisiones = 0;
        precioArticulo = 0;
        for (let i = 0; i < array.length; i++) {
            switch (Object.keys(array[i]).length) {
                case 4:
                    array[i].precioFinal()
                    lista.innerHTML = lista.innerHTML + `<div class="articulo"><h2>Electrodoméstico</h2><p>Precio Base: ${array[i].precio_base}€</p><p>Consumo Energético: "${array[i].consumo_energetico}"</p><p>Peso: ${array[i].peso}Kgs<p/><p>Color: ${array[i].color}</p><p><span>Precio Total</span>: ${precioArticulo}</p></div>`
                    break;
                case 5:
                    array[i].precioFinal()
                    lista.innerHTML = lista.innerHTML + `<div class="articulo"><h2>Lavadora</h2><p>Precio Base: ${array[i].precio_base}€</p><p>Consumo Energético: "${array[i].consumo_energetico}"</p><p>Peso: ${array[i].peso}Kgs<p/><p>Carga Máxima: ${array[i].carga} Kgs</p><p>Color: ${array[i].color}</p><p><span>Precio Total</span>: ${precioArticulo}</p></div>`
                    break;
                case 6:
                    array[i].precioFinal()
                    lista.innerHTML = lista.innerHTML + `<div class="articulo"><h2>Television</h2><p>Precio Base: ${array[i].precio_base}€</p><p>Consumo Energético: "${array[i].consumo_energetico}"</p><p>Peso: ${array[i].peso}Kgs<p/><p>Resolución: ${array[i].resolucion} pulgadas</p><p>4K: ${(array[i].cuatroK) ? "Si" : "No"}</p><p>Color: ${array[i].color}</p><p><span>Precio Total</span>: ${precioArticulo}</p></div>`
                    break;
            
                default:
                    console.log("Algo salió mal... Revisa el código");
                    break;
            };
        }
        precios.innerHTML = `<div>El precio de las lavadoras es de ${precioLavadoras}€</div><div>El precio de las televisiones es de ${precioTelevisiones}€</div><div>El precio de todos los electrodomésticos es de ${precioElectrodomesticos}€</div>`
    }
    
}

mainApp.crearArray();

