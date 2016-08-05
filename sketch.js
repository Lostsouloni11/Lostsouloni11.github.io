var value = 0;
var yPos = 0;
var
x = 10 ; 
var diametro;
diametro =100;


function setup() {

createCanvas(windowWidth,windowHeight);
var x;
x = 10 ; 
var y = 10;
y =100;

background (windowWidth,windowHeight);
}

function draw() {
  background (mouseX,mouseY,100)
  noStroke();
  fill (value);
  ellipse (mouseX, mouseY, diametro,diametro);
  diametro = diametro + 1;
 
}



function mousePressed() {
  if (value == 0) {
    value = 255
  } else {
    value = 0;
  }
}
