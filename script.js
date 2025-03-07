//const sidebar = document.querySelector(".sidebar");
//const closeBtn = document.querySelector(".close-btn");
//const toggleBtn = document.querySelector(".sidebar-toggle");
//const homeBtn = document.getElementById("home-btn");
//const homeListItem = homeBtn.parentElement;-->




document.addEventListener("DOMContentLoaded", function () {
    const homeBtn = document.getElementById("home-btn");
    const homeListItem = homeBtn.parentElement;
  
    homeBtn.addEventListener("click", function (event) {
      event.preventDefault(); 
      homeListItem.classList.toggle("active");
    });
  });
  