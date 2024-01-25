let loc = document.querySelector("h1");
let main = document.getElementById("main");
let high = document.getElementById("high");
let low = document.getElementById("low");
let wind = document.getElementById("wind");
let rain = document.getElementById("rain");

$(document).ready(function() {
  $.getJSON("https://ipapi.co/json/", function(data) {
    var country = data.country_name;
    var countryCode = data.country_code;
    let key = "b979d9602fea1460b5cf8205a7a5703c";

    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=${key}`)
        .then(res => res.json())    
        .then(data => {
            console.log(data);      
            loc.innerText = country;
            main.innerText = `${data.main.temp}°`;
            high.innerText = `${data.main.temp_max}°`;
            low.innerText = `${data.main.temp_min}°`;
            wind.innerText = `${data.wind.speed}km/h`;
            rain.innerText = `${data.main.humidity}%`;
        });
  });
});