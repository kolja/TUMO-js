
// draw a quare with the Turtle API
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL, 100);
  background(0, 100, 100);
  pensize(7);
  pencolor(0, 100, 50);

  forward(100);
  right(90);
  forward(100);
  right(90);
  forward(100);
  right(90);
  forward(70);
}

// Turtle API:
//
// home();
// pencolor(pencolor);
// pensize(penwidth);
// pendown();
// penup();
// setposition(x, y);
// position(); // returns position
// left(angle);
// right(angle);
// setheading(angle);
// heading(); // returns heading
// forward(d);
// back(d);
