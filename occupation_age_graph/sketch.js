var table;
var occupations = [];
var maxValue = 0;


function preload() {
  table = loadTable("ASE_2015_00CSCBO08_with_ann_clean_reduced.csv", "csv");
}

function setup() {

   parseData();


  findMaxValue();
  var c = [
    color(255, 91, 165), color(255, 132, 188), color(255, 187, 218),
    color(245, 202, 46), color(249, 217, 119), color(238, 240, 166),
    color(219, 73, 172), color(228, 114, 191), color(240, 173, 219),
    color(153, 87, 205), color(176, 124, 218), color(209, 178, 234),
    color(59, 198, 182), color(100, 212, 199), color(164, 231, 223),
    color(67, 142, 200), color(107, 167, 214), color(168, 204, 232),
    //color(245, 202, 46), color(249, 217, 119), color(238, 240, 166),
    color(144, 111, 169), color(176, 150, 193)
  ];
  var aUnit = PI / 65;
  createCanvas(1200, 1200);
  background(230);
  noStroke();
  translate(width / 2, height / 2);
  //fill(255);
  push();
  for (var i = 0; i < 20; i++) {
    fill(c[i]);
    var ang = aUnit * 6;
    arc(0, 0, 800, 800, 0, ang);
    fill(230);
    ellipse(0, 0, 750, 750);
    textAlign(LEFT, TOP);
    fill(255);
    textSize(20);
    text(occupations[i].name,400,0,200,200);
    rotate(ang + aUnit / 2);
  }
  pop();
  for (i = 0; i < 20; i++) {
    fill(c[i]);
    ang = aUnit * 6;
    push();
    for (var j = 0; j < 6; j++) {
      //fill(c[i]);
      //noStroke();
      //var dSub = random(400, 650);
      var dSub = map(occupations[i].ages[j].value,0,252679,350, 650);
      arc(0, 0, dSub, dSub, 0, aUnit);
      push();


      rotate(aUnit / 2);
      textAlign(LEFT, CENTER);
      textSize(8);
      fill(255);
      var ocText=occupations[i].ages[j].groupName + ",   "+ occupations[i].ages[j].value;
      text(ocText, dSub / 2+3, 0);
      pop();
      rotate(aUnit);
    }
    pop();
    //push();
    //for (var j=0; j<noSubsec[i]+1; j++){
    //strokeWeight(1);
    //stroke(255);
    //line(0,0,375,0);
    //rotate(aUnit);
    //}
    //pop();
    rotate(ang + aUnit / 2);
  }
  fill(230);
  ellipse(0, 0, 200, 200);
  fill(230,150);
  strokeWeight(1);
  stroke(230);
  ellipse(0, 0, 350, 350);
  
  //print(noSubsec[3]);
  //print(aUnit);
  //print(ocText);
}

function parseData() {
  var keyRow = table.getRow(0);
  var metaRow = table.getRow(1);
  //  var row1 = table.getRow(2);
  //  var row2 = table.getRow(3);
  //  var sum = row1.getNum(6)+row2.getNum(6);
  //  console.log(sum);
  for (var i = 2; i < table.getRowCount(); i = i + 80) {
    var occupationRowF = table.getRow(i);
    var occupationRowM = table.getRow(i + 8);
    var occupation = {};
    occupation.id = occupationRowF.getString(0);
    occupation.name = occupationRowM.getString(2);
    occupation.ages = [];
    for (var j = i; j < i + 6; j++) {
      var item = {};
      item.code = table.getRow(j).getString(4);
      item.groupName = table.getRow(j).getString(5);
      item.value = table.getRow(j).getNum(6) + table.getRow(j + 8).getNum(6);
      append(occupation.ages, item);
    }
    append(occupations, occupation);
  }

  //console.log(occupations);
}

function findMaxValue() {
  for (var i = 0; i < occupations.length; i++) {
    for (var j = 1; j < occupations[i].ages.length; j++) {
      if (occupations[i].ages[j].value > maxValue) {
        maxValue = occupations[i].ages[j].value;
      }
    }
  }
  console.log(maxValue);
}

/*
function createList() {
  // starting x and y posiition
  var xPos = 20;
  var yPos = 20;

  // creating headers
  var occupationHeader = createDiv("occupation");
  occupationHeader.position(xPos, yPos);

  // setting the style
  occupationHeader.style("font-weight", "bold");
  yPos += 30;

  // go through all occupations
  for (var i = 0; i < occupations.length; i++) {
    // Display the occupation name
    var occupationDiv = createDiv(occupations[i].name);
    occupationDiv.style("cursor", "hand");
    occupationDiv.position(xPos, yPos);
    occupationDiv.class("listLink");
    occupationDiv.mouseClicked(
      function() {

        //        createGraph(this.html());

        var actives = selectAll('.active');
        // We can then iterate through the array and hide all the elements.
        for (var j = 0; j < actives.length; j++) {
          actives[j].removeClass("active");
        }
        this.addClass("active");
      }
    )
    yPos += 30;
  }
}
*/


function draw() {


}