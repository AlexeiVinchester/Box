"use strict"

import { onNavigate } from "./route.js";
import * as validation from "./validationForm.js"

const loginToggleButton = document.getElementById('login-button');
const registrationToggleButton = document.getElementById('registration-button');

function chooseLoginForm(){
    registrationToggleButton.style.color = 'rgb(0, 0, 0)';
    registrationToggleButton.style.background = 'white';
    loginToggleButton.style.color = 'white';
    loginToggleButton.style.background = 'linear-gradient(to right, rgb(51, 106, 195), rgb(52, 199, 52))';
}

function chooseRegistrationForm(){
    registrationToggleButton.style.color = 'white';
    registrationToggleButton.style.background = 'linear-gradient(to right, rgb(51, 106, 195), rgb(52, 199, 52))';
    loginToggleButton.style.color = 'rgb(0, 0, 0)';
    loginToggleButton.style.background = 'white';
}

async function getForm(func){
    func();
}

loginToggleButton.addEventListener('click', (event) => {
    event.preventDefault();
    onNavigate('/login');

    getForm(chooseLoginForm)
        .then(() => validation.validateLoginForm())
        .catch((error) => console.log(`Error: ${error.name}, message: ${message.name}`));
});

registrationToggleButton.addEventListener('click', event => {
    event.preventDefault(); 
    onNavigate('/registration');

    getForm(chooseRegistrationForm)
        .then(() => validation.validateRegistrationForm())
        .catch((error) => console.log(`Error: ${error.name}, message: ${message.name}`));
});

