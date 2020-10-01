var search = document.getElementById("search");
search.addEventListener("keyup", e => {
  if (e.keyCode === 13) {
    var getCityName = e.target.value;
  }
  getWeather(getCityName);
});

function getWeather(getCityName) {
  const weatherApi = `
  http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&&mode=json&units=metric&APPID=d1c10de4aa956fbf53bfcf8c23d91d5f`;
  window
    .fetch(weatherApi)
    .then(data => {
      data
        .json()
        .then(weather => {
          var output = "";
          console.log(weather);
          var weatherData = weather.weather;
          for (let x of weatherData) {
           cloudOutput += `
                <div>
                    <img src="http://openweathermap.org/img/wn/${x.icon}@2x.png" />
                    <h1>${x.main}</h1>
                    <h6>${data.name}, ${data.sys.country}</h6>
                   
                    <h5>${x.description}</h5>
                    <h2 class="font-weight-bold">${tempData}&deg;C </h2>
                </div>

                <div class="rightShift">
                    <h5>Speed <h3>${data.wind.speed}</h3></h5>                   
                    <h5>Deg <h3>${data.wind.ged}</h3></h5>                    
                    <h5>Sunrise <h3>${data.sys.sunrise}</h3></h5>                    
                    <h5>Sunset<h3>${data.sys.sunset}</h3></h5>                    
                </div>

              
                
                <div class="adjust">
                    <h4 class="font-italic>Feels Like</h4>
                    <h1>${feelsLike}&deg;C</h1>
                </div>

                <div class="adjust">
                    <h4 class="font-weight-bold">Max Temp</h4>
                    <h1>${maxTemp}&deg;C</h1>
                </div>
                
                <div class="adjust">
                    <h4 class="font-weight-bold">Min Temp</h4>
                    <h1>${minTemp}&deg;C</h1>
                </div>
                
                <div class="adjust">
                    <h4>Pressure</h4>
                    <h1>${data.main.pressure}</h1>
                </div>

                <div class="adjust">
                    <h4>Humidity</h4>
                    <h1>${data.main.humidity}</h1>
                </div>

                <div class="adjust">    
                    <h4 class="font-italic">Time</h4>
                    <h1>${time}</h1>              
                </div>
            `;
        }
        document.getElementById("cloudTemplate").innerHTML= cloudOutput;
    }
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}
