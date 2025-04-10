function startCountdown(targetDate, customMessage) {
  const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = new Date(targetDate).getTime() - now;

    if (distance <= 0) {
      clearInterval(countdownInterval);
      startConfetti();
      document.getElementById("messageContainer").classList.remove("hidden");
      document.getElementById("messageContainer").textContent = customMessage || "🎉 Time's up!";
      
      
      localStorage.removeItem("occasion");

      const occasionDisplay = document.querySelector(".countdown-header-right h3");
      if (occasionDisplay) {
        occasionDisplay.innerHTML = `Countdown to your <span class="highlights">special day</span>`;
      }    
      return;
    }

    const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("year").textContent = String(years).padStart(2, "0");
    document.getElementById("months").textContent = String(months).padStart(2, "0");
    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  }, 1000);
  
}

window.addEventListener("DOMContentLoaded", () => {
  const countdownData = JSON.parse(localStorage.getItem("activeCountdown"));

  if (countdownData && countdownData.eventDate) {
    startCountdown(countdownData.eventDate, countdownData.customMessage);
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const occasionDisplay = document.querySelector(".countdown-header-right h3");
  
  if (occasionDisplay) {
  
    const storedOccasion = localStorage.getItem("occasion");

    if (storedOccasion) {
     
      occasionDisplay.innerHTML = `Countdown To Your <span class="highlights">${storedOccasion}!</span>`;
    } else {
      
      occasionDisplay.innerHTML = `Countdown to your <span class="highlights">special day</span>`;
    }
  }
  
});


// Confetti animation
function startConfetti(onComplete) {
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
  
  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      clearInterval(interval);
      if (onComplete) onComplete();
      return;
    }
    const particleCount = 50 * (timeLeft / duration);
    confetti({
      ...defaults,
      particleCount,
      origin: { x: Math.random() * 0.8 + 0.1, y: Math.random() - 0.2 },
    });
  }, 250);
}

// dark mode 

document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("toggleSwitch");
  const container = document.querySelector(".container");

  // Set mode based on localStorage
  if (localStorage.getItem("darkMode") === "true") {
    container.classList.add("dark-mode");
    toggleSwitch.classList.replace("fa-toggle-off", "fa-toggle-on");
  }

  toggleSwitch.addEventListener("click", () => {
    container.classList.toggle("dark-mode");

    const isDark = container.classList.contains("dark-mode");
    toggleSwitch.classList.toggle("fa-toggle-on", isDark);
    toggleSwitch.classList.toggle("fa-toggle-off", !isDark);

    localStorage.setItem("darkMode", isDark);
  });
});
