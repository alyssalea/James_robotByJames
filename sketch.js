 var counter = 0; 
function setup() {
  createCanvas(windowWidth,windowHeight)
  background (0,0,0);
}

function draw() {

 fill (random (0,255),random (0,255),random (0,255))
 rect (mouseX, mouseY, mouseX, mouseY)
 rect (mouseY, mouseX, mouseY, mouseX)
}