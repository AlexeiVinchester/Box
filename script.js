"use strict"

import { onNavigate } from "./route.js";
import * as validation from "./validationForm.js"

const loginToggleButton = document.getElementById('login-button');
const registrationToggleButton = document.getElementById('registration-button');

function chooseLoginForm(){
    registrationToggleButton.className = 'choosed-login-form-registration-toggle-button';
    loginToggleButton.className = 'choosed-login-form-login-toggle-button';
}

function chooseRegistrationForm(){
    registrationToggleButton.className = 'choose-registration-form-registration-toggle-button';
    loginToggleButton.className = 'choose-registration-form-login-toggle-button';
}

loginToggleButton.addEventListener('click', event => {
    event.preventDefault();
    onNavigate('/login');
    chooseLoginForm();
    validation.validateLoginForm(); 
    const loginSubmitButton = document.getElementById('login-submit-button');
    loginSubmitButton.addEventListener('click', function(event){
        onNavigate('/home')
    });
});

registrationToggleButton.addEventListener('click', event => {
    event.preventDefault(); 
    onNavigate('/registration');
    chooseRegistrationForm();
    validation.validateRegistrationForm();
    const registrationSubmitButton = document.getElementById('registration-submit-button');
    registrationSubmitButton.addEventListener('click', function(event){
        onNavigate('/home')
    });
});





