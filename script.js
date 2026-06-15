const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let isValid = true;

  // Get values
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");

  // Clear previous errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  // Name validation
  if (name.value.trim() === "") {
    setError(name, "Name is required");
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    setError(email, "Enter a valid email");
    isValid = false;
  }

  // Phone validation
  const phonePattern = /^[0-9]{10}$/;
  if (!phone.value.match(phonePattern)) {
    setError(phone, "Enter a valid 10-digit phone number");
    isValid = false;
  }

  // Message validation
  if (message.value.trim() === "") {
    setError(message, "Message cannot be empty");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});

function setError(input, message) {
  const error = input.nextElementSibling;
  error.textContent = message;
}