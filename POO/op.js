class Persona {

  static contadorPersonas = 0;

  constructor(
    name = null,
    apellidos = null,
    email = null,
    edad = null,
    idiom = null,
    telefone = null
  ) {
    this.name = name;
    this.apellidos = apellidos;
    this.email = email;
    this.edad = edad;
    this.idiom = idiom;
    this.telefone = telefone;
  }

  get _name() {
    return this.name.toUpperCase();
  }

  set _name(new_name) {
    if (
      typeof new_name === "string" ||
      new_name === undefined ||
      new_name !== ""
    ) {
      this.name = new_name || this.name;
    } else {
      console.error("El nombre debe ser una cadena no vacía");
    }
  }

  saludar() {
    console.log(
      `Hola, Soy ${this.name} ${this.apellidos}, mi correo electrónico es ${this.email} tengo ${this.edad} y los idiomas que he aprendido son ${this.idiom} `
    );
  }

  nombreCompleto() {
    return this.nombre  + ' ' + this.apellidos
  }

  static saludar() {
    console.log('Un saludo ')
  }

  static saludarCompleto(Persona) {
    console.log(Persona.name + " " + Persona.apellidos)
  }

}

//    Extencion de la clase persona
class Empleado extends Persona {
  constructor(
    name = null,
    apellidos = null,
    email = null,
    edad = null,
    idiom = null,
    telefone = null,
    departamento = null,
    tiempoEmpresa = null,
    funciones = null
  ) {
    super(name, apellidos, email, edad, idiom, telefone,);
    this.departamento = departamento;
    this.tiempoEmpresa = tiempoEmpresa;
    this.funciones = funciones;
  }

  // Departamento de trabajo
  get _departamento() {
    return this.departamento.toUpperCase();
  }

  set _departamento(actDepartamento) {
    this.departamento = actDepartamento;
  }

  //Sobre escritura
  nombreCompleto() {
    return super.nombreCompleto  + ' ' + this.departamento
  }
}

// Objetos
let Programador = new Persona(
  "Santiago",
  "Vasquez Franco",
  "Santiagop200101@gmail.com",
  22,
  "es, fr, en"
);

let vendedor = new Empleado(
  "Ana",
  "Cifuentes Garcia",
  "anagarcia@hotmail.com",
  25,
  "es, fr, en",
  683545659,
  "Colombia",
  "2 Anios",
  "Vendedora"
);

Persona.saludarCompleto(Programador)
Empleado.saludar()
console.log(Persona.contadorPersonas); 