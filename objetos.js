var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2020,
  detalleDelAuto: function () {
    console.log(`Auto ${this.modelo} ${this.annio}`);
  },
};

//console.log(miAuto.marca);
//console.log(miAuto.annio);
console.log(miAuto.detalleDelAuto());
