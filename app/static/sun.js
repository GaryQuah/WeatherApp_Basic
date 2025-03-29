document.addEventListener("DOMContentLoaded", function () {
    function updateWeatherEffects() {
        const sun = document.querySelector(".sun");
        const body = document.body;
        const raindrops = document.querySelectorAll(".rain div");
        const currentHour = new Date().getHours();

        let gradientColors;

        if (currentHour >= 6 && currentHour < 19) {
            // 🌅 Day Mode Gradient
            gradientColors = "linear-gradient(270deg, #ff7e5f, #feb47b, #eff898, #72d3ff)";
            sun.style.background = "radial-gradient(circle, #FFD700, #FF8C00)";
            updateRainColor(raindrops, "rgb(0, 0, 0)"); // Light Blue Rain
        } else {
            // 🌙 Night Mode Gradient
            gradientColors = "linear-gradient(270deg, #1E1E2F, #2C2C54,rgb(38, 38, 82), #232931)";
            sun.style.background = "radial-gradient(circle, #E0E0E0, #808080)";
            sun.style.boxShadow = "0 0 40px rgba(255, 255, 255, 0.8)";
            updateRainColor(raindrops, "rgba(255, 255, 255, 1)"); // Grayish Rain (Moonlight Effect)
        }

        // Apply the updated gradient with animation
        body.style.background = gradientColors;
        body.style.backgroundSize = "400% 400%"; // Ensure it scrolls
        body.style.animation = "gradientScroll 10s infinite linear";
    }

    function updateRainColor(raindrops, color) {
        raindrops.forEach((drop) => {
            drop.style.background = color;
        });
    }

    updateWeatherEffects(); // Run on page load

    // Update every 10 minutes
    setInterval(updateWeatherEffects, 1);
});
