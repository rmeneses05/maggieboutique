document.addEventListener("DOMContentLoaded", function () {
    // Set your store's opening date (YYYY-MM-DD format)
    const openingDate = new Date("2024-07-16T00:00:00");
  
    // Function to update countdown timer
    function updateCountdown() {
      const currentTime = new Date();
      const timeDiff = openingDate - currentTime;
  
      if (timeDiff <= 0) {
        // Show a message when the countdown is finished
        document.getElementById("countdown").innerHTML = "<p>We're Open!</p>";
      } else {
        // Calculate days, hours, minutes, seconds
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
        // Display the countdown in the DOM
        document.getElementById("countdown").innerHTML = `
          <div class="countdown-item">
            <span class="countdown-number">${days}</span> days
          </div>
          <div class="countdown-item">
            <span class="countdown-number">${hours}</span> hours
          </div>
          <div class="countdown-item">
            <span class="countdown-number">${minutes}</span> minutes
          </div>
          <div class="countdown-item">
            <span class="countdown-number">${seconds}</span> seconds
          </div>
        `;
      }
    }
  
    // Initial call to update countdown
    updateCountdown();
  
    // Update countdown every second
    setInterval(updateCountdown, 1000);
  
    // Function for email form validation
    function validateEmail(email) {
      const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return emailValidation.test(String(email).toLowerCase());
    }
  
    // Handle form submission
    const form = document.querySelector(".input-section");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const inputEl = document.querySelector(".input-field");
      const errorMsg = document.querySelector(".error-msg");
      const errorIcon = document.querySelector(".error");
  
      if (!validateEmail(inputEl.value)) {
        errorMsg.style.display = "block";
        errorIcon.style.display = "block";
        errorMsg.textContent = "Please provide a valid email address";
        inputEl.classList.add("is-invalid");
      } else {
        // Show thank you message
        errorMsg.style.display = "block";
        errorMsg.textContent = "Thank you for subscribing to our newsletter!";
        errorMsg.classList.remove("text-danger");
        inputEl.classList.remove("is-invalid");
  
        // Optionally, you can reset the form fields
        form.reset();
      }
    });
  });
  