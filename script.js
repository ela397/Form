// script.js

// Run code only after the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  
  // Grab the button by its ID
  const btn = document.getElementById("magicBtn");

  // Add a click event to the button
  btn.addEventListener("click", () => {
    // Show a popup message
    alert("✨ You clicked the magic button!");
  });

  // Example: Change text color randomly when button is clicked
  const heading = document.querySelector("h1");
  btn.addEventListener("click", () => {
    const colors = ["#ff9800", "#4caf50", "#2196f3", "#e91e63", "#9c27b0"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    heading.style.color = randomColor;
  });
});
