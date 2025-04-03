const homeBtn = document.getElementById("home-btn");
const dropdown = document.querySelector(".dropdown");
const form = document.getElementById("countdown-form");
const occasionInput = document.getElementById("event-name");
const occasionDisplay = document.querySelector(".countdown-header-right h3");
const storedOccasion = localStorage.getItem("occasion");
const image = document.getElementById("balloons");
const fileInput = document.createElement("input");
const messageContainer = document.getElementById("messageContainer");
const customMessageInput = document.getElementById("customMessageInput");
const countdownHeaderRight = document.querySelector(".countdown-header-right");
const countdownContentContainer = document.querySelector(".countdown-content-container");



document.addEventListener("DOMContentLoaded", function () {
  const homeBtn = document.getElementById("home-btn");
  const dropdown = document.querySelector(".dropdown");

  if (homeBtn && dropdown) {
    homeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      dropdown.classList.toggle("active");
    });

    document.addEventListener("click", function (e) {
      if (!homeBtn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("countdown-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const occasionInput = document.getElementById("event-name").value;
      if (occasionInput.trim() !== "") {
        localStorage.setItem("occasion", occasionInput);
        window.location.href = "index.html";
      }
    });
  }
  const occasionDisplay = document.querySelector(".countdown-header-right h3");
  if (occasionDisplay) {
    const storedOccasion = localStorage.getItem("occasion");
    if (storedOccasion) {
      occasionDisplay.innerHTML = `Countdown To Your <span class="highlights">${storedOccasion}!</span>`;
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const image = document.getElementById("balloons");
  
  if (image) {
    image.addEventListener("click", function () {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*";

      fileInput.addEventListener("change", function (e) {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();

          reader.onload = function (event) {
            const img = new Image();
            img.onload = function () {
              if (this.width > 500 || this.height > 500) {
                alert(
                  "Image is too large! Please select an image that is 300px or smaller in both width and height."
                );
                return;
              }

              image.src = event.target.result;
            };
            img.src = event.target.result;
          };

          reader.readAsDataURL(file);
        }
      });

      fileInput.click();
    });
  }
});
/*function startConfetti() {
      const duration = 30 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = {
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 0,
        particleCount: 200,
        origin: { y: 0.6 },
      };
      const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
        const particleCount = 50 * (timeLeft / duration);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: Math.random() * 0.8 + 0.1, y: Math.random() - 0.2 }
        });
      }, 250);
    }*/
