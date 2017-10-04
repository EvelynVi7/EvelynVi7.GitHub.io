function drawDice(n) {
  if (n===1){
    ellipse(50,50,15,15);
  }
  else if (n===2){
    ellipse(70,30,15,15);
    ellipse(30,70,15,15);
  }
  else if (n===3){
    ellipse(70,30,15,15);
    ellipse(30,70,15,15);
    ellipse(50,50,15,15);
  }
  else if (n===4){
    ellipse(70,30,15,15);
    ellipse(30,70,15,15);
    ellipse(70,70,15,15);
    ellipse(30,30,15,15);
  }
  else if (n===5){
    ellipse(70,30,15,15);
    ellipse(30,70,15,15);
    ellipse(70,70,15,15);
    ellipse(30,30,15,15);
    ellipse(50,50,15,15);
  }
  else if (n===6){
    ellipse(70,30,15,15);
    ellipse(30,70,15,15);
    ellipse(70,70,15,15);
    ellipse(30,30,15,15);
    ellipse(70,50,15,15);
    ellipse(30,50,15,15);
  }
}