"use strict";

export function addCheckIcon(tagname) {
    tagname.innerHTML = '<i class="fas fa-check-circle"></i>';
}

export function isUserNameValid(tagId, errorId) {
    const tagForError = document.getElementById(errorId);
    const name = document.getElementById(tagId).value;

    if (name.length == 0) {
        tagForError.innerHTML = 'Name is required!';
        return false;
    }
    if (!name.match(/^[A-Za-z]*$/)) {
        tagForError.innerHTML = 'Write full Name';
        return false;
    }

    addCheckIcon(tagForError);
    return true;
}

export function isPhoneValid() {
    const regPhoneError = document.getElementById('registration-phone-error');
    const telNumber = document.getElementById('registration-phone').value;

    if (telNumber.length == 0) {
        regPhoneError.innerHTML = 'Phone number is required!';
        return false;
    }
    if (telNumber.length < 12) {
        regPhoneError.innerHTML = 'Number should be longer!';
        return false;
    }
    if (telNumber.length > 12) {
        regPhoneError.innerHTML = 'Number should be shorter!';
        return false;
    }
    if (!telNumber.match(/^[\d]{1,12}$/)) {
        regPhoneError.innerHTML = 'Only digits, please!';
        return false;
    }

    addCheckIcon(regPhoneError);
    return true;
}

export function isPasswordValid(tagId, errorId) {
    const password = document.getElementById(tagId).value;
    const tagForError = document.getElementById(errorId);

    if (password.length == 0) {
        tagForError.innerHTML = 'Password is required!';
        return false;
    }
    if (!password.match(/^[A-Za-z\d]{8,}$/)) {
        tagForError.innerHTML = 'Incorrect password';
        return false;
    }

    addCheckIcon(tagForError);
    return true;

}

export function isLoginFormValid() {
    return isUserNameValid('login-username', 'login-username-error') &&
        isPasswordValid('login-password', 'login-password-error');
}

export function isRegistrationFormValid() {
    return isUserNameValid('registration-username', 'registration-username-error') &&
        isPasswordValid('registration-password', 'registration-password-error') &&
        isPhoneValid()
}

export function validateLoginForm() {
    const loginUserName = document.getElementById('login-username');
    const loginPassword = document.getElementById('login-password');
    const loginSubmitButton = document.getElementById('login-submit-button');

    loginUserName.addEventListener('keyup', event => {
        isUserNameValid('login-username', 'login-username-error');
    });

    loginPassword.addEventListener('keyup', event => {
        isPasswordValid('login-password', 'login-password-error');
    });

    loginSubmitButton.addEventListener('click', event => {
        return isLoginFormValid()
    });
}

export function validateRegistrationForm() {
    const registrationUserName = document.getElementById('registration-username');
    const registrationPhone = document.getElementById('registration-phone');
    const registrationPassword = document.getElementById('registration-password');
    const registrationSubmitButton = document.getElementById('registration-submit-button');

    registrationUserName.addEventListener('keyup', event => {
        isUserNameValid('registration-username', 'registration-username-error');
    });

    registrationPhone.addEventListener('keyup', event => {
        isPhoneValid();
    });

    registrationPassword.addEventListener('keyup', event => {
        isPasswordValid('registration-password', 'registration-password-error');
    });

    registrationSubmitButton.addEventListener('click', event => {
        return isRegistrationFormValid();
    });
}
