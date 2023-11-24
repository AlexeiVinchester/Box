import { onNavigate } from "./route.js";

const loginToggleButton = document.getElementById('login-button');
const registrationToggleButton = document.getElementById('registration-button');
const loginUserName = document.getElementById('login-username');
const loginPassword = document.getElementById('login-password');
const loginSubmitButton = document.getElementById('login-submit-button');
const registrationUserName= document.getElementById('registration-username');
const registrationPhone = document.getElementById('registration-phone');
const registrationPassword = document.getElementById('registration-password');
const registrationSubmitButton = document.getElementById('registration-submit-button');
const loginForm = document.getElementById('login-form');
const registrationForm = document.getElementById('registration-form');


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

loginToggleButton.addEventListener('click', (event) => {
    event.preventDefault();
    chooseLoginForm();
    onNavigate('/login');
});

registrationToggleButton.addEventListener('click', event => {
    event.preventDefault();
    chooseRegistrationForm();
    onNavigate('/registration');
});

