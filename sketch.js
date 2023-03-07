/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Put setup code here
  var center = windowWidth / 2;
}

function draw() {
  // Put drawings here
  var center = windowWidth / 2 - 125;
  fill(234, 31, 81);
  noStroke();
  rect(center, 50, 250, 250);
  fill(255);
  textStyle(BOLD);
  textSize(140);
  text("p5*", center + 10, 250);
}

// This Redraws the Canvas when resized
windowResized = function() {
  resizeCanvas(windowWidth, windowHeight);
};
