const restaurantes=[
    {
        nombre: "Pacifico mar",
        descrip: "Av. 85 Nro. 45 - 85 Barranquilla \n Deliciosa comida de mar"
    },
    {
        nombre: "Italiano 65",
        descrip: "Av 45 Nro 1 - 85 Medellín \n Deliciosa comida italiana"
    },
    {
        nombre: "Fritos y Más",
        descrip: "Calle 45 Medellín \n Comida rápida"
    },
    {
        nombre: "Pollo Frito",
        descrip: "Cr 32 # 56 - 89 \n Lo mejor del pollo frito"
    }
];



/*
let suma=0
for(let i=0; i<producto.length; i++){
    suma = suma + (producto[i].cantidad*producto[i].valor_unit)
}

console.log(suma);

let data = producto.map(function(pro){
    return '<li>'+pro.nombre+' '+pro.cantidad+'</li>'
});

document.getElementById("prueba").innerHTML = data;
*/
/*
let restaurants = restaurantes.map(function(res){
    return '<p>'+res.nombre[0]+'</p>'
});
*/
/*
document.getElementById("titulo").innerHTML = restaurantes[0].nombre;
document.getElementById("desb").innerHTML = restaurantes[0].descrip;

document.getElementById("titulo1").innerHTML = restaurantes[1].nombre;
document.getElementById("desb1").innerHTML = restaurantes[1].descrip;

document.getElementById("titulo2").innerHTML = restaurantes[2].nombre;
document.getElementById("desb2").innerHTML = restaurantes[2].descrip;

document.getElementById("titulo3").innerHTML = restaurantes[3].nombre;
document.getElementById("desb3").innerHTML = restaurantes[3].descrip;
*/

export{
    restaurantes
};



