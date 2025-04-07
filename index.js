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
