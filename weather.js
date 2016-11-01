$(document).ready(function(){

var lat = 0;
var lon = 0;
var unitType = "imperial";
console.log("Working...");
  //get users location
  if (navigator.geolocation){
    console.log("in if statement");
    navigator.geolocation.getCurrentPosition(function(position){
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      console.log(lat);
      console.log(lon);
      var apiKey = "ce505221f087812083715115cc1bfd0c";
      var url = "api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon +
                "&units=" + unitType + "&appid=" + apiKey;
      console.log(url);
    });
  }

});
