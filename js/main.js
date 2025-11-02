function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('main');
  frameRate(15);
  background(17, 17, 17);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var xR = getRndInteger(0, 255);
var xG = getRndInteger(0, 255);
var xB = getRndInteger(0, 255);

var yR = getRndInteger(0, 255);
var yG = getRndInteger(0, 255);
var yB = getRndInteger(0, 255);

let root = document.documentElement;
root.style.setProperty('--r', yR);
root.style.setProperty('--g', yG);
root.style.setProperty('--b', yB);

function draw() { 
  // background('rgba(' + xR + ',' + xG + ',' + xB + ',' + ' 0.2)');
  stroke(yR,yG,yB);
  
  background('rgba(0,0,0,0.2)');
  // stroke(0,0,0);
  line(mouseX, mouseY, pmouseX, pmouseY);
  print(pmouseX + " -> " + mouseX);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
