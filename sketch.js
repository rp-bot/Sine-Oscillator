let angleVel = 0.8;
let angle = 0;

let freqslider;

let osc;

function setup() {
  createCanvas(800, 400);
  freqslider = createSlider(80, 800, 120, 40);
  freqslider.position(30, 20);
  freqslider.style("width", "100px");

  osc = new p5.Oscillator();
  osc.setType("sine");
  osc.freq(440); // Starting frequency
  osc.amp(0.5); // Starting amplitude
  osc.start();
}

function draw() {
  background(220);
  noFill();
  // Draw the x-axis
  line(20, height - 20, width - 20, height - 20);
  // Draw the y-axis
  line(20, 20, 20, height - 20);
  line(10, height / 2, width - 20, height / 2);
  let val = freqslider.value();

  let amplitude = 100;
  let frequency = val / 10000;
  angleVel = val / 100;

  freqVal = map(val, 80, 800, 200, 800);
  osc.freq(freqVal);

  beginShape();
  for (let x = 20; x < width - 20; x += 1) {
    let y = height / 2 + amplitude * sin(frequency * (x + angle));
    vertex(x, y);
  }
  endShape();

  // Update angle for animation
  angle += angleVel;
}
