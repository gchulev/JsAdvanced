function validate() {
    let emailInputField = document.querySelector('input#email');
    emailInputField.addEventListener('change', () => {
        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        let emailToValidate = emailInputField.value;

        if (emailToValidate.match(pattern)) {
            emailInputField.classList.remove('error');
        } else {
            emailInputField.classList.add('error');
        }
    });
}