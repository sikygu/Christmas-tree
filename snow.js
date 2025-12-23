const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const snowflakes = Array.from({ length: 80 }, () => ({
  x: Math.random() * w,
  y: Math.random() * h,
  r: Math.random() * 3 + 1,
  d: Math.random() + 1
}));

function draw() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "white";
  ctx.beginPath();
  snowflakes.forEach(f => {
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
  });
  ctx.fill();
  move();
}

function move() {
  snowflakes.forEach(f => {
    f.y += f.d;
    if (f.y > h) {
      f.y = -10;
      f.x = Math.random() * w;
    }
  });
}

(function animate() {
  draw();
  requestAnimationFrame(animate);
})();
