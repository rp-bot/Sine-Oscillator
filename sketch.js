let angleVel = 0.8;
let angle = 0;

let freqslider;
let volslider;
let osc;

let isOn = false;
let muteToggle;

function setup() {
  createCanvas(800, 400);
  freqslider = createSlider(60, 800, 440, 20);
  freqslider.position(30, 20);
  freqslider.style("width", "100px");

  let d = createDiv();
  d.style("transform: rotate(-90deg)");
  d.position(800, 80);
  volslider = createSlider(0, 100, 80, 10);
  volslider.style("height", "100px");
  d.child(volslider);

  osc = new p5.Oscillator();
  osc.setType("sine");
  osc.freq(440); // Starting frequency
  osc.amp(0.8); // Starting amplitude

  muteToggle = createButton("Play Audio");
  muteToggle.position(820, 20);
  muteToggle.mousePressed(handleMuteToggle);
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
  let vol = volslider.value();

  let amplitude = map(vol, 0, 100, 0, 1) * 160;
  let frequency = val / 10000;
  angleVel = val / 100;

  freqVal = map(val, 60, 800, 60, 800);
  osc.freq(freqVal);
  osc.amp(map(vol, 0, 100, 0, 1));

  beginShape();
  for (let x = 20; x < width - 20; x += 1) {
    let y = height / 2 + amplitude * sin(frequency * (x + angle));
    vertex(x, y);
  }
  endShape();

  // Update angle for animation
  angle += angleVel;
}

function handleMuteToggle() {
  if (isOn == true) {
    osc.stop();
    isOn = false;
    muteToggle.html("Unmute");
  } else {
    osc.start();
    isOn = true;
    muteToggle.html("Mute");
  }
}
