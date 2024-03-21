const submitButton = document.querySelector(".submit-button");
const contactForm = document.querySelector(".contact-form");

submitButton.addEventListener("click", validation);

function validation(event) {
    event.preventDefault();
    let isValid = true;
    const inputs = document.querySelectorAll(".input");
    inputs.forEach((input) => {
      if (input.value === "") {
        input.style.color = "#FF0000";
        input.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
        isValid = false;
      }
    });
    if (isValid) {
      contactForm.submit();
    }
  }
  
  // welche validierungen brauche ich genua
  // wie submite ich das ganze am Ende