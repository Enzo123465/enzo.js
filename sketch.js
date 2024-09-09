function setup() {
  createCanvas(600, 600);
background("pink");
}

function draw(){
  stroke("black")
  fill("white")
  
  
if(mouseIsPressed){
  rect(mouseX,mouseY,25,35);
  } 
}
