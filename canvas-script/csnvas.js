var canvas = document.querySelector('#fourLobes');
//	canvas.width=window.innerWidth;
//	canvas.height=window.innerHeight;
	canvas.width=400;
	canvas.height=400;
canvas.style.border='3px solid #000';
canvas.style.display='block';
canvas.style.background='#fff';
canvas.style.marginRight='0;';
canvas.style.marginLeft='0;';


var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(200,25);
ctx.bezierCurveTo(0, 50, 0, 400, 200, 375);
ctx.bezierCurveTo(400, 400, 400, 50, 200, 25);
ctx.lineWidth=5;
ctx.stroke();
