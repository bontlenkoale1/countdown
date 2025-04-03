function showCountdownEndMessage() {
    const message = localStorage.getItem("countdownMessage");
    const header = document.querySelector(".countdown-header-right");
    const messageContainer = document.getElementById("messageContainer");
    const contentContainer = document.querySelector(".countdown-content-container");
  
    if (message) {
     
      if (header) header.innerHTML = `<h2>${message}</h2>`;
  
     
      if (messageContainer) {
        messageContainer.textContent = message;
        messageContainer.classList.remove("hidden");
        messageContainer.style.textAlign = "left";
        messageContainer.style.alignItems = "baseline";
        messageContainer.style.justifyContent = "left";
      }
    
      if (contentContainer) {
        contentContainer.style.alignItems = "baseline";
        contentContainer.style.justifyContent = "left";
        contentContainer.style.marginLeft = "-80px";
        contentContainer.style.marginTop = "150px";
      }
  
     
      if (typeof startConfetti === "function") startConfetti();
    }
  }
  
 
  document.addEventListener("DOMContentLoaded", showCountdownEndMessage);


 function startConfetti() {
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
  }
