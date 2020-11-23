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
let i_am_list = ["FAQ"];

function setup(mytext) {
  simplex = new SimplexNoise();
  ticker = 0;
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  reset();
  window.addEventListener("resize", reset);
  text = mytext
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
  let fontSize = w * 0.10;
  ctx.font = "bold " + fontSize + "px Helvetica, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle"
  console.log(w/2, h/2)
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
      let noise = simplex.noise3D(x / zoom, y / zoom, ticker / 40) * 15;
      let index = Math.round(y+noise) * w + x;
      let color = imageBuffer[index];
      let height = 1;
      let yAdjust = 0;
      if (color) {
        height = 5;
        yAdjust = -2;
      }
      // ctx.fillStyle = "#EAC15B"
      ctx.fillRect(x, y + noise + yAdjust, 1, height);
    }
  }
}

/* Wait 5 seconds, then change the screen? https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line/14226807 */

const delay = ms => new Promise(res => setTimeout(res, ms));

const rotate_draw = async () => {
  counter = 0
  while (true){
    setup(i_am_list[counter % i_am_list.length]);
    draw();
    await delay(3500)
    counter++
  }
}

rotate_draw()
