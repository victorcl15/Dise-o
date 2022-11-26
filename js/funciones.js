
import { restaurantes } from './index.js';

document.getElementById("titulo").innerHTML = restaurantes[0].nombre;
document.getElementById("desb").innerHTML = restaurantes[0].descrip;

document.getElementById("titulo1").innerHTML = restaurantes[1].nombre;
document.getElementById("desb1").innerHTML = restaurantes[1].descrip;

document.getElementById("titulo2").innerHTML = restaurantes[2].nombre;
document.getElementById("desb2").innerHTML = restaurantes[2].descrip;

document.getElementById("titulo3").innerHTML = restaurantes[3].nombre;
document.getElementById("desb3").innerHTML = restaurantes[3].descrip;
