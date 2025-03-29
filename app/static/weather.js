document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "704bf997547d0f7ed616723a4499158b"; // Replace with your actual API key
    const city = "Singapore"; // Change to your preferred location
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    async function fetchWeather() {
        try {
            const response = await fetch(weatherUrl);
            const data = await response.json();
            console.log(data); // Debugging, remove later

            // Update HTML with weather data
            document.getElementById("weather-city").textContent = data.name;
            document.getElementById("weather-temp").textContent = `${data.main.temp}°C`;
            document.getElementById("weather-desc").textContent = data.weather[0].description;
            document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

            // Adjust weather effects
            updateWeatherEffects(data.weather[0].main.toLowerCase());

        } catch (error) {
            console.error("Weather fetch error:", error);
        }
    }

    function updateWeatherEffects(weatherCondition) {
        const sun = document.querySelector(".sun");
        const clouds = document.querySelectorAll(".cloud");
        const rain = document.querySelector(".rain");

        // Reset all to hidden
        //sun.style.display = "none";
        clouds.forEach(cloud => cloud.style.display = "none");
        rain.style.display = "none";

       if (weatherCondition.includes("cloud")) {
            clouds.forEach(cloud => cloud.style.display = "block"); // Show clouds
        } else if (weatherCondition.includes("rain")) {
            rain.style.display = "block"; // Show rain effect
            clouds.forEach(cloud => cloud.style.display = "block"); // Clouds still visible
        } else if (weatherCondition.includes("thunderstorm")) {
            rain.style.display = "block"; // Show heavy rain effect
            clouds.forEach(cloud => cloud.style.display = "block");
        }
    }

    fetchWeather(); // Call the function
});
