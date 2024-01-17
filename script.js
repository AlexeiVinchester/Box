"use strict"

import { onNavigate } from "./route.js";
import * as validation from "./validationForm.js"

const loginToggleButton = document.getElementById('login-button');
const registrationToggleButton = document.getElementById('registration-button');

loginToggleButton.addEventListener('click', event => {
    event.preventDefault();
    onNavigate('/login');
    validation.validateLoginForm(); 
    const loginSubmitButton = document.getElementById('login-submit-button');
    loginSubmitButton.addEventListener('click', function(event){
        onNavigate('/home')
    });
});

registrationToggleButton.addEventListener('click', event => {
    event.preventDefault(); 
    onNavigate('/registration');
    validation.validateRegistrationForm();
    const registrationSubmitButton = document.getElementById('registration-submit-button');
    registrationSubmitButton.addEventListener('click', function(event){
        onNavigate('/home')
    });
});





