
import { restaurantes } from './index.js';


const boton = document.getElementById("boton");


/*
document.addEventListener("keyup", e=>{

    console.log(e.target.value);
    if(e.target.matches("#search")){
    document.querySelectorAll(".restaurant").forEach(comida => {
        comida.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ?comida.classList.remove("filtro"):comida.classList.add("filtro");

        
    })
    console.log(e.target.value);
    }

});
*/
boton.addEventListener("click", buscador);
/*
function reload(){
    location.reload();
}

*/
let verdadero = false;
let obtener2 = "";
function buscador(){
     
let obtener = document.getElementById('search').value;

if(obtener2!=obtener){
    
    if(verdadero==true){
        console.log("Primer IF");
    if(((restaurantes[0].nombre||restaurantes[1].nombre||restaurantes[2].nombre||restaurantes[3].nombre)==obtener) && (obtener2!=obtener)){
caja2.removeChild(button);
caja2.removeChild(desb);
caja2.removeChild(titulo);
cajaPL.removeChild(caja2);
cajaPL.removeChild(imagenPL);
conjunto.removeChild(cajaPL);
console.log("Segundo IF");        
verdadero=false;
        
    }else {
    caja2.removeChild(button);
caja2.removeChild(desb);
caja2.removeChild(titulo);
cajaPL.removeChild(caja2);
cajaPL.removeChild(imagenPL);
conjunto.removeChild(cajaPL);
console.log("Segundo IF");        
verdadero=false;
    }
};
    
};

if(restaurantes[0].nombre==obtener && obtener!=obtener2){
    
    
    const conjunto = document.getElementById('conjunto');
    const caja = document.createElement("div");
    caja.setAttribute("id","cajaPL");
    
    caja.setAttribute("class","card");
    
 caja.setAttribute("style","width: 25rem");
    conjunto.appendChild(caja);
    //document.getElementById("cajaPL").classList.add ("card");
    //document.getElementById("cajaPL").style.width = "25rem";
   
    const imagen = document.createElement("img");
    imagen.setAttribute("id", "imagenPL");
    imagen.setAttribute("src", "/img/restaurant1.jpg");
    imagen.setAttribute("class","card-img-top");
    
    caja.appendChild(imagen);
    //document.getElementById("imagenPL").classList.add ("card-img-top");
   
    const caja2 = document.createElement("div");
    caja2.setAttribute("id", "caja2");
    caja2.setAttribute("class","card-body");
    
    caja.appendChild(caja2);
    //document.getElementById("caja2").classList.add ("card-body");
   
    const titulo = document.createElement("h5");
    titulo.setAttribute("id","titulo");
    titulo.setAttribute("class","card-title restaurant");
   
    titulo.textContent = restaurantes[0].nombre;
    caja2.appendChild(titulo);
    //document.getElementById("titulo").classList.add ("card-title");
    //document.getElementById("button").innerHTML = restaurantes[0].nombre;
   
    const desb = document.createElement("p");
    desb.setAttribute("id","desb");
    desb.setAttribute("class","card-text");
   
    desb.textContent = restaurantes[0].descrip;
    caja2.appendChild(desb);
    //document.getElementById("desb").classList.add ("card-text");
   
   
    const button = document.createElement("a");
    button.setAttribute("id","button");
    button.setAttribute("href","#");
    button.setAttribute("class","btn btn-primary");
   
    button.textContent = "Go somewhere";
    caja2.appendChild(button);
    //document.getElementById("button").innerHTML = "Go somewhere";

    
    verdadero = true;

}
if(restaurantes[1].nombre==obtener && obtener!=obtener2){
    const conjunto = document.getElementById('conjunto');
 const caja = document.createElement("div");
 caja.setAttribute("id","cajaPL");
 caja.setAttribute("class","card");
 caja.setAttribute("style","width: 25rem");
 conjunto.appendChild(caja);
 //document.getElementById("cajaPL").classList.add ("card");
 //document.getElementById("cajaPL").style.width = "25rem";

 const imagen = document.createElement("img");
 imagen.setAttribute("id", "imagenPL");
 imagen.setAttribute("src", "/img/restaurant2.jpg");
 imagen.setAttribute("class","card-img-top");
 caja.appendChild(imagen);
 //document.getElementById("imagenPL").classList.add ("card-img-top");

 const caja2 = document.createElement("div");
 caja2.setAttribute("id", "caja2");
 caja2.setAttribute("class","card-body");
 caja.appendChild(caja2);
 //document.getElementById("caja2").classList.add ("card-body");

 const titulo = document.createElement("h5");
 titulo.setAttribute("id","titulo");
 titulo.setAttribute("class","card-title restaurant");
 titulo.textContent = restaurantes[1].nombre;
 caja2.appendChild(titulo);
 //document.getElementById("titulo").classList.add ("card-title");
 //document.getElementById("button").innerHTML = restaurantes[0].nombre;

 const desb = document.createElement("p");
 desb.setAttribute("id","desb");
 desb.setAttribute("class","card-text");
 desb.textContent = restaurantes[1].descrip;
 caja2.appendChild(desb);
 //document.getElementById("desb").classList.add ("card-text");


 const button = document.createElement("a");
 button.setAttribute("id","button");
 button.setAttribute("href","#");
 button.setAttribute("class","btn btn-primary");
 button.textContent = "Go somewhere";
 caja2.appendChild(button);
 //document.getElementById("button").innerHTML = "Go somewhere";
 verdadero = true;
}
if(restaurantes[2].nombre==obtener && obtener!=obtener2){
    const conjunto = document.getElementById('conjunto');
 const caja = document.createElement("div");
 caja.setAttribute("id","cajaPL");
 caja.setAttribute("class","card");
 caja.setAttribute("style","width: 25rem");
 conjunto.appendChild(caja);
 //document.getElementById("cajaPL").classList.add ("card");
 //document.getElementById("cajaPL").style.width = "25rem";

 const imagen = document.createElement("img");
 imagen.setAttribute("id", "imagenPL");
 imagen.setAttribute("src", "/img/restaurant3.jpg");
 imagen.setAttribute("class","card-img-top");
 caja.appendChild(imagen);
 //document.getElementById("imagenPL").classList.add ("card-img-top");

 const caja2 = document.createElement("div");
 caja2.setAttribute("id", "caja2");
 caja2.setAttribute("class","card-body");
 caja.appendChild(caja2);
 //document.getElementById("caja2").classList.add ("card-body");

 const titulo = document.createElement("h5");
 titulo.setAttribute("id","titulo");
 titulo.setAttribute("class","card-title restaurant");
 titulo.textContent = restaurantes[2].nombre;
 caja2.appendChild(titulo);
 //document.getElementById("titulo").classList.add ("card-title");
 //document.getElementById("button").innerHTML = restaurantes[0].nombre;

 const desb = document.createElement("p");
 desb.setAttribute("id","desb");
 desb.setAttribute("class","card-text");
 desb.textContent = restaurantes[2].descrip;
 caja2.appendChild(desb);
 //document.getElementById("desb").classList.add ("card-text");


 const button = document.createElement("a");
 button.setAttribute("id","button");
 button.setAttribute("href","#");
 button.setAttribute("class","btn btn-primary");
 button.textContent = "Go somewhere";
 caja2.appendChild(button);
 //document.getElementById("button").innerHTML = "Go somewhere";
 verdadero = true;
};
if(restaurantes[3].nombre==obtener && obtener!=obtener2){
    const conjunto = document.getElementById('conjunto');
 const caja = document.createElement("div");
 caja.setAttribute("id","cajaPL");
 caja.setAttribute("class","card");
 caja.setAttribute("style","width: 25rem");
 conjunto.appendChild(caja);
 //document.getElementById("cajaPL").classList.add ("card");
 //document.getElementById("cajaPL").style.width = "25rem";

 const imagen = document.createElement("img");
 imagen.setAttribute("id", "imagenPL");
 imagen.setAttribute("src", "/img/restaurant4.jpg");
 imagen.setAttribute("class","card-img-top");
 caja.appendChild(imagen);
 //document.getElementById("imagenPL").classList.add ("card-img-top");

 const caja2 = document.createElement("div");
 caja2.setAttribute("id", "caja2");
 caja2.setAttribute("class","card-body");
 caja.appendChild(caja2);
 //document.getElementById("caja2").classList.add ("card-body");

 const titulo = document.createElement("h5");
 titulo.setAttribute("id","titulo");
 titulo.setAttribute("class","card-title restaurant");
 titulo.textContent = restaurantes[3].nombre;
 caja2.appendChild(titulo);
 //document.getElementById("titulo").classList.add ("card-title");
 //document.getElementById("button").innerHTML = restaurantes[0].nombre;

 const desb = document.createElement("p");
 desb.setAttribute("id","desb");
 desb.setAttribute("class","card-text");
 desb.textContent = restaurantes[3].descrip;
 caja2.appendChild(desb);
 //document.getElementById("desb").classList.add ("card-text");


 const button = document.createElement("a");
 button.setAttribute("id","button");
 button.setAttribute("href","#");
 button.setAttribute("class","btn btn-primary");
 button.textContent = "Go somewhere";
 caja2.appendChild(button);
 //document.getElementById("button").innerHTML = "Go somewhere";
 verdadero = true;
}

 obtener2 = obtener;
 location.reload();

}

