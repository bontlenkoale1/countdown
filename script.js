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
  console.log("DOM fully loaded");
  

  const form = document.getElementById("countdown-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("Form submitted");

      const occasionInput = document.getElementById("event-name").value;
      if (occasionInput.trim() !== "") {
        console.log("Storing occasion:", occasionInput); 
        localStorage.setItem("occasion", occasionInput);
        window.location.href = "index.html";
      }
    });
  }
})


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
