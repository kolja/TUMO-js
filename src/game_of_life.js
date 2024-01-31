let cell_size = 16;
let width = Math.floor(window.innerWidth / cell_size);
let height = Math.floor(window.innerHeight / cell_size);
let editmode = true;

function Array2D(rows, columns, init) {
  return Array.from({ length: rows }, () => Array(columns).fill(init));
}

function toggle_cell(x, y) {
  grid[x][y] = grid[x][y] === 0 ? 1 : 0;
}

function rand_int(r) {
  return Math.floor(Math.random() * r);
}

function setup() {
  grid = Array2D(width, height, 0);

  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(10);
  for (i = 0; i < 160; i++) {
    grid[rand_int(30) + 10][rand_int(30) + 10] = 1;
  }
  noStroke();
  colorMode(HSL, 100);
}

function drawcube(x, y, state) {
  let color = 100 * (1 - state);
  push();
  translate(cell_size * x, cell_size * y);
  fill(0, 0, color);
  rect(0, 0, cell_size, cell_size);
  pop();
}

function clamp(value, max) {
  return (value + max) % max;
}
function surrounding(x, y) {
  let cells = [
    grid[clamp(x - 1, width)][clamp(y - 1, height)],
    grid[clamp(x,     width)][clamp(y - 1, height)],
    grid[clamp(x + 1, width)][clamp(y - 1, height)],
    grid[clamp(x - 1, width)][clamp(y,     height)],

    grid[clamp(x + 1, width)][clamp(y,     height)],
    grid[clamp(x - 1, width)][clamp(y + 1, height)],
    grid[clamp(x,     width)][clamp(y + 1, height)],
    grid[clamp(x + 1, width)][clamp(y + 1, height)],
  ];
  return cells.reduce((x, y) => x + y, 0);
}

function update_life() {
  let newGrid = Array2D(width, height, 0);
  let s = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      s = surrounding(x, y);

      newGrid[x][y] = grid[x][y];

      if (grid[x][y] !== 0 && s < 2) {
        newGrid[x][y] = 0;
      } 
      if (grid[x][y] === 0 && s === 3) {
        newGrid[x][y] = 1;
      } 
      if (grid[x][y] !== 0 && s > 3) {
        newGrid[x][y] = 0;
      } 
    }
  }
  grid = Array.from(newGrid, (row) => Array.from(row));
}

function draw() {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      drawcube(x, y, grid[x][y]);
    }
  }
  if (!editmode) update_life();
}

function mousePressed() {
  toggle_cell(Math.floor(mouseX / cell_size), Math.floor(mouseY / cell_size));
}

function keyPressed() {
  editmode = !editmode;
}
