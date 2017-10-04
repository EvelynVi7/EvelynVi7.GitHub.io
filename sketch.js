function setup() {
  
}

function draw() {
  
  createCanvas(800, 800);
  background(200);
  
  var M = minute();
//var M = 38;
//text("Current minute:\n" + M, 5, 100);
var S = second();
var H = hour();
//var H = 13;
 if(H<1) {
      H=12;
    } 
 if(H>12) {
      H=H-12;
    } 
    
var R=60;

noFill;
stroke(0);
strokeWeight(2);
ellipse((width/2),(height/2),(12*R),(12*R));
noStroke();

//draw secs arc
  //for (var j = 1; j <= S; j = j + 1){
   // arc ((width/2),(height/2),((H+1)*R),((H+1)*R),((M*PI)/30),((M*PI)/30),PIE);
  //}
fill(255,50);
arc((width/2),(height/2),((H+1)*R),((H+1)*R),((M*PI)/30),((M*PI)/30 + (S*PI)/1800),PIE);
//draw minutes arc
fill(255,170);
arc((width/2),(height/2),((H+1)*R),((H+1)*R),0,((M*PI)/30),PIE);
//draw hours circle
fill(255);
ellipse((width/2),(height/2),(H*R),(H*R));

  
  noFill(); 
  stroke(0);
  strokeWeight(2);
  for (var i = 1; i <= 12; i = i + 1){
    ellipse ((width/2),(height/2),(i*R),(i*R));
  }
}