class Persona {
  constructor(
    name = null,
    apellidos = null,
    email = null,
    edad = null,
    idiom = null,
    telefone = null,

  ) {
    this.name = name;
    this.apellidos = apellidos;
    this.email = email;
    this.edad = edad;
    this.idiom = idiom;
    this.telefone = telefone;
    this.nombreCompleto = function () { 

      return `Nombre completo:  ${this.name} ${this.apellidos}`;
  }
  }
  
  get _name() {
    return this.name.toUpperCase();
  }

  set _name(new_name) {
      if (typeof new_name === 'string' || new_name === undefined || new_name !== "") {
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
}

let cliente1 = new Persona(
  "Santiago",
  "Vasquez Franco",
  "Santiagop200101@gmail.com",
  22,
  "es, fr, en"
);




cliente1._name = "Maria" // Usar el setter _name
console.log(cliente1._name); // Usar el getter _name
console.log(cliente1.nombreCompleto()); 
cliente1.saludar();
