$(document).ready(function(){

var lat = 0;
var lon = 0;
var unitType = "imperial";
var icon = "";
console.log("Working...");

var getWeather = function(data){
  $("#location").text(data.name + ", " + data.sys.country);
  $("#temp").text(Math.round(data.main.temp + " "));
  icon = data.weather[0].icon;
  $("#weather").text(data.weather[0].description);

  if (unitType == "imperial"){
    $("#units").text("  ℉");
  }
  else {$("#units").text(" ℃")};

  $("#weather-icon").attr("src", "http://openweathermap.org/img/w/" + icon + ".png")
};
  //get users location
  if (navigator.geolocation){
    console.log("in if statement");
    navigator.geolocation.getCurrentPosition(function(position){
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      var apiKey = "ce505221f087812083715115cc1bfd0c";
      var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon +
                "&units=" + unitType + "&appid=" + apiKey;

      //This won't work from a local file i.e. file:/// needs to be a live wp
      $.getJSON(url, getWeather)
    });
  }


});
