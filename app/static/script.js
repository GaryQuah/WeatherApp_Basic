document.addEventListener("DOMContentLoaded", function () {
    const rainContainer = document.querySelector(".rain");

    function createRaindrop() {
        const drop = document.createElement("div");
        drop.style.left = Math.random() * window.innerWidth + "px"; // Random X position
        drop.style.animationDuration = (Math.random() * 1.5 + 0.5) + "s"; // Random fall speed
        rainContainer.appendChild(drop);

        setTimeout(() => {
            drop.remove(); // Remove drop after falling
        }, 2000);
    }

    // Generate multiple raindrops every few milliseconds
    setInterval(createRaindrop, 50);
});
