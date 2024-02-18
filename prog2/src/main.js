function setup() {
  createCanvas(500, 500);
  colorMode(HSL, 100);
  noStroke();
}

function draw() {
  fill(15, 45, 80);
  rect(0, 0, 500, 500)
  translate(250, 250);
  fadenkreuz();
}

function fadenkreuz() {
  push();
  fill(0, 0, 50, 50);
  rect(-50, -5, 100, 10);
  rect(-5, -50, 10, 100);
  pop();
}
