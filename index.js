function showCountdownEndMessage() {
  const message = localStorage.getItem("countdownMessage");
  const header = document.querySelector(".countdown-header-right");
  const messageContainer = document.getElementById("messageContainer");
  const contentContainer = document.querySelector(".countdown-content-container");

  if (message) {
    const wordCount = message.trim().split(/\s+/).length;

    if (wordCount === 4) {
      alert("The message is long (4 words).3 words or less are allowed.");
      return; // Exit the function to stop further processing
    }

    if (header) header.innerHTML = `<h2>${message}</h2>`;

    if (messageContainer) {
      messageContainer.textContent = message;
      messageContainer.classList.remove("hidden");
      messageContainer.style.textAlign = "left";
      messageContainer.style.fontSize = "18px";
      messageContainer.style.alignItems = "baseline";
      messageContainer.style.justifyContent = "left";
    }

    if (contentContainer) {
      contentContainer.style.alignItems = "baseline";
      contentContainer.style.justifyContent = "left";
      contentContainer.style.marginLeft = "-60px";
      contentContainer.style.marginTop = "150px";
    }

    if (typeof startConfetti === "function") {
      startConfetti(() => {
        resetCountdownMessage();
      });
    }
  }
}






function resetCountdownMessage() {
    localStorage.removeItem("countdownMessage");
  
    const headerContainer = document.querySelector(".countdown-header-right");
    const messageContainer = document.getElementById("messageContainer");
    const contentContainer = document.querySelector(".countdown-content-container");
  
    if (headerContainer) {
      headerContainer.innerHTML = `
        <h2>
          Count<span class="hightlight">down</span>
          <img src="images/hourglass (1).png" alt="" id="hour-glass-icon" />
        </h2>
        <h3>
          Countdown to your <span class="highlights">special day</span>
        </h3>
      `;
    }
  
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