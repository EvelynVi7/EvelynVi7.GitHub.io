var queryResult;
var i = 0;



var cities = [];


function setup() {
  pixelDensity(3.0);

  cities = [{
    "name": "Boston",
    "location": '42.3601,-71.0589',
  }, {
    "name": "Shenzhen",
    "location": '22.5431,114.0579',
  }, {
    "name": "San Francisco",
    "location": '37.7749,-122.4194',
  }]
  query();
}

function touchEnded() {
  if (i < 3) {
    i++;
  }
  if (i === 3) {
    i = 0;
  }
  query();
}

// Run the API call
function query() {


  // URL for querying
  var url = 'https://api.darksky.net/forecast/9888832c6f7dae7e4e7e9866dfe722eb/' + cities[i].location;

  // Query the URL, set a callback
  // 'jsonp' is needed for security
  loadJSON(url, gotData, 'jsonp');
}


// Request is completed
function gotData(data) {
  //  console.log(data);
  queryResult = data;

}

var xDim = 375;
var yDim = 667;

function draw() {

  createCanvas(xDim, yDim);
  background(45);
  noStroke();
  fill(230);

  if (queryResult) {

    // only look at current results:
    var dailyWeather = queryResult.daily;
    var elements = [];




    // a few variables for text formatting
    var xPos = 62.5;
    var yPos = 150;
    var yGap = 80;
    var xGap = 50;
    var textSizeLarge = 15;
    var textSizeSmall = 8;

    // List relevant items of information
    fill(255);
    textStyle(BOLD);

    // The location is not live data, just entered manually
    //textSize(textSizeSmall);
    //text("Location", 20, yPos);
    yPos += textSizeLarge;
    textSize(30);
    textAlign(CENTER);
    text(cities[i].name, xDim / 2, yPos + 4 * yGap);
    textSize(20);
    //yPos += yGap;
    textAlign(LEFT);

    var c = [];
    c[1] = color(192, 56, 52, 100);
    c[2] = color(224, 112, 47, 100);
    c[3] = color(228, 207, 77, 100);
    c[4] = color(125, 191, 78, 100);
    c[5] = color(70, 123, 74, 100);
    c[6] = color(73, 129, 123, 100);

    for (var j = 0; j < 7; j++) {
      strokeWeight(1);
      stroke(255, 255, 255, 80);
      line(0, yPos + (j - 1) * yGap, xDim, yPos + (j - 1) * yGap);
      if (j < 6) {
        line(xPos + j * xGap, 0, xPos + j * xGap, yDim);
      }
      noStroke();
      var r1 = map(dailyWeather.data[j].temperatureHigh, 40, 100, 5, 100);
      fill(c[1]);
      ellipse(xPos, yPos + (j - 1) * yGap, r1);
      var r2 = map(dailyWeather.data[j].temperatureLow, 40, 100, 5, 100);
      fill(c[2]);
      ellipse(xPos + xGap, yPos + (j - 1) * yGap, r2);
      var r3 = map(dailyWeather.data[j].humidity, 0, 1, 5, 100);
      fill(c[3]);
      ellipse(xPos + 2 * xGap, yPos + (j - 1) * yGap, r3);
      var r4 = map(dailyWeather.data[j].precipProbability, 0, 1, 5, 100);
      fill(c[4]);
      ellipse(xPos + 3 * xGap, yPos + (j - 1) * yGap, r4);
      var r5 = map(dailyWeather.data[j].windSpeed, 0, 30, 5, 100);
      fill(c[5]);
      ellipse(xPos + 4 * xGap, yPos + (j - 1) * yGap, r5);
      var r6 = map(dailyWeather.data[j].cloudCover, 0, 1, 5, 100);
      fill(c[6]);
      ellipse(xPos + 5 * xGap, yPos + (j - 1) * yGap, r6);
    }

  }


}