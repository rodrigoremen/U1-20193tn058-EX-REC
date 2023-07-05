
nombre=document.getElementById('nombre');
precio=document.getElementById("precio");
cantidad=document.getElementById("cantidad");


var productos=[];
var subtotal=0;


let folio= Math.random().toString(36).substring(0,8); 


let producto = {
  nombre: "",
  precio: 0,
  cantidad: 0,
  totalCostoProducto : ()=> {
    precio1=producto.precio;
    cant=producto.cantidad;
    totalIndividual=precio*cant;
    subtotal+=totalIndividual;
}
};

function addProducto() {
  console.log("name "+nombre);
  producto.nombre=nombre1;
  producto.precio=precio1;
  producto.cantidad=cantidad1;
  productos.push(producto);
  console.log(productos);
}
function carrito() {
  producto.nombre=nombre1;
  producto.precio=precio1;
  producto.cantidad=cantidad1;
  productos.push(producto);
  console.log(productos);
}
