"use strict"

export function addCheckIcon(tagname){
    tagname.innerHTML = '<i class="fas fa-check-circle"></i>';
}

export function isValidUserName(tagId, errorId){
    const tagForError = document.getElementById(errorId);
    const name = document.getElementById(tagId).value;

    if(name.length == 0){
        tagForError.innerHTML = 'Name is required!';
        return false;
    }
    if(!name.match(/^[A-Za-z]*$/)){
        tagForError.innerHTML = 'Write full Name';
        return false;
    }

    addCheckIcon(tagForError);
    return true;
}

export function isValidPhone(){
    const regPhoneError = document.getElementById('registration-phone-error');
    const telNumber = document.getElementById('registration-phone').value;

    if(telNumber.length == 0){
        regPhoneError.innerHTML = 'Phone number is required!';
        return false;
    }
    if(telNumber.length < 12){
        regPhoneError.innerHTML = 'Number should be longer!';
        return false;
    }
    if(telNumber.length > 12){
        regPhoneError.innerHTML = 'Number should be shorter!';
        return false;
    }
    if(!telNumber.match(/^[\d]{1,12}$/)){
        regPhoneError.innerHTML = 'Only digits, please!';
        return false;
    }

    addCheckIcon(regPhoneError);
    return true;
}

export function isValidPassword(tagId, errorId){
    const password = document.getElementById(tagId).value;
    const tagForError = document.getElementById(errorId);

    if(password.length == 0){
        tagForError.innerHTML = 'Password is required!';
        return false;
    }
    if(!password.match(/^[A-Za-z\d]{8,}$/)){
        tagForError.innerHTML = 'Incorrect password';
        return false;
    }

    addCheckIcon(tagForError);
    return true;

}

export function isValidLoginForm(){
    if(!isValidUserName('login-username', 'login-username-error') ||
        !isValidPassword('login-password', 'login-password-error')){
            return false;
        } else{
            return true;
        }
}

export function isValidRegistrationForm(){
    if(!isValidUserName('registration-username', 'registration-username-error') ||
        !isValidPassword('registration-password', 'registration-password-error') ||
        !isValidPhone()){
            return false;
        } else{
            return true;
        }
}
/*
loginUserName.addEventListener('keyup', event => {
    isValidUserName('login-username', 'login-username-error');
});

loginPassword.addEventListener('keyup', event => {
    isValidPassword('login-password', 'login-password-error');
});

loginSubmitButton.addEventListener('click', event => {
    return isValidLoginForm()
});

registrationUserName.addEventListener('keyup', event => {
    isValidUserName('registration-username', 'registration-username-error');
});

registrationPhone.addEventListener('keyup', event => {
    isValidPhone();
});

registrationPassword.addEventListener('keyup', event => {
    isValidPassword('registration-password', 'registration-password-error');
});

registrationSubmitButton.addEventListener('click', event => {
    return isValidRegistrationForm();
});*/