var monuments = [];
var topics = [];
var canvas;
var margin = 150;
var secWidth;
var img;
var a = 486.75;
var b = 578.25;
var typeImg = []
var topics = [];
var listTopics = ["culture", "political", "religious"]


function preload() {
  table = loadTable("171127_Memorials_in_DC_edited.csv", "csv", "header");
  table2 = loadTable("topics.csv", "csv");
  img = loadImage("map.png");
  typeImg[1] = loadImage("statue.png");
  typeImg[2] = loadImage("sculpture.png");
  typeImg[3] = loadImage("building.png");
}

function setup() {
  //parseData();
  canvas = createCanvas(2000, 1000);
  canvas.parent('monumentGraph');
  secWidth = (width - 800 - 2 * margin) / 3;
  //  myDiv = createDiv('this is some text')


  for (var i = 0; i < table.getRowCount(); i++) {
    monuments[i] = new Monument(i);
  }
  for (i = 0; i < listTopics.length; i++) {
    topics[i] = new Topic(i);
  }


  console.log(monuments[1]);
  //console.log(topics[0]);

}



function draw() {
  background("#dfdfde");
  textFont("Times New Roman");
  imageMode(CENTER)
  image(typeImg[1], 30 + secWidth / 2, height - 100, 50, 50);
  image(typeImg[2], 30 + 3 * secWidth / 2 + margin, height - 100, 50, 50);
  image(typeImg[3], 30 + 5 * secWidth / 2 + 2 * margin, height - 100, 50, 50);
  fill(255);
  textSize(20);
  textAlign(CENTER);
  text("STATUE", 30 + secWidth / 2, height - 50);
  text("SCULPTURE", 30 + 3 * secWidth / 2 + margin, height - 50);
  text("BUILDING", 30 + 5 * secWidth / 2 + 2 * margin, height - 50);
  imageMode(CORNER);
  image(img, width - 800 + margin, height - 200 - b, a, b);
  for (var i = 0; i < table.getRowCount(); i++) {
    monuments[i].update();
    monuments[i].display();
    monuments[i].writeText();
  }
  for (i = 0; i < listTopics.length; i++) {
    topics[i].write;
  }
  //  for (i = 0; i < table.getRowCount(); i++) {
  //    monuments[i].info();
  //  }
  //fill("#d7c6cf")
  //ellipse(0,0,200)
}

function Topic(tid) {
  this.tx = 30 + tid * 30;
  this.ty = 30;
  this.categ = listTopics[tid];
  this.write = function() {
    fill(255);
    noStroke();
    textSize(10);
    textAlign(LEFT);
    text("this.categ", tx, ty);
  }

}

function Monument(id) {
  this.id = id;


  var monumentRow = table.getRow(id);
  this.xLoc = monumentRow.getString(0);
  this.yLoc = monumentRow.getString(1);
  this.addr = monumentRow.getString(3);
  this.name = monumentRow.getString(4);
  this.size = monumentRow.getString(7);
  if (this.size === "S") {
    this.radius = 10
  } else if (this.size === "M") {
    this.radius = 20
  } else if (this.size === "L") {
    this.radius = 30
  }
  this.material = monumentRow.getString(8);
  if (this.material === "BRONZE") {
    this.col = "#d7c6cf";
  } else if (this.material === "MULTIPLE") {
    this.col = "#8caba8";
  }
  if (this.material === "STONE") {
    this.col = "#a2798f";
  }
//  this.col = random(["#d7c6cf", "#a2798f", "#8caba8"]);
  this.type = monumentRow.getString(9);
  this.topic = random(["culture", "political", "religious"])
  var fillCol=this.col;

  var protection = 0;
  var overlapping = true;
  while ((overlapping === true) && (protection < 500)) {
    var yRan = random(20, height - 200);
    if (this.type === "STATUE") {
      var xRan = random(30, secWidth);
    } else if (this.type === "SCULPTURE") {
      xRan = random(secWidth + margin, 2 * secWidth + margin);
    } else if (this.type === "BUILDING") {
      xRan = random(2 * secWidth + 2 * margin, 3 * secWidth + 2 * margin)
    }
    overlapping = false;
    for (var j = 0; j < this.id; j++) {
      var other = monuments[j];
      var d = dist(xRan, yRan, other.x, other.y);
      if (d < (this.radius + other.radius)) {
        //      this.x = xRan;
        //      this.y = yRan;
        overlapping = true;
        //     } else {
        //       overlapping = true;
        //       break;
      }
    }
    if (!overlapping) {
      this.x = xRan;
      this.y = yRan;
    }
    protection++;
  }



  this.update = function() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.radius) {
      fillCol = color(255);
      var xCo = map(this.xLoc, -77.080121, -76.967834, 0, a);
      var yCo = map(this.yLoc, 38.961041, 38.860393, 0, b);
      stroke(255);
      strokeWeight(5);
      fill("#ebdada");
      ellipse(xCo + width - 800 + margin, yCo + height - 200 - b, 20);
    } else {
      fillCol = this.col;
    }
  }
  this.writeText = function() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.radius) {
      fill(0);
      noStroke
      textSize(20);
      textAlign(LEFT);
      text(this.name, width - 800 + margin, 30);
      textSize(15)
      text("Adddress: " + this.addr, width - 800 + margin, 60);
      text("Size: "+this.size, width - 800 + margin, 80);
      text("Material: "+ this.material, width - 800 + margin, 100);
      text("Type: " + this.type, width - 800 + margin, 120);
      // text("Topic: " + this.type, width - 800 + margin, 140);
    }
  }
  this.display = function() {
    fill(fillCol);
    noStroke();
    //    strokeWeight(5);
    //    stroke(this.col);
    ellipse(this.x, this.y, this.radius);
  }

  this.info = function() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.radius) {
      fill(255);
      noStroke();
      textSize(10);
      textAlign(LEFT);
      text(this.name, this.x + this.radius, this.y + this.radius)
    }
  }
}