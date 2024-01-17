
document.getElementById("nombre").addEventListener("focus",(evento)=>{

  evento.target.style.background = 'gray'
})

document.getElementById('nombre').addEventListener('blur', regresar);


function cambiar(evento) {

  let componente = evento.target;

  componente.style.background = 'yellow';
}

function regresar(evento) {

  let componente = evento.target

  componente.style.background = 'green';
}
