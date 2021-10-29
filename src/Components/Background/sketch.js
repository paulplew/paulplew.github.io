import p5 from 'p5'

const sketch = (s) => {
  let circles = [];
  const colors = [
    { r: 229, g: 46, b: 30 },
    { r: 92, g: 121, b: 237 },
    { r: 246, g: 188, b: 44 },
  ];

  s.setup = () => {
    const cnvs = s.createCanvas(s.windowWidth, s.windowHeight);
    cnvs.parent("background");
    s.noStroke();
    s.colorMode(s.RGB, 255, 255, 255, 1)
  }

  s.draw = () => {
    s.background(s.color(255, 255, 255));
    if (s.frameCount % 60 === 0) {
      circles.push(createCircle(s.random(colors)));
    }
    circles.forEach((c) => {
      const x = s.map(c.x, -1, 1, 0, s.width);
      const y = s.map(c.y, -1, 1, 0, s.height);

      s.fill(c.color.r, c.color.g, c.color.b, c.opacity);
      s.circle(x, y, c.radius);
    });

    circles = circles
      .map((circle) => updateCircle(circle))
      .filter((circle) => circle.opacity > 0);
  }

  s.windowResized = () => {
    s.resizeCanvas(s.windowWidth, s.windowHeight);
  }

  const createCircle = (color) => ({
    x: s.random(-1, 1),
    y: s.random(-1, 1),
    radius: 0,
    speed: s.random(0.1, 0.5),
    color: { r: color.r, g: color.g, b: color.b },
    opacity: 1,
  });

  const updateCircle = (c) => ({
    ...c,
    radius: c.radius += c.speed,
    opacity: c.opacity -= 0.002,
  });
}


const P5Sketch = new p5(sketch);

export default P5Sketch;