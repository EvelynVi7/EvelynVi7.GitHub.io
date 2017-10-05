// Sketch for using the darksky API
// https://darksky.net/dev/docs
// This sketch requires you to start a local server or run it on a server
// See more about how to do that here:
// https://github.com/processing/p5.js/wiki/Local-server

function preload() {
  Img = loadImage("boston.png");

}

var queryResult;

function setup() {
  pixelDensity(3.0);
  createCanvas(375, 667);
  background(0);
  image(Img, 0, 0, 375, 667);


  query();
}

// Run the API call
function query() {

  var Loc = [];
  Loc[1] = '22.5431,114.0579';
  Loc[2] = '42.3601,-71.0589';
  Loc[3] = '37.7749,-122.4194'

  // URL for querying
  var url = 'https://api.darksky.net/forecast/9888832c6f7dae7e4e7e9866dfe722eb/' + Loc[1];

  // Query the URL, set a callback
  // 'jsonp' is needed for security
  loadJSON(url, gotData, 'jsonp');
}

// Request is completed
function gotData(data) {
  //  console.log(data);
  queryResult = data;

}

function draw() {

  if (queryResult) {

    // only look at current results:
    var currentWeather = queryResult.currently;
    if (currentWeather.icon == "clear-day") {
      clearday();
    }
    if (currentWeather.icon == "partly-cloudy-day") {
      partlyCloudyDay();
    }
    print(currentWeather.icon);
    print(currentWeather.time);
    print(queryResult.timezone);
    print(queryResult.hourly.data[10].temperature);

    // a few variables for text formatting
    var xPos = 20;
    var yPos = 40;
    var yGap = 20;
    var textSizeLarge = 20;
    var textSizeSmall = 8;

    // List relevant items of information
    fill(255);
    textStyle(BOLD);

    // The location is not live data, just entered manually
    textSize(textSizeSmall);
    text("Location", 20, yPos);
    yPos += textSizeLarge;
    textSize(textSizeLarge);
    text("Shenzhen", 20, yPos);
    yPos += yGap;

    textSize(textSizeSmall);
    text("Weather", 20, yPos);
    yPos += textSizeLarge;
    textSize(textSizeLarge);
    text(currentWeather.icon, 20, yPos);
    yPos += yGap;

    textSize(textSizeSmall);
    text("Temperature", 20, yPos);
    yPos += textSizeLarge;
    textSize(textSizeLarge);
    text(currentWeather.temperature + "º,  " + queryResult.daily.data[0].temperatureLow + "º - " + queryResult.daily.data[0].temperatureHigh, 20, yPos);
    yPos += yGap;

    textSize(textSizeSmall);
    text("Precipitation", 20, yPos);
    yPos += textSizeLarge;
    textSize(textSizeLarge);
    text((currentWeather.precipProbability * 100) + "%", 20, yPos);
    yPos += yGap;

    textSize(textSizeSmall);
    text("Humidity", 20, yPos);
    yPos += textSizeLarge;
    textSize(textSizeLarge);
    text((currentWeather.humidity * 100) + "%", 20, yPos);
    yPos += yGap;

    textSize(textSizeSmall);
    text("Wind Speed", 20, yPos);
    yPos += textSizeLarge;
    textSize(textSizeLarge);
    text((currentWeather.windSpeed) + "mph", 20, yPos);
    yPos += yGap;

  }



}