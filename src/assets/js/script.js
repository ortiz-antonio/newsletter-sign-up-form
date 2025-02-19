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
        inputEmail.setAttribute('aria-invalid', 'false');
        window.location.href = 'success';

    } else {
        inputEmail.focus();
        inputEmail.setAttribute('aria-invalid', 'true');
        inputEmail.setCustomValidity("Invalid email format.");
        form.reportValidity();
    }

})

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}