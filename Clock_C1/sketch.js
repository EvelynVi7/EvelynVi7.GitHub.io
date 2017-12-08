function preload(){
  moon = loadImage("moon.png");
}

function setup() {
  
}

function draw() {
  
createCanvas(800, 800);
background(0);
var M = minute();
//var M = 36;
//text("Current minute:\n" + m, 5, 100);
var S = second();
var H = hour();
//var H = 15;
  if(H>12) {
      H=H-12;
    } 
 if(H<1) {
      H=12;
    } 
var r=500
noFill();
imageMode(CENTER);
image(moon,width/2,height/2,r,r);
smooth();
stroke(0);
strokeWeight(1);
ellipse(width/2,height/2,r,r)
var wy = (H-1)*r/12 + M*r/720 + S*r/432000;
for (var i=1; i<=12; i++){
  ellipse((width/2+i*r/12),height/2,r,r);
}

fill(0,200);
noStroke();
ellipse((width/2+wy),height/2,r,r);

push();
for (i=1; i<=12; i++){
  textAlign(LEFT,CENTER);
  stroke(255);
  fill(255);
  textSize(15);
  text(i,(width/2+(i-1)*r/12-r/2),height/2);
}
pop();


fill(255);
translate(width/2,height/2)
ellipse(300*sin(S/10),300*cos(S/10),10)


      
      //noFill();
      //stroke(255)
      //ellipse(3,3,70,70)
 
 
 
}