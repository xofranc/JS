document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.querySelector('.canvas');
    canvas.classList.add('aparecer');
});

if(canvas && canvas.getcontext()) {
    ctx - canvas.getcontext('2d');

    if(ctx){

        ctx.linewidth = 10
        ctx.strokeStyle = 'black';
        ctx.beginPath();

        var x1 = 20, y1 = 20;
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(150, 200, 400, 20);
        ctx.stroke();


    }
}

