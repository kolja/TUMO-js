function setup() {
  createCanvas(500, 500);
  colorMode(HSL, 100);
  frameRate(5);
  noStroke();
}
function fadenkreuz() {
  push();
  fill(0, 0, 50, 50);
  rect(-50, -5, 100, 10);
  rect(-5, -50, 10, 100);
  pop();
}
function button(on) {
  push();
  let brightness = on ? 90 : 30;
  let glow = on ? 75 : 40;
  fill(0, 100, glow, on ? 100 : 0);
  rect(-8, -8, 16, 16, 4);
  fill(0, 100, brightness);
  rect(-5, -5, 10, 10);
  pop();
}

function grid(w, h) {
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      push();
      translate(x * 15, y * 15);
      button(Math.random() < 0.1);
      pop();
    }
  }
}

function arm() {
  push();
  fill(0, 0, 60);
  rect(-20, -20, 40, 150);
  pop();
}

function fuss() {
  push();
  fill(0, 0, 60);
  rect(-30, -30, 60, 40);
  pop();
}
function kopf() {
  push();
  fill(0, 100, 50);
  rect(-100, -50, 200, 100);
  fill(0, 0, 100);
  circle(-50, 0, 50);
  circle(50, 0, 50);
  fill(0, 100, 30);
  rect(-20, 30, 40, 7);
  pop();
}
function bauch() {
  push();
  fill(0, 100, 50);
  rect(-70, -20, 140, 170);
  translate(-50, 0);
  grid(8, 8);
  pop();
}

function draw() {
  push();
  fill(15, 45, 80);
  rect(0, 0, 500, 500);
  fill(55, 80, 80);
  rect(0, 0, 500, 200);
  pop();

  translate(250, 100);

  kopf();

  push();
  translate(-100, 100);
  arm();
  translate(200, 0);
  arm();
  pop();

  push();
  translate(-40, 280);
  fuss();
  translate(80, 0);
  fuss();
  pop();

  translate(0, 90);
  bauch();
  // fadenkreuz();
}
