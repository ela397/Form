document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("concernForm");
  const heading = document.querySelector("h1");
  const btn = document.querySelector("button");

  // WhatsApp submission
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById('parentName').value;
    const contact = document.getElementById('contactNumber').value;
    const email = document.getElementById('email').value;
    const concern = document.getElementById('concern').value;

    const message = `Parent Concern Form Submission:%0A
Name: ${encodeURIComponent(name)}%0A
Contact: ${encodeURIComponent(contact)}%0A
Email: ${encodeURIComponent(email)}%0A
Concern: ${encodeURIComponent(concern)}`;

    const whatsappUrl = `https://wa.me/233556196730?text=${message}`;
    window.open(whatsappUrl, '_blank');
  });

  // Bounce animation on button click
  btn.addEventListener("click", () => {
    heading.style.transition = "transform 0.3s";
    heading.style.transform = "scale(1.2)";
    setTimeout(() => {
      heading.style.transform = "scale(1)";
    }, 300);
  });
});

