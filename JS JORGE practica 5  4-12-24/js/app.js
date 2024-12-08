

//codigo calculadora PRACTICA 4
function inicial() {
    // variables para manejar el  DOM
    const resultado = document.getElementById("resultado");
     const reset = document.getElementById("reset");
    const suma = document.getElementById("suma");
     const resta = document.getElementById("resta");
     const multiplicacion = document.getElementById("multiplicacion");
     const division = document.getElementById("division");
const igual = document.getElementById("igual");
    const uno = document.getElementById("uno");
    const dos = document.getElementById("dos");
     const tres = document.getElementById("tres");
    const cuatro = document.getElementById("cuatro");
    const cinco = document.getElementById("cinco");
     const seis = document.getElementById("seis");
    const siete = document.getElementById("siete");
    const ocho = document.getElementById("ocho");
     const nueve = document.getElementById("nueve");
    const cero = document.getElementById("cero");

    // operasdores para los calculos
    let operandoA = 0;
     let operandoB = 0;
    let operacion = '';

    // capturando eventos
    uno.onclick = () => agregarNumero("1");
    dos.onclick = () => agregarNumero("2");
     tres.onclick = () => agregarNumero("3");
    cuatro.onclick = () => agregarNumero("4");
    cinco.onclick = () => agregarNumero("5");
     seis.onclick = () => agregarNumero("6");
    siete.onclick = () => agregarNumero("7");
    ocho.onclick = () => agregarNumero("8");
    nueve.onclick = () => agregarNumero("9");
    cero.onclick = () => agregarNumero("0");

    reset.onclick = () => resetear();
    suma.onclick = () => {
        operandoA = parseFloat(resultado.textContent);
        operacion = '+';
        limpiar();
    };




    resta.onclick = () => {
        operandoA = parseFloat(resultado.textContent);
        operacion = '-';
        limpiar();
    };




    multiplicacion.onclick = () => {
        operandoA = parseFloat(resultado.textContent);
        operacion = '*';
        limpiar();
    };



    division.onclick = () => {
        operandoA = parseFloat(resultado.textContent);
        operacion = '/';
        limpiar();
    };


    igual.onclick = () => {
        operandoB = parseFloat(resultado.textContent);
        resolver();
    };

    // funciones para agregar limpiar etc
    function agregarNumero(num) {
        resultado.textContent += num;
    }


    function limpiar() {
        resultado.textContent = "";
    }

    function resetear() {
        resultado.textContent = "";
        operandoA = 0;
        operandoB = 0;
        operacion = '';
    }



    function resolver() {
        let res = 0;
        switch (operacion) {
            case "+":
                res = operandoA + operandoB;
                break;
            case "-":
                res = operandoA - operandoB;
                break;
            case "*":
                res = operandoA * operandoB;
                break;
            case "/":
                res = operandoB !== 0 ? operandoA / operandoB : "Error";
                break;
        }

        resetear();
        resultado.textContent = res;
    }
}



//codigo consumo de APIS PRACTICA 5
//API REST A CONSUMIR: "https://dog.ceo/api/breeds/image/random" 

function Fetch() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            const fetchResult = document.getElementById('fetchResult');
            fetchResult.innerHTML = `<img src="${data.message}" alt="Random Dog">`;
        })
        .catch(error => console.error('Error:', error));
}

function XMl() {
    let xm = new XMLHttpRequest();
    xm.open("get", "https://dog.ceo/api/breeds/image/random", true);
    xm.onreadystatechange = function() {
        if (xm.readyState === 4 && xm.status === 200) {
            const data = JSON.parse(xm.responseText);
            const xmlResult = document.getElementById('xmlResult');
            xmlResult.innerHTML = `<img src="${data.message}" alt="Random Dog">`;
        }
    };
    xm.send();
}