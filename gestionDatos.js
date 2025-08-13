/*                          TP 1 JS Arrays
Los alumnos deberán crear un script de JavaScript que simule la gestión de una pequeña "base de
datos" de elementos (por ejemplo, productos de una tienda, turnos de una casa de cumpleaños, o
estudiantes de un curso) utilizando arrays. Deberán realizar operaciones CRUD (Crear, Leer,
Actualizar, Eliminar) y otras transformaciones utilizando los métodos de arrays vistos en clase. 
El script deberá ser ejecutable con Node.js.
*/

/* Integrantes Programación III - Grupo U
Agustina Castro
Ignacio Morales
Jonatan Borba
Pablo Luna
Ernesto Gabriel Maldonado
Ruben Enrique Schmidt


*/
/*
1. Configuración Inicial:
2) Crear un nuevo archivo JavaScript (ej. gestionDatos.js).
3) Dentro de este archivo, declarar un array llamado productos que contenga al menos 5 objetos JavaScript. 
Cada objeto debe representar un elemento con propiedades como id, nombre, precio y stock.
*/
let productos = [
  { id: 1, nombre: "Cuaderno", precio: 4500, stock: 35 },
  { id: 2, nombre: "Biromes", precio: 2125, stock: 20 },
  { id: 3, nombre: "Goma de Borrar", precio: 120, stock: 10 },
  { id: 4, nombre: "Carpetas", precio: 3500, stock: 18 },
  { id: 5, nombre: "lapices", precio: 200, stock: 22 },  
];

let productosEliminados = new Array();

/*
2. Operaciones Básicas y Acceso:
1 Imprimir la longitud total del array productos.
2 Acceder e imprimir por consola el nombre del 
    segundo y cuarto elemento del array utilizando su índice.
*/
console.log('Punto 2');
console.log(`El largo del array es de : ${productos.length}`);
console.log(`El nombre del segundo elemento es: ${productos[1].nombre}`);
console.log(`El nombre del cuarto elemento es: ${productos[3].nombre}`);

/*
3. Recorrido del Array:
1. Recorrer el array productos utilizando un bucle for...of e imprimir el nombre y el precio de cada
elemento.
2. Recorre el array productos utilizando el método forEach() e imprimir la misma información que en el
punto anterior, pero agregando una frase descriptiva (ej. "Producto: [nombre], Precio: [precio]").
*/
console.log('------------------3. Recorrido del Array - for of---------------------');  

for (const producto of productos) {
  console.log(`${producto.nombre} - ${producto.precio}`);
}
console.log('------------------------------------------------------------------------');  
console.log('------------------3. Recorrido del Array - for each---------------------');  
console.log(`La cantidad de Productos son: ${productos.length}`);  
productos.forEach((producto, index) => {
  console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}`);
});
console.log('------------------------------------------------------------------------');  

