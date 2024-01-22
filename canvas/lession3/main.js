const colors = ['green', 'blue', 'red', 'beige', 'rgba(133,122,200)', '#f15025']

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Agregar un evento al boton

btn.addEventListener('click',function() {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    
    // Cambiar el color de fondo con el boton

    document.body.style.backgroundColor =colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}