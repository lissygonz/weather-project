function initPage() {
    const cityEl = document.getElementById("enter-city");
    const searchEl = document.getElementById("search-button");
    const clearEl = document.getElementById("clear-history");
    const nameEl= document.getElementById("city-name");
    const currentPicEl = document.getElementById("current-pic");
    const currentTempEl= document.getElementById("temperature");
    const currentHumidityEl= document.getElementById("humidity");
    const currentWindEl= document.getElementById("wind-speed");
    const currentUVEl= document.getElementById("UV-index");
    const historyEl = document.getElementById("history");
    var fivedayEl = document.getElementById("today-weather");
    var todayweatherEl = document.getElementById("fiveday-header");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

    //Unique Api

    const APIKey = "8e476846af0d02747ae782dbbf806ce8"

    function getWeather(cityName) {
        //gets weather request from open weather api
        let queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
        axios.get(queryUrl)
        .then(function (response) {
            todayweatherEl.classList.remove("d-none");


            //Displays current weather

            const currentDate = new Date (response.data.dt * 1000);
            const day = currentDate.getDate();
            const month = currentDate.getMonth() + 1;
            const year = currentDate.getFullYear();
            nameEl.innerHTML = response.data.name + "(" + month + "/" + day + "/" + year + ")";
            let weatherPic = response.data.weather[0].icon;
            currentPicEl.setAttribute("src", "hhttps://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
            currentPicEl.setAttribute("alt", response.data.weather[0].description);
            currentTempEl.innerHTML = "Temperature" + k2f(response.data.main.humidity + "&176f");
            currentHumidityEl.innerHTML = "Humidity: " + response.data.main.humidity + "%";
            currentWindEl.innerHTML = "Wind Speed: " + response.data.wind.speed + " MPH";
        })
    }

}