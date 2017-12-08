var gesture = [];

function preload(){
// for (var i=0; i <= 6; i++){
//    gesture[i] = loadImage("gesture" + i + ".png");
//  }
  Img1 = loadImage("gesture1.png");
  Img2 = loadImage("gesture2.png");
  Img3 = loadImage("gesture3.png");
  Img4 = loadImage("gesture4.png");
  Img5 = loadImage("gesture5.png");
  Img6 = loadImage("gesture6.png");
}

function HandNumber(n){
   if (n===1){
    image(Img1,0,0,100,100);
  }
  else if (n===2){
    image(Img2,0,0,100,100);
  }
  else if (n===3){
    image(Img3,0,0,100,100);
  }
  else if (n===4){
    image(Img4,0,0,100,100);
  }
  else if (n===5){
    image(Img5,0,0,100,100);
  }
  else if (n===6){
    image(Img6,0,0,100,100);
  }
  
}