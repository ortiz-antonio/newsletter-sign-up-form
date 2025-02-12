const success = document.getElementById('success');
const form = document.getElementById('subscribe');
const inputEmail = document.getElementById('email');
const submitBtn = document.getElementById('submit');

inputEmail?.addEventListener('input', () => {
    inputEmail.setCustomValidity(''); // Clear any previous validation message
    inputEmail.checkValidity(); // Re-check validity
});

form?.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    if (validateEmail(data.email)) {
        submitBtn.setAttribute('aria-expanded', 'true');
        inputEmail.setAttribute('aria-invalid', 'false');

        success.showModal();
    } else {
        inputEmail.focus();
        inputEmail.setAttribute('aria-invalid', 'true');
        inputEmail.setCustomValidity("Invalid email format.");
        form.reportValidity();
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