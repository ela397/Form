// script.js
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("magicBtn");
  const heading = document.querySelector("h1");

  btn.addEventListener("click", () => {
    // Alert popup
    alert("✨ You clicked the magic button!");

    // Random color change
    const colors = ["#ff9800", "#4caf50", "#2196f3", "#e91e63", "#9c27b0"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    heading.style.color = randomColor;

    // Bounce animation
    heading.style.transition = "transform 0.3s";
    heading.style.transform = "scale(1.2)";
    setTimeout(() => {
      heading.style.transform = "scale(1)";
    }, 300);
  });
});
