document.getElementById("countdown-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const eventName = document.getElementById("event-name").value.trim();
  const eventDate = document.getElementById("event-date").value;
  const customMessage = document.getElementById("custom-message").value.trim();

  if (!eventName || !eventDate) {
    alert("Please fill out all required fields.");
    return;
  }

  const countdownData = {
    eventName,
    eventDate,
    customMessage,
  };

  localStorage.setItem("activeCountdown", JSON.stringify(countdownData));
  window.location.href = "index.html";
});

document.getElementById("delete-btn").addEventListener("click", function () {
  localStorage.removeItem("activeCountdown");
  alert("Countdown deleted.");
});



//occasion display

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
});


// custom message 

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
})
