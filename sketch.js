function setup() {
  
}

function draw() 
{
  
  createCanvas(1000, 500);
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
    
//assign numbers to time locations
var H2=ceil((H/2)) ;
var H3=floor((H/2)) ;
var M1=floor(M/10);
var M2=ceil((M%10)/2);
var M3=floor((M%10)/2);
var S1=floor(S/10);
var S2=ceil((S%10)/2);
var S3=floor((S%10)/2);

//draw clock grid blocks
stroke(0);
fill(255);
strokeWeight(5);
push();
//rect(100,200,100,100);
rect(200,150,100,100);
rect(200,250,100,100);
rect(322.5,225,5,5);
rect(322.5,270,5,5);
translate(250,0)
rect(100,200,100,100);
rect(200,150,100,100);
rect(200,250,100,100);
rect(322.5,225,5,5);
rect(322.5,270,5,5);
translate(250,0)
rect(100,200,100,100);
rect(200,150,100,100);
rect(200,250,100,100);
//rect(322.5,225,5,5);
//rect(322.5,270,5,5);
pop();

//draw dices
stroke(0);
fill(0);
noStroke();

push();
translate(200,150);
drawDice(H2);
translate(0,100);
drawDice(H3);
pop();

translate(250,0);
push();
translate(100,200);
drawDice(M1);
translate(100,-50);
drawDice(M2);
translate(0,100);
drawDice(M3);
pop();

translate(250,0);
translate(100,200);
drawDice(S1);
translate(100,-50);
drawDice(S2);
translate(0,100);
drawDice(S3);


  
}

