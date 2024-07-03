/*
1. DISCOTECA

Una discoteca desea llevar el control de sus ganancias. Para esto conoce de cada rumbero: 
su cédula, nombre, edad y sexo. Cada entrada tiene un costo dependiendo del sexo, si es chico
vale 25$ y si es chica cuesta en 25% del valor del chico. Por Noche, la discoteca desea saber:
a) Pago que realiza cada rumbero b) Total Ganado, c) Porcentaje de rumberas mayores a 21
años, d) Cual sexo asistió más a la discoteca.

La discoteca suministra la siguiente información demostrativa, para 4 rumberos: 
(cedula, nombre, edad, sexo) (134, Luis, 23, M) (154, Ana, 22, F) (324, José, 18, M)
(286, Carmen, 19, F), según lo cual la salida requerida presenta el siguiente formato:

Pago que realiza Luis 25$
Pago que realiza Ana 6.25$
Pago que realiza José 25$
Pago que realiza Carmen 6.25$
Total Ganado 62.5$
Porcentaje de rumberas mayores a 21 años: 50%
*/

import Cl_Rumbera from "./Cl_Rumbera.js";
import Cl_Discoteca from "./Cl_Discoteca.js";

let Rumbero1=new Cl_Rumbera("Luis", 134, 23,"M");
let Rumbero2=new Cl_Rumbera("Ana", 154, 22, "F");
let Rumbero3=new Cl_Rumbera("José", 324, 18, "M");
let Rumbero4=new Cl_Rumbera("Carmen", 286, 19, "F");

let Discoteca=new Cl_Discoteca();

Discoteca.procesarRumbera(Rumbero1);
Discoteca.procesarRumbera(Rumbero2);
Discoteca.procesarRumbera(Rumbero3);
Discoteca.procesarRumbera(Rumbero4);

let salida = document.getElementById("Salida");
salida.innerHTML= "Resultado:"
salida.innerHTML+= "<br> Pago que realiza Luis: " +Rumbero1.calcularPago() +"$";
salida.innerHTML+= "<br> Pago que realiza Ana: " +Rumbero2.calcularPago() +"$";
salida.innerHTML+= "<br> Pago que realiza José: " +Rumbero3.calcularPago() +"$";
salida.innerHTML+= "<br> Pago que realiza Carmen: " +Rumbero4.calcularPago() +"$";
salida.innerHTML+= "<br> <br>";
salida.innerHTML+= "<br> Total Ganado: " +Discoteca.devolverAcumTotal() +"$";
salida.innerHTML+= "<br> Porcentaje de rumberas mayores a 21 años: " +Discoteca.calcularPorcentaje() +"%";
salida.innerHTML+= "<br> El sexo que más asistió a la discoteca es: " +Discoteca.devolverAuxNombre();