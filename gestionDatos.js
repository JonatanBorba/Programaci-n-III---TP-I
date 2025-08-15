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
  { id: 4, nombre: "Carpetas", precio: 3500, stock: 0 },
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

/*
4. Manipulación de Arrays:
1. Agregar dos elementos al final del array productos utilizando push().
2. Eliminar el último elemento del array productos utilizando pop().
3. Agregar un nuevo elemento al inicio del array productos utilizando unshift().
4. Elimina el primer elemento del array productos utilizando shift().
5. Crear un nuevo array llamado productosConStock que contenga solo los elementos del array productos
donde el stock sea mayor que 0 utilizando filter().
6. Crear un nuevo array llamado nombresProductos que contenga solo los nombres de todos los
productos en el inventario utilizando map().
7. Encontrar y guardar en una variable el primer producto en productos que tenga un id específico (ej. id:3)
utilizando find(). Si no lo encuentra, indicar que no existe.
8. Crear un nuevo array llamado productosOrdenados que contenga los productos ordenados por precio
en orden decreciente. (investigar método sort()).
Imprimir en consola el array original o creado para verificar las operaciones realizadas.
*/

//1
productos.push(
 { id: 6, nombre: "Anillos", precio: 150, stock: 20 },
 { id: 7, nombre: "reglas", precio: 2325, stock: 10 });

 console.log(productos);
//2
 productos.pop(7);
 console.log(productos);
//3
 productos.unshift({ id: 8, nombre: "Corrector", precio: 310, stock: 95 });
 console.log(productos);
 //4
 productos.shift(0);
 console.log(productos);
 //5
  let productosConStock = productos.filter(producto => producto.stock > 0);
  console.log(productosConStock);