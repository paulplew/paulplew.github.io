const circles = [],
    colors = [
        { r: 229, g: 46, b: 30 },
        { r: 92, g: 121, b: 237 },
        { r: 246, g: 188, b: 44 },
    ];

function setup() {
    var clientHeight = document.getElementById('background').clientHeight;
    var clientWidth = document.getElementById('background').clientWidth;
    var cnv = createCanvas(clientWidth, clientHeight);
    cnv.parent("background");

    noStroke();
}

function draw() {
    background(color(255, 255, 255));
    if (frameCount % 30 == 0) {
        circles.push(createCircle(random(colors)));
    }

    circles.forEach((c, index) => {
        const opacity = map(c.opacity, 0, 1, 0, 255);
        fill(c.color.r, c.color.g, c.color.b, opacity);
        const x = map(c.x, -1, 1, 0, width);
        const y = map(c.y, -1, 1, 0, height);
        circle(x, y, c.radius);
        updateCircle(c, index);
    });

    circles.filter((c) => c.opacity <= 0);
}

function createCircle(color) {
    const c = {
        x: random(-1, 1),
        y: random(-1, 1),
        radius: 0,
        speed: random(0.1, 1.5),
        color: { r: color.r, g: color.g, b: color.b },
        opacity: 1,
    };

    return c;
}

function updateCircle(c, index) {
    c.radius += c.speed;
    c.opacity -= 0.004;
}