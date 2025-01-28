const colors = [
  { r: 0, g: 101, b: 107 },
  { r: 86, g: 84, b: 71 },
  { r: 226, g: 168, b: 41 },
  { r: 212, g: 208, b: 177 },
];
const startLines = 25;

let halfHeight, halfWidth;
let lines = [];

function setup() {
  const createdCanvas = createCanvas(windowWidth, windowHeight);
  createdCanvas.parent("background")
  strokeWeight(1);
  // frameRate(25);
  for (let l = 0; l < startLines; l++) {
    lines[l] = initLine();
  }
  halfHeight = height / 2;
  halfWidth = width / 2;
}

function initLine(origin, direction) {
  origin = origin || [random(-1, 1), random(-1, 1)];
  direction = direction || randomUnitVector();

  const line = {
    origin: origin.slice(),
    end: origin.slice(),
    direction: direction.slice(),
    speed: random(2, 5),
    growing: true,
    color: random(colors),
    alive: true,
    nodeRadius: 0
  };
  return line;
}

// On window resize, update the canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  halfHeight = height / 2;
  halfWidth = width / 2;
}

// Render loop that draws shapes with p5
function draw() {
  background(255);
  lines.forEach((line, index) => updateLine(line, index));

  push();
  translate(halfWidth, halfHeight);

  lines.forEach(({ origin, end, color, nodeRadius }) => {
    const [originX, originY] = origin;
    const [endX, endY] = end;
    stroke(color.r, color.g, color.b);
    line(
      originX * halfWidth,
      originY * halfHeight,
      endX * halfWidth,
      endY * halfHeight
    );
    strokeWeight(nodeRadius);
    stroke(color.r, color.g, color.b, 100);
    fill(color.r, color.g, color.b);
    circle(
      originX * halfWidth,
      originY * halfHeight,
      nodeRadius);
    circle(
      endX * halfWidth,
      endY * halfHeight,
      nodeRadius);
    strokeWeight(1);
  });
  pop();
}

function updateLine(line, index) {
  if (!line.alive) {
    return;
  }

  let [x0, y0] = line.origin;
  let [x1, y1] = line.end;

  if (line.growing) {
    x1 += line.speed * line.direction[0];
    y1 += line.speed * line.direction[1];
  } else {
    x0 += line.speed * line.direction[0];
    y0 += line.speed * line.direction[1];
  }

  let hit;

  line.end[0] = x1;
  line.end[1] = y1;
  line.origin[0] = x0;
  line.origin[1] = y0;
  
  if (line.growing) {
    line.nodeRadius += random(0, 0.03) * line.speed;
  } else {
    line.nodeRadius -= random(0, 0.03) * line.speed;
  }
    
  

  if (line.growing && (x1 < -1 || x1 > 1.0 || y1 < -1 || y1 > 1)) {
    line.growing = false;
  } else if (x0 < -1 || x0 > 1.0 || y0 < -1 || y0 > 1.0) {
    line.alive = false;
    lines.push(initLine());
    lines.splice(index, 1);
  }
}

function randomUnitVector() {
  const radius = 1;
  const theta = random(0, TWO_PI);
  const x = radius * cos(theta) * 1e-3;
  const y = radius * sin(theta) * 1e-3;
  return [x, y];
}

// determines if the vector <p1, p2> collides with the vector <p3, p4>
// after messing around with cross products for a while I came accross this
// https://web.archive.org/web/20060911055655/http://local.wasp.uwa.edu.au/%7Epbourke/geometry/lineline2d/
// and decided to give it a go
function findIntersection(p1, p2, p3, p4) {
  const u_aNumerator =
    (p4[0] - p3[0]) * (p1[1] - p3[1]) - (p4[1] - p3[1]) * (p1[0] - p3[0]);
  const denominator =
    (p4[1] - p3[1]) * (p2[0] - p1[0]) - (p4[0] - p3[0]) * (p2[1] - p1[1]);

  const u_a = u_aNumerator / denominator;

  const u_bNumerator =
    (p2[0] - p1[0]) * (p1[1] - p3[1]) - (p2[1] - p1[1]) * (p1[0] - p3[0]);

  const intersectionX = p1[0] + u_a * (p2[0] - p1[0]);
  const intersectionY = p1[1] + u_b * (p2[1] - p1[1]);
}
