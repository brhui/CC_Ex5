// Variables for colors
var maroon, forest, royal, midnight;

// Variables for images
var door, space, ball, fern, mario, rings, sun;

var count = 0;
var noControl = 0;

// Variables for fonts
var font;
var fontsize = 132;

// Variables for phrases
var phrase1 = 'What\'s in here?';
var phrase2 = 'Let\'s find out';
var phrase3 = 'Your reality is a lie';
var phrase4 = 'Question everything'

// Variables for circles
var ellipWidth = 30;
var ellipHeight = 30;
var ellipGrowth = 10;

function preload() {
  font = loadFont('content/BebasNeueRegular.otf');
  door = loadImage('content/door.jpg');
  space = loadImage('content/space.jpg');
  ball = loadImage('content/ball.png');
  fern = loadImage('content/fern.png');
  mario = loadImage('content/mario.png');
  rings = loadImage('content/rings.png');
  sun = loadImage('content/sun.png');
}

function setup() {
  createCanvas(800, 600);
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
  count++;

  // Scene 1 - You encounter a door, and are given the illusion of control with a "button"
  image(door, 0, 0)

  fill(255);
  noStroke();
  textSize(132);
  text(phrase1, 72, 253);

  fill(midnight);
  rect(280, 360, 239, 66);
  textSize(47);
  fill(255);
  text(phrase2, 300, 410);

  if (mouseX >= 280 && mouseX <= 520 && mouseY >= 358 && mouseY <= 427) {
    fill(royal);
    rect(280, 360, 239, 66);
    textSize(47);
    fill(255);
    text('Let\'s find out', 300, 410);
  }

  // Scene 2 - You are told you don't have control

  if (count > 200) {
    image(door, 0, 0);

    // Stroke weight increases over time, changes color according to how heavy strokeWeight is.
    textSize(83);
    stroke(0);
    strokeWeight(noControl);
    noControl++;
    if (noControl > 50) {
      stroke(midnight);
      fill(255, 13, 152);
    }
    if (noControl > 150) {
      stroke(forest);
      fill(114, 123, 233);
    }
    if (noControl > 200) {
      stroke(royal);
      fill(2, 110, 151);
    }
    if (noControl > 250) {
      stroke(maroon);
      fill(123, 123, 123);
    }
    if (noControl > 300) {
      stroke(0);
      fill(royal);
    }
    if (noControl > 350) {
      stroke(midnight);
      fill(255, 13, 152);
    }
    if (noControl > 400) {
      stroke(forest);
      fill(114, 123, 233);
    }
    if (noControl > 450) {
      stroke(royal);
      fill(2, 110, 151);
    }
    if (noControl > 500) {
      stroke(maroon);
      fill(123, 123, 123);
    }
    if (noControl > 550) {
      stroke(0);
      fill(royal);
    }
    if (noControl > 600) {
      stroke(forest);
      fill(114, 123, 233);
    }
    if (noControl > 650) {
      stroke(royal);
      fill(2, 110, 151);
    }
    text('You have no control here.', 54, 328)
  }

  // Scene 3 - Reality is a LIE

  if (count > 750) {
    background(space); // Not sure why this isn't filling as background??
    // image(space, 0,0)
    fill(255);
    text(phrase3, 134, 328);

    //This part makes random areas of the space.jpg image appear
    var locX1 = floor(random(0, width));
    var locY1 = floor(random(0, height));
    var locX2 = floor(locX1 + random(-5, 5));
    var locY2 = floor(locY1 + random(-5, 5));
    var copyWidth = random(10, 150);
    var copyHeight = random(10, 50);

    copy(space, locX1, locY1, copyWidth, copyHeight, locX2, locY2, copyWidth, copyHeight);
  }

  // Scene 4 - Question EVERYTHING 

  if (count > 950) {
    background(255);
    var mouseMid = phrase4.length / 2;
    var mouseLeft = mouseMid - ((mouseX / width) * mouseMid);
    var mouseRight = mouseMid + ((mouseX / width) * mouseMid);
    textAlign(CENTER, CENTER);
    text(phrase4.substring(mouseLeft, mouseRight + 1), width / 2, height / 2);

    /*    var move = 0.01;
        var sinspeed = 0;
        move = mouseX / width * 0.5;
        sinspeed = (sinspeed + move) % TWO_PI; */
    image(mario, random(0, 100), mouseX);
    image(fern, mouseX / 2, random(100, 400));
    image(rings, mouseX / 3, random(0, 40));
    image(ball, random(200, 600), mouseX / 6);
    image(sun, random(300, 400), mouseX / 8);
  }

  // Scene 5 - Fade to White / Space picture points

  if (count > 1400) {
    ellipse(width / 2, 650, ellipWidth, ellipHeight);
    ellipWidth += ellipGrowth;
    ellipHeight += ellipGrowth;

    space.loadPixels();
    var dotS = 5;
    var dotL = 50;
    var points = map(mouseX, 0, width, dotS, dotL);
    var locX = floor(random(space.width));
    var locY = floor(random(space.height));
    var spacePic = space.get(locX, locY);
    fill(spacePic, 255);
    ellipse(locX, locY, points, points);
  }

  // console.log('Count is: ' + count + '.');

}
