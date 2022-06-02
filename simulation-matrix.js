const canvas = document.getElementById('canvasMatrix');
const ctx = canvas.getContext('2d');
const w = canvas.width = document.body.offsetWidth; 
const h = canvas.height = document.body.offsetHeight;
ctx.fillStyle = '#000'; ctx.fillRect(0, 0, w, h);
const cols = Math.floor(w / 20) + 1; const ypos = Array(cols).fill(0);
function matrix () {
				ctx.fillStyle = '#0001';
				ctx.fillRect(0, 0, w, h);
				ctx.fillStyle = '#0f0';
				ctx.font = '20pt monospace';
				ypos.forEach((y, ind) => {
								const text = String.fromCharCode(Math.random() * 122);
								const x = ind * 20;
								ctx.fillText(text, x, y);
								if (y > 100 + Math.random() * 40000) ypos[ind] = 0;
								else ypos[ind] = y + 20;
				});
}
setInterval(matrix, 50);
