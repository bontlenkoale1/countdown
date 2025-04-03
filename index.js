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
        messageContainer.style.fontSize = "18px";
        messageContainer.style.alignItems = "baseline";
        messageContainer.style.justifyContent = "left";
//messageContainer.style.marginLeft = "-280px";
      }
    
      if (contentContainer) {
        contentContainer.style.alignItems = "baseline";
        contentContainer.style.justifyContent = "left";
        contentContainer.style.marginLeft = "-250px";
        contentContainer.style.marginTop = "150px";
      }
  
     
      if (typeof startConfetti === "function")
         startConfetti(() => {
        resetCountdownMessage();
         });
    }
    }
  function resetCountdownMessage() {
    localStorage.removeItem("countdownMessage");


    const header = document.querySelector(".countdown-header-right");
    const messageContainer = document.getElementById("messageContainer");
    const contentContainer = document.querySelector(".countdown-content-container");
  
    if (header) header.innerHTML = '<h3>Countdown To Your <span class="highlights">Special Day!</span></h3>';
    if (messageContainer) {
      messageContainer.textContent = "";
      messageContainer.classList.add("hidden");
        messageContainer.style = "";
    }
    if (contentContainer) {
      contentContainer.style = "";
    }
}
  
 
  

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
    const interval = setInterval(function () {
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
        origin: { x: Math.random() * 0.8 + 0.1, y: Math.random() - 0.2 }
      });
    }, 250);
  }


  document.addEventListener("DOMContentLoaded", showCountdownEndMessage);
