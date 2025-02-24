const success = document.getElementById("success");
const form = document.getElementById("subscribe");
const inputEmail = document.getElementById("email");
const submitBtn = document.getElementById("submitBtn");

inputEmail?.addEventListener("blur", (event) => {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  if (validateEmail(data.email)) {
   setValid(inputEmail);
  } else {
    setInvalid(inputEmail);
  }
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  if (validateEmail(data.email)) {
   form.submit();
  } else {
    inputEmail.focus();
    form.reportValidity();
  }
});

function setInvalid(input){
  inputEmail.setAttribute("aria-invalid", "true");
}

function setValid(input){
  inputEmail.setAttribute("aria-invalid", "false");
}

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
