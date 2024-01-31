const button = document.querySelector(".btn-platform");
const elementPlatforms = document.querySelector(".btn-platform ul.platforms");

button.addEventListener("click", () => {

   const buttonIsActive = elementPlatforms.classList.contains("active"); 

     if (buttonIsActive) {
        elementPlatforms.classList.remove("active");
     } else {
        elementPlatforms.classList.add("active");
     }
});