window.onload = function () {
  let canvas = document.getElementById("canvas");

  if (canvas && canvas.getContext) {
    ctx = canvas.getContext("2d");

    if (ctx) {
      // defino las colores, para crear el cuadrado
      ctx.fillStyle = "green";
      ctx.strokeStyle = "black";
      ctx.lineWidth = 5;

      // Pocision en X, en Y, ancho y alto del cuadrado

      ctx.fillRect(50, 50, 100, 100);
      ctx.strokeRect(50, 50, 100, 100);

      ctx.fillStyle = "green";
      ctx.fillRect(450, 50, 100, 100);
      ctx.strokeRect(450, 50, 100, 100);

      //  Crear lineas
      ctx.lineWidth = 5;
      ctx.strokeStyle = "yellow";

      //iniciamos el trazo de la linea

      // posicion x, y (550, 200);
      ctx.beginPath();
      ctx.lineCap = "round";
      ctx.moveTo(50, 200);
      ctx.lineTo(550, 200);
      ctx.stroke();

      ctx.strokeStyle = "black";
      ctx.beginPath();
      ctx.moveTo(25, 150);
      ctx.lineTo(175, 150);
      ctx.stroke();

      ctx.strokeStyle = "black";
      ctx.beginPath();
      ctx.moveTo(425, 150);
      ctx.lineTo(575, 150);
      ctx.stroke();

      ctx.strokeStyle = "yellow";
      ctx.beginPath();
      ctx.moveTo(50, 300);
      ctx.lineTo(550, 300);
      ctx.stroke();

      //  path
      ctx.strokeStyle = "blue";
      ctx.beginPath();
      ctx.moveTo(50, 100);
      ctx.lineTo(100, 150);
      ctx.lineTo(150, 100);
      ctx.lineTo(100, 50);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(450, 100);
      ctx.lineTo(500, 150);
      ctx.lineTo(550, 100);
      ctx.lineTo(500, 50);
      ctx.closePath();
      ctx.stroke();
    } else {
      alert("el metodo canvas no es soportado");
    }
  }
};
