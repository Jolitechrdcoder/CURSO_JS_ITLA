//==================Practica 1 Aula================================
// n1 = 13
// n2 = 15
// n3 = 90

// if (n3 > n2 && n2 > n1 && n2 < n3) {
//     console.log("el mayor es n3 con :",n3);  
// }
// else if(n2 > n1 && n2 > n1 && n3 > n2 ){
//     console.log("el mayor es n1 con :",n1);
// }

// else if(n1 < n2 && n2 > n1 && n3 > n2 ){
//     console.log("el mayor es n2 con :",n2);
// }
// =========================== END =================================




//====================Practica 2 Aula===============================

// n1 = 11;
// n2 = 29;

// if( n1 < n2 && n2 > n1){
//     console.log(" el menor de ambos es N2 con un valor de:",n1);
// }
// else{
//     console.log(" N2 es mayor que N1");
// }

// =========================== END =================================


// ====================== Manejo del Dom ===========================
//Clase 9/11/2024.

// document.addEventListener('DOMContentLoaded',() => {

//     let variable = document.getElementById("hdi");

//     variable.innerText = " Pero lo hice ";
// });

// =========================== END =================================










// ==================== Tarea 2 ejercicios js ======================


// 1.Número positivo o negativo
// Pide al usuario que ingrese un número. Usa una condicional if para verificar si el 
// número es positivo, negativo o cero, y muestra un mensaje adecuado.



// let numero_usuario = prompt("Ingrese un Numero:");

// if(numero_usuario > 0) console.log(`El Numero: ${numero_usuario} es Positivo`);

// else if (numero_usuario < 0) console.log(`El Numero: ${numero_usuario} es Negativo`);

// else console.log(`El Numero: ${numero_usuario} es 0`);




//==================================== 2 ===========================================

// 2. Mayor de edad
// Pide al usuario que ingrese su edad. Usa if para determinar si la persona es mayor 
// de edad (18 años o más) y muestra un mensaje que indique si es o no mayor de 
// edad.


// let edad = prompt("Ingresa tu edad:");

// if( edad >= 18) console.log("Usted es mayor de edad con:",edad);
// else console.log("Usted es menor de edad con:",edad);

//===================================== 3 ==========================================

// 3. Número par o impar
// Solicita al usuario un número y utiliza if para verificar si el número es par o impar. 
// Muestra un mensaje indicando el resultado.



// let num = prompt("Ingrese un Numero:");

// if(num %2 === 0) console.log(`El Numero: ${num} es Par`);
// else console.log(`El Numero: ${num} es Impar`);


//==================================== 4 ===========================================

// 4. Calificación aprobatoria
// Pide una calificación (número del 0 al 100) e indica si es una calificación 
// aprobatoria (60 o más) o reprobatoria.

// let calificacion = prompt("Ingrese Calificacion de 0 a 100:");

// if(calificacion > 60) console.log(`Usted Aprobo con una calificacion de ${calificacion}`);
// else console.log(`Usted Reprobo con una calificacion de ${calificacion}`);


//==================================== 5 ===========================================
// 5. Día de la semana
// Solicita un número del 1 al 7 y usa if para mostrar el día de la semana 
// correspondiente (por ejemplo, 1 es lunes, 2 es martes, etc.).


// let n = prompt("Ingrese un numero");

// if ( n == 1) console.log(" 1 corresponde a Lunes");
// else if ( n == 2) console.log(" 2 corresponde a Martes");
// else if ( n == 3) console.log(" 3 corresponde a Miercoles");
// else if ( n == 4) console.log(" 4 corresponde a Mueves");
// else if ( n == 5) console.log(" 5 corresponde a Viernes");
// else if ( n == 6) console.log(" 6 corresponde a Sabado");
// else if ( n == 7) console.log(" 7 corresponde a Domingo");
// else console.log("!ingrese un numero valido del 1 al 7!");    

//==================================== 6 ===========================================
// 6. Mayor de dos números
// Pide al usuario que ingrese dos números y usa una condicional if para determinar 
// cuál de los dos números es mayor.


// let n1 = prompt("Ingrese n1:");
// let n2 = prompt("Ingrese n2:");

// if(n1 > n2)console.log(`N1=${n1} es mayor que N2=${n2}`);   
// else if(n2 > n1)console.log(`N2=${n2} es mayor que N1=${n1}`);     
// else console.log("Los numero son iguale"); 
    
//==================================== 7 ===========================================
// 7. Hora del día Solicita una hora (número del 0 al 24) e indica si es de mañana (0-11), tarde (12-18) 
// o noche (19-24).

// let hour = prompt("Ingrese la hora en formato 24");

// if( hour >= 0 && hour <= 11) console.log("horario actual Mañana");
// else if(hour >= 12 && hour <= 18) console.log("horario actual Tarde");
// else if(hour >= 19 && hour <= 24) console.log("horario actual noche");


//==================================== 8 ===========================================
 


// let rango = prompt("Inserte un numero");


// if (rango >=1 && rango <=100) console.log(`El numero ${rango} se encuentra dentro del rango establecido de 1 - 100`);
// else console.log(`El numero ${rango} se encuentra fuera  del rango establecido de 1 - 100`);

//==================================== 9 ===========================================
// 9. Meses del año
// Pide al usuario que ingrese un número del 1 al 12 y utiliza if para mostrar el nombre 
// del mes correspondiente (1 es enero, 2 es febrero, etc.).

// const meses = [
//     "Enero",
//      "Febrero",
//       "Marzo",
//        "Abril",
//     "Mayo",
//      "Junio",
//       "Julio",
//        "Agosto",
//     "Septiembre",
//      "Octubre",
//       "Noviembre",
//        "Diciembre"
// ];

// let n = prompt("Ingrese un numero de mes 1-12:");
// if(n >= 1 && n <= 12) console.log(`${n} corresponde a ${meses[n-1]}`);   
// else console.log("mes invalido");
    
//==================================== 10 ========================================
// 10. Multiplicación de dos números solo si es mayor a 100
// Solicita al usuario dos números. Si el producto de los dos números es mayor a 100, 
// muestra el resultado; de lo contrario, muestra un mensaje diciendo que el producto 
// es menor o igual a 100


// let n1 = prompt("Ingrese n1");
// let n2 = prompt("Ingrese n2");
// let producto = n1 * n2;

// if(producto > 100) console.log(`El producto es ${producto} y es mayor a 100`);
// else console.log("El producto es menor o igual a 100");   
// =========================== END =================================
