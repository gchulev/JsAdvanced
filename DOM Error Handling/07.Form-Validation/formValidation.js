function validate() {
    let form = document.getElementById('registerForm');

    let companyChecked = form.querySelector('input#company').checked;
    let companyInfoCheckBox = form.querySelector('input#company');
    companyInfoCheckBox.addEventListener('change', (e) => {

        if (e.target.checked) {
            form.querySelector('fieldset#companyInfo').style.display = 'block';
        } else {
            form.querySelector('fieldset#companyInfo').style.display = 'none';
        }
        companyChecked = form.querySelector('input#company').checked
    });

    let userName = form.querySelector('input#username');

    let password = form.querySelector('input#password');
    let confirmPassword = form.querySelector('input#confirm-password');

    let emailInput = form.querySelector('input#email');

    let companyInfoInput = form.querySelector('input#companyNumber');

    let submitBtn = form.querySelector('button#submit');
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        totalVlaidation();
    });

    function validateUsername() {
        let pattern = /^[a-zA-Z0-9]{3,20}$/;
        let isValid;
        let matchResult = userName.value.match(pattern);
        matchResult === null ? matchResult = [] : matchResult;

        if (matchResult.includes(userName.value)) {
            userName.style.border = 'none';
            isValid = true;
        } else {
            isValid = false;
            userName.style.cssText = 'border-color: red';
        }
        return isValid;
    }

    function validatePasswordFields() {
        let pattern = /^\w{5,15}$/;
        let isValid = false;

        if (password.value.match(pattern) && confirmPassword.value.match(pattern) && password.value === confirmPassword.value) {
            password.style.cssText = 'border: none';
            confirmPassword.style.cssText = 'border: none';
            isValid = true;
        } else {
            password.style.cssText = 'border-color: red';
            confirmPassword.style.cssText = 'border-color: red';
        }
        return isValid;
    }

    function validateEmail() {
        let pattern = /[0-9A-z]+@([0-9A-z]*\.[0-9A-z]*)+/;
        let isValid;
        let matchedResult = emailInput.value.match(pattern);
        matchedResult === null ? matchedResult = [] : matchedResult;

        if (matchedResult.includes(emailInput.value)) {
            emailInput.style.cssText = 'border: none';
            isValid = true;
        } else {
            emailInput.style.cssText = 'border-color: red';
            isValid = false;
        }
        return isValid;
    }

    function validateCompanyInformation() {
        if (companyChecked) {

            if (companyInfoInput.value >= 1000 && companyInfoInput.value <= 9999) {
                companyInfoInput.style.cssText = 'border: none'
                return true;
            } else {
                companyInfoInput.style.cssText = 'border-color: red';
                return false;
            }
        }
    }

    function totalVlaidation() {
        let isValidUsername = validateUsername();
        let isValidEmail = validateEmail();
        let isValidPassword = validatePasswordFields();
        let isValidCompanyInfo = true;

        if (companyChecked) {
            isValidCompanyInfo = validateCompanyInformation();
        }

        if (isValidUsername && isValidEmail && isValidPassword && isValidCompanyInfo) {
            document.querySelector('div#valid').style.display = 'block';
        } else {
            document.querySelector('div#valid').style.display = 'none';
        }
    }
}