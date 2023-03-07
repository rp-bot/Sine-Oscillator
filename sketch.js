/* eslint-disable no-undef, no-unused-vars */
let r = 4;

function setup() {
  createCanvas(600, 400);
  // Put setup code here
}

function draw() {
  background(0);
  translate(300, 200);
  var center = width / (r * 2);
  noFill();
  stroke(252, 238, 33);
  strokeWeight(8);
  beginShape();
  for (let i = 0; i < center + 1; i++) {
    let angle = map(i, 0, center, 0, TWO_PI);
    let y = map(sin(angle), -1, 1, -200, 200);
    let x = map(i, 0, center + 1, -300, 300);
    vertex(x, y);
  }
  endShape();
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(600, 400);
};
