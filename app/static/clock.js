document.addEventListener("DOMContentLoaded", function () {
    function updateClock() {
        const clock = document.getElementById("clock");
        const now = new Date();

        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let amPm = hours >= 12 ? "PM" : "AM";

        // Convert to 12-hour format
        hours = hours % 12 || 12;

        // Add leading zero if needed
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // Display time
        clock.textContent = `${hours}:${minutes}:${seconds} ${amPm}`;
    }

    // Update clock every second
    setInterval(updateClock, 1000);
    updateClock(); // Run immediately
});
