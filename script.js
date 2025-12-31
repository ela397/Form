document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("concernForm");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById('parentName').value;
    const contact = document.getElementById('contactNumber').value;
    const email = document.getElementById('email').value;
    const concern = document.getElementById('concern').value;

    // Build WhatsApp message
    const message = `Parent Concern Form Submission:%0A
Name: ${encodeURIComponent(name)}%0A
Contact: ${encodeURIComponent(contact)}%0A
Email: ${encodeURIComponent(email)}%0A
Concern: ${encodeURIComponent(concern)}`;

    // WhatsApp link with Ghana number (+233556196730)
    const whatsappUrl = `https://wa.me/233556196730?text=${message}`;

    // Open WhatsApp chat in new tab
    window.open(whatsappUrl, '_blank');

    // Show success message
    successMessage.style.display = "block";

    // Reset form fields
    form.reset();

    // Hide success message after 3 seconds
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  });
});
