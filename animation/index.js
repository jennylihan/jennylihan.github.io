/*
Remixed from glitch
*/

let text = "NOISE";
let canvas;
let ctx;
let w, h;
let imageBuffer;
let ticker;
let simplex;

function setup() {
  simplex = new SimplexNoise();
  ticker = 0;
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  reset();
  window.addEventListener("resize", reset);
  text = 'JENNY H.'
  initBufferFromText();
  //document.querySelector("#text").addEventListener("input", input);
}

function reset() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight * .6;
  initBufferFromText();
}

// function input(event) {
//   text = event.target.value;
//   initBufferFromText();
// }

function initBufferFromText() {
  clear();
  let fontSize = w * 0.15;
  ctx.font = "bold " + fontSize + "px Helvetica, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle"
  ctx.fillText(text, w/2, h/2);
  let image = ctx.getImageData(0, 0, w, h);
  imageBuffer = new Uint32Array(image.data.buffer);
}

function draw() {
  ticker += 1;
  requestAnimationFrame(draw);
  clear();
  drawLines();
}

function clear() {
  ctx.clearRect(0, 0, w, h);
}

function drawLines() {
  let zoom = 100;
  let yDistance = 8;
  let yOffset = ticker % yDistance;
  for(let x = 0; x < w; x++) {
    for(let y = yOffset; y < h; y += yDistance) {
      let noise = simplex.noise3D(x / zoom, y / zoom, ticker / 40) * 20;
      let index = Math.round(y+noise) * w + x;
      let color = imageBuffer[index];
      let height = 1;
      let yAdjust = 0;
      if (color) {
        height = 5;
        yAdjust = -2;
      }
      ctx.fillRect(x, y + noise + yAdjust, 1, height);
    }
  }
}

setup();
draw();
