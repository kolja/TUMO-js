let matrix;
let w = 20;
let h = 20;

function setup() {
  matrix = Array.from({ length: w }, () => Array(h));
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      matrix[x][y] = Math.floor(Math.random() * 3);
    }
  }
  createCanvas(500, 500);
  background("#acacac");
  frameRate(10);
}
function drawSquare(x, y, color) {
  let c = [100, 70, 30];
  fill(c[color]);
  rect(x * 20, y * 20, 20, 20);
}
function draw() {
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      drawSquare(y, x, matrix[x][y]);
    }
  }
}
