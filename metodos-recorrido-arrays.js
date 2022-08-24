var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "Tv", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
];

// filter
var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500;
});
console.log(articulosFiltrados);

// map
var nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre;
});
console.log(nombreArticulos);

// find
var encuentraArticulo = articulos.find(function (articulo) {
  return articulo.nombre === "Laptop";
});
console.log(encuentraArticulo);

// forEach
articulos.forEach(function (articulo) {
  console.log(articulo.nombre);
});

// some
var articulosBaratos = articulos.some(function (articulo) {
  return articulo.costo <= 700;
});
console.log(articulosBaratos);
