const success = document.getElementById('success');
const form = document.getElementById('subscribe');
const inputEmail = document.getElementById('email');
const submitBtn = document.getElementById('submit');

form?.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    if (validateEmail(data.email)) {
        // inputEmail.classList.remove("invalid");
        submitBtn.setAttribute('aria-expanded', 'true');
        success.showModal();
    } else {
        inputEmail.focus();
        inputEmail.setCustomValidity("Invalid email format.");
    }

})

const btnDismiss = document.querySelector('#dismiss');

btnDismiss.addEventListener('click', (event) => {
    success.close()
    submitBtn.setAttribute('aria-expanded', 'false')
})

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}