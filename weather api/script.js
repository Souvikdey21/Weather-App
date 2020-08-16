var city = "Jamshedpur";
var city2 = "Kolkata";

$.getJSON(
    "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=21880ea9a21c355ff88d85739aa6c0e2",
    function(data) {
        console.log(data);

        var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var temp = data.main.temp;
        var pressure = data.main.pressure;
        var weather = data.weather[0].main;
        var name = data.name;
        var Longitude = data.coord.lat;
        var Latitude = data.coord.lon;
        var humidity = data.main.humidity;
        var maxtemp = data.main.temp_max;
        var mintemp = data.main.temp_min;
        var speed = data.wind.speed;

        $(".icon").attr("src", icon);
        $(".weather").append(weather);
        $(".temp").append(temp);
        $(".pressure").append(pressure);
        $(".name").append(name);
        $(".Longitude").append(Longitude);
        $(".Latitude").append(Latitude);
        $(".humidity").append(humidity);
        $(".maxtemp").append(maxtemp);
        $(".mintemp").append(mintemp);
        $(".speed").append(speed);
    });