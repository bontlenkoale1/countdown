document.addEventListener("DOMContentLoaded", function() {
    const messageInput = document.getElementById("custom-message");
    const createBtn = document.getElementById("createCountdownBtn");
  
    
    const savedMessage = localStorage.getItem("countdownMessage");
    if (savedMessage && messageInput) {
      messageInput.value = savedMessage;
    }
  
    
    if (messageInput) {
      messageInput.addEventListener("input", function() {
        localStorage.setItem("countdownMessage", this.value.trim());
      });
    }
  
 
    if (createBtn) {
      createBtn.addEventListener("click", function() {
        const message = messageInput ? messageInput.value.trim() : "";
        
        if (!message) {
          alert("Please enter a message!");
          return;
        }
  
        localStorage.setItem("countdownMessage", message);
        window.location.href = "index.html"; 
      });
    }
  });