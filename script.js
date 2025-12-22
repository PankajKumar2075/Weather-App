const apiKey = "a9429e267a713a1737d3e8d2cf7bc125";

const form = document.getElementById("searchForm");
const cityInput = document.getElementById("cityInput");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const city = cityInput.value;
  getWeather(city);
});

function getWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  )
    .then(response => response.json())
    .then(data => {
      document.getElementById("cityName").innerText = data.name;
      document.getElementById("temperature").innerText =
        Math.round(data.main.temp) + "°C";
      document.getElementById("description").innerText =
        data.weather[0].description;
      document.getElementById("humidity").innerText =
        data.main.humidity;
      document.getElementById("wind").innerText =
        data.wind.speed;
    })
    .catch(() => {
      alert("City not found!");
    });
}
