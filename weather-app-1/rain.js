function rain() {
  for (var k = 0; k < 50; k++) {
    strokeWeight(random(0, 3));
    stroke(255, 255, 255, random(50, 200));
    rainLine(random(0, 375), random(0, 350));
  }
}

function rainLine(x, y) {
  line(x, y, x, y + 30);
}