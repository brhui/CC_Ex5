var maroon, forest, royal, midnight;

var linecolor = [255, 250, 200, 150, 145];

var font;
var fontsize = 40;
var fontX = 40;
var fontY = 175;
var fontY2 = 300;
var fontspeed = 1;

var phrase = 'The real hopes and dreams of people can be distorted and misdirected and packaged until you are not sure what you really want or what you even really need.';

function preload() {
  font = loadFont('content/BebasNeueRegular.otf')
}

function setup() {
  createCanvas(1000, 700);
  background(255);
  fill(0);
  stroke(0);
  textFont(font, fontsize);

  maroon = color(160, 0, 27);
  forest = color(11, 96, 21);
  royal = color(103, 21, 175);
  midnight = color(34, 54, 140);
}

function draw() {
  background(255);

  fill(maroon);
  noStroke();
  text(phrase, mouseX, fontY, 600, 300);

  fontY += fontspeed;

  if (fontY > height || fontY < -185) {
    fontspeed *= -1;
  }

  for (var i = 0; i < 4; i++) {
    stroke(linecolor[i]);
    line(40, 375, 630, 375);
  }

}