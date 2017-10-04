function setup() {
  
}

function draw() {
createCanvas(1500,800);
background(200);

  var xH = 200;
  var xM = 600;

var M = minute();
//var M = 36;
//text("Current minute:\n" + m, 5, 100);
var S = second();
var H = hour();
//var H = 9;
  if(H>12) {
      H=H-12;
    } 
 if(H<1) {
      H=12;
    } 


var b=50;
var wy=(H-1)*width/2+M*width/120+S*width/7200;
translate(width/2,height/2);



stroke(255);
strokeWeight(1);
fill(255);
triangle(-10,-100,10,-100,0,-60);

stroke(0);
strokeWeight(2);
fill(0);
line(-width/2,b,width/2,b);
line(-width/2,-b,width/2,-b);
strokeWeight(1);
textSize(30);
textAlign(LEFT,TOP);
translate(-wy,0);
for (var i=1; i<=12; i++){
  line(0,b,0,-b);
  text(i,0,-b);
  push();
  for (var j=1; j<=6; j++){
    line(0,b/2,0,-b/2);
    textSize(15);
    textAlign(LEFT,CENTER);
    if (j===6){
      text("0",(width/12+3),b/2);
    } else {
      text(j+"0",(width/12+3),b/2);
    }
    push();
      for (var k=1; k<=10; k++){
        line(0,b/4,0,-b/4);
        translate(width/120,0);
      }
    pop();
    translate(width/12,0);
  }
  pop();
  translate(width/2,0);
}

resetMatrix();
noStroke();
fill(200);
rect(0,0,20,height);
rect((width-20),0,width,height);
}