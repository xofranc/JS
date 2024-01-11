class Autos {
  constructor(marca, modelo, traccion, color) {
    this._marca = marca;
    this._modelo = modelo;
    this._traccion = traccion;
    this._color = color;
  }

  get marca() {
    return this._marca.toUpperCase();
  }

  set marca(nuevaMarca) {

    this._marca = nuevaMarca;

  }

  get modelo() {
    return this._modelo;
  }

  set modelo(nuevaModelo) {
    return this._modelo = nuevaModelo;
  }

  get traccion() {
    return this._traccion.toUpperCase()
  };

  set traccion(nuevaTraccion) {
    return this._traccion = nuevaTraccion;
  }

  get color() {
    return this._color.toUpperCase
  }

  set color(nuevaColor) {
    return this._color = nuevaColor;
  }

}

let carroPapa = new Autos('Nissan', 2000, 'delantera','Gris')

console.log(carroPapa)
carroPapa.marca = "Mazda"

console.log(carroPapa.marca)