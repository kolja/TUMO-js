function setup() {
  createCanvas(500, 500);
  colorMode(HSL, 100);
  noStroke();
}
function fadenkreuz() {
  push();
  fill(0, 0, 50, 50);
  rect(-50, -5, 100, 10);
  rect(-5, -50, 10, 100);
  pop();
}

function kopf() {
  push();
  fill(0, 100, 50);
  rect(-100, -50, 200, 100);
  fill(0, 0, 100);
  circle(-50, 0, 50);
  circle(50, 0, 50);
  pop();
}
function bauch() {
  push();
  fill(0, 100, 50);
  rect(-70, -20, 140, 170);
  pop();
}

function draw() {
  background(15, 70, 80);
  translate(300, 200);

  kopf();
  translate(0, 90);
  bauch();
  fadenkreuz();
}
