document.addEventListener("DOMContentLoaded", function () {
  // Typed.js effect
  new Typed(".text", {
    strings: ["Java Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
});

document.getElementById("contactForm").addEventListener("submit", submitForm);

// Function to handle contact form submission
function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const messageEl = document.getElementById("formMessage");

  // Basic validation
  if (!name || !email || !message) {
    messageEl.textContent = "Please fill in all required fields.";
    messageEl.style.color = "red";
    return;
  }

  const scriptURL = "https://script.google.com/macros/s/AKfycbwFbvZDCtlxzga4GedQJ_MRD7r2XW5LY7hryhgbqubzmeBW-fZNYllwzFZ_0Xqb_jPy/exec"
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("subject", subject);
  formData.append("message", message);

  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
    .then(response => {
      if (response.ok) {
        messageEl.textContent = "Message sent successfully!";
        messageEl.style.color = "green";
        document.getElementById("contactForm").reset();
      } else {
        throw new Error("Server error");
      }
    })
    .catch(error => {
      messageEl.textContent = "Something went wrong. Please try again.";
      messageEl.style.color = "red";
      console.error("Submission error:", error);
    });
}

