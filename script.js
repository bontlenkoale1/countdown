const homeBtn = document.getElementById("home-btn");
const dropdown = document.querySelector(".dropdown");
const form = document.getElementById("countdown-form");
const occasionInput = document.getElementById("event-name");
const occasionDisplay = document.querySelector(".countdown-header-right h3");
const storedOccasion = localStorage.getItem("occasion");

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


document.addEventListener("DOMContentLoaded", function(){
  const form = document.getElementById("countdown-form");
  if (form){
    form.addEventListener("submit", function(event){
      event.preventDefault();

      const occasionInput = document.getElementById("event-name").value;
      if(occasionInput.trim() !== ""){
        localStorage.setItem("occasion", occasionInput);
        window.location.href = "index.html";
      };
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