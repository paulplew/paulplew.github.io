let circles = [];
const colors = [
  { r: 229, g: 46, b: 30 },
  { r: 92, g: 121, b: 237 },
  { r: 246, g: 188, b: 44 },
];

function setup() {
  const clientHeight = document.getElementById('background').clientHeight;
  const clientWidth = document.getElementById('background').clientWidth;
  const cnv = createCanvas(clientWidth, clientHeight);
  cnv.parent("background");

  noStroke();
  colorMode(RGB, 255, 255, 255, 1)
}

function draw() {
  background(color(255, 255, 255));
  if (frameCount % 60 === 0) {
    circles.push(createCircle(random(colors)));
  }

  circles.forEach((c) => {
    const x = map(c.x, -1, 1, 0, width);
    const y = map(c.y, -1, 1, 0, height);

    fill(c.color.r, c.color.g, c.color.b, c.opacity);
    circle(x, y, c.radius);
  });

  circles = circles
    .map((circle) => updateCircle(circle))
    .filter((circle) => circle.opacity > 0);
}

function windowResized() {
  const clientHeight = document.getElementById('background').clientHeight;
  const clientWidth = document.getElementById('background').clientWidth;
  resizeCanvas(clientWidth, windowHeight);
}

const createCircle = (color) => ({
  x: random(-1, 1),
  y: random(-1, 1),
  radius: 0,
  speed: random(0.1, 0.5),
  color: { r: color.r, g: color.g, b: color.b },
  opacity: 1,
});

const updateCircle = (c) => ({
  ...c,
  radius: c.radius += c.speed,
  opacity: c.opacity -= 0.002,
});