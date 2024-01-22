document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.querySelector('.canvas');
    canvas.classList.add('aparecer');
});

window.onload = function() {

    canvas =document.getElementById('canvas');

    if(canvas && canvas.getContext) {
        ctx = canvas.getContext('2d');

        if(ctx){

            ctx.lineWidth = 10
            ctx.strokeStyle = 'white';
            ctx.beginPath();

            var x1 = 20, y1 = 20;
            ctx.moveTo(x1, y1);
            ctx.quadraticCurveTo(20, 50, 200, 120);

            ctx.stroke();
        }
    }

}