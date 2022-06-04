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

}