const subscribe = document.querySelector("#subscribe");
const sectionSignUp = document.querySelector(".signUp");
const emailDisplay = document.querySelector(".email");
const emailInput = document.querySelector(".emailInput");
const successDisplay = document.querySelector(".success-display");
const emailSuccess = document.querySelector(".successEmail");
const dismiss = document.querySelector("#dismiss");
const errMsg = document.querySelector(".errMsg");
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function handleSub(e) {
  e.preventDefault();
  if (emailInput.value && emailInput.value.match(validRegex)) {
    sectionSignUp.classList.add("hide");
    successDisplay.classList.add("show");
    emailSuccess.textContent = emailInput.value;
  } else {
    errMsg.textContent = "Valid email required";
    errMsg.style.color = "hsl(4, 100%, 67%)";
    emailInput.classList.add("errStyle");
  }
}

function handleDismiss(e) {
  e.preventDefault();
  sectionSignUp.classList.remove("hide");
  successDisplay.classList.remove("show");
  emailInput.value = "";
}

function handleInput(e) {
  e.preventDefault();
  errMsg.textContent = "";
  emailInput.classList.remove("errStyle");
}

subscribe.addEventListener("click", handleSub);
emailInput.addEventListener("input", handleInput);
dismiss.addEventListener("click", handleDismiss);
