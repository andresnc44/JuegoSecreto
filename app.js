//esta variable se usa para almacenar el valor devuelto por la función
//no la función en sí misma para poderla utilizar en cualquier
//parte del código si la necesitamos.
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);
//Esta función asigna el texto a cualquiera de las etiquetas
//que queramos (elemento: la etiqueta que queremos usar, 
//texto: el texto que queremos mostrar)
function asignarTextoElemento(elemento, texto){
    //querySelector: método que permite 
    //acceder a cada uno de las etiquetas del HTML
    let elementoHTML = document.querySelector(elemento);
    //innerHTML: nos permite establecer un título
    //dentro del elemento-etiqueta <h1> o cualquier etiqueta que sea
    elementoHTML.innerHTML = texto;
    //return: se usa con frecuencia para especificar un valor
    //que la función debe devolver.
    return;
}

function verificarIntento(){
    //getElementById: se usa para obtener el ID desde el HTML y acceder a él
    //value: obtener el valor
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // ===: tiene qué ser igual en valor e igual en tipo de dato
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        //removeAttribute(): se quita el atributo que queramos, siempre debe ir con ''
        document.getElementById('reiniciar').removeAttribute('disabled');
        
        //el usuario no acertó
    } else if(numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El número secreto es menor');
    } else {
        asignarTextoElemento('p','El número secreto es mayor');
    }
    intentos++;
    //llamando la función 
    limpiarCaja();
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            //cuando el número ya existe en la lista
            //entra a la recursividad
            //la función que está ahí, se llama a sí misma
            return generarNumeroSecreto();
        } else {
            //Se guarda en la lista para que no vuelva a salir
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    //Si el número generado está incluido en la lista
    
}

function limpiarCaja() {
    // #: reemplaza el getElementById usando querySelector, forma corta: el value seguido del querySelector
    let valorCaja = document.querySelector('#valorUsuario').value = '';
    
    //forma larga:valorCaja.value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();    
    //Indicar mensaje de intervalo de número
    //Generar el número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    //setAttribute: modifica un elemento pero colocándole algún valor, en este caso "true"
    //es para activar el que quede deshabilitado
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

//llamando la función
condicionesIniciales();