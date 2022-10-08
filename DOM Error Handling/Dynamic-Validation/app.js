function validate() {
    let emailInputField = document.querySelector('input#email');
    emailInputField.addEventListener('change', () => {
        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        let emailToValidate = emailInputField.value;

        let regex = RegExp(pattern);
        let isMatch = regex.test(emailToValidate);

        if (emailToValidate.match(pattern)) {
            emailInputField.classList.remove('error');
        } else {
            emailInputField.classList.add('error');
        }
    });
}