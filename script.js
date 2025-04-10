// dropdown menu

const homeBtn = document.getElementById("home-btn");
const dropdown = document.querySelector(".dropdown");

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


// image carousel

document.addEventListener("DOMContentLoaded", function (e) {
  const image = document.getElementById("balloons");
  
  
  const savedImage = localStorage.getItem('customBalloonImage');
  if (savedImage) {
    image.src = savedImage;
  }

  if (image) {
    image.addEventListener("click", function () {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*";

      fileInput.addEventListener("change", function (e) {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();

          reader.onload = function (event) {
            const img = new Image();
            img.onload = function () {
              if (this.width > 500 || this.height > 500) {
                alert(
                  "Image is too large! Please select an image that is 500px or smaller in both width and height."
                );
                return;
              }

             
              localStorage.setItem('customBalloonImage', event.target.result);
              image.src = event.target.result;
            };
            img.src = event.target.result;
          };

          reader.readAsDataURL(file);
        }
      });

      fileInput.click();
    });
  }
});


function resetBalloonImage() {
  localStorage.removeItem('customBalloonImage');
  document.getElementById("balloons").src = "default-image-path.jpg"; 
}





