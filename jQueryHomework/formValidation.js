function validate() {

    let submit = $('#submit');

    submit.click(validation);

    let isChecked = false;
    let isValid = true;

    let companyBox = $('#company');
    companyBox.click(function () {
        if (isChecked === false) {
            isChecked = true;
            $('#companyInfo').css('display', 'block');
        }
        else {
            isChecked = false;
            $('#companyInfo').css('display', 'none');
        }
    });

    function validation(event) {
        let username = $('#username');
        let password = $('#password');
        let confPassword = $('#confirm-password');
        let email = $('#email');

        let usernamePattern = /^[a-zA-Z\d]{3,20}$/g;
        let passPattern = /^[a-zA-Z0-9_]{5,15}$/g;
        let emailPattern = /.*@.*\.{1,}/g;

        let usernameMatch = username.val().match(usernamePattern);
        if (usernameMatch === null) {
            username.css('border-color', 'red');
            isValid = false;
        }

        let passMatch = password.val().match(passPattern);
        if (passMatch === null) {
            password.css('border-color', 'red');
            isValid = false;
        }

        let confPassMatch = confPassword.val().match(passPattern);
        if (confPassMatch === null) {
            confPassword.css('border-color', 'red');
            isValid = false;
        }

        let emailMatch = email.val().match(emailPattern);
        if (emailMatch === null) {
            email.css('border-color', 'red');
            isValid = false;
        }

        if (password.val() !== confPassword.val()) {
            password.css('border-color', 'red');
            confPassword.css('border-color', 'red');
            isValid = false;
        }

        if (isChecked) {
            console.log('yes');
            let companyNumber = $('#companyNumber');
            if (Number(companyNumber.val()) < 1000 || Number(companyNumber.val()) > 9999 || companyNumber.val() === '') {
                companyNumber.css('border-color', 'red');
                isValid = false;
            }
        }

        if (isValid) {
            $('#valid').css('display', 'block');
        }
        else
            $('#valid').css('display', 'none');
    }



}
