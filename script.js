const monthsEl = document.getElementById("months");
const hoursEl = document.getElementById("hours");
const daysEl = document.getElementById("days");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const eventName = localStorage.getItem("countdownEventName");
const eventDate = localStorage.getItem("countdownEventDate");
const theme = localStorage.getItem("countdownTheme");
const homeBtn = document.getElementById("home-btn");
const dropdown = document.querySelector(".dropdown");

const customMessage = localStorage.getItem('countdownCustomMessage'); 
document.addEventListener('DOMContentLoaded', function () {
  
  const homeBtn = document.getElementById('home-btn');
  const dropdown = document.querySelector('.dropdown');

  if (homeBtn && dropdown) {
    homeBtn.addEventListener('click', function (e) {
      e.preventDefault(); 
      dropdown.classList.toggle('active');
    });


    document.addEventListener('click', function (e) {
      if (!homeBtn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });
  }
});


if (eventName && eventDate) {
  const countdownDisplay = document.querySelector(
    ".countdown-content-container"
  );
  countdownDisplay.innerHTML = `
   
    <div class="countdown">
      <div class="time-box">
        <span id="days">00</span>
        <div class="label">Days</div>
      </div>
      <div class="time-box">
        <span id="hours">00</span>
        <div class="label">Hours</div>
      </div>
      <div class="time-box">
        <span id="minutes">00</span>
        <div class="label">Minutes</div>
      </div>
      <div class="time-box">
        <span id="seconds">00</span>
        <div class="label">Seconds</div>
      </div>
    </div>
  `;

  const setCountdown = setInterval(() => {
    const now = new Date().getTime();
    const targetDate = new Date(eventDate).getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining > 0) {
      const months = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
      const minutes = Math.floor(timeRemaining / (1000 * 60));
      const seconds = Math.floor(timeRemaining / 1000);

      document.getElementById("months").textContent = String(months).padStart(
        2,
        "0"
      );
      document.getElementById("days").textContent = String(days).padStart(
        2,
        "0"
      );
      document.getElementById("hours").textContent = String(hours).padStart(
        2,
        "0"
      );
      document.getElementById("minutes").textContent = String(minutes).padStart(
        2,
        "0"
      );
      document.getElementById("seconds").textContent = String(seconds).padStart(
        2,
        "0"
      );
    } else {
      clearInterval(countdownInterval);
      countdownDisplay.innerHTML += `<p>Countdown has started!</p>`;
    }
  }, 1000);
}

document.getElementById('countdown-form').addEventListener('submit', function (e) {
  e.preventDefault();

  
  const eventName = document.getElementById('event-name').value;
  const eventDate = document.getElementById('event-date').value;
  const theme = document.getElementById('theme').value;
  const customMessage = document.getElementById('custom-message').value; 
  localStorage.setItem('countdownEventName', eventName);
  localStorage.setItem('countdownEventDate', eventDate);
  localStorage.setItem('countdownTheme', theme);
  localStorage.setItem('countdownCustomMessage', customMessage); 
  window.location.href = 'index.html';
});