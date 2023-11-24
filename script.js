const loginToggleButton = document.getElementById('login-button');
const registrationToggleButton = document.getElementById('registration-button');
const loginForm = document.getElementById('login-form');
const registrationForm = document.getElementById('registration-form');


function chooseLoginForm(){
    registrationToggleButton.style.color = 'rgb(0, 0, 0)';
    registrationToggleButton.style.background = 'transparent';
    loginToggleButton.style.color = 'white';
    loginToggleButton.style.background = 'linear-gradient(to right, rgb(51, 106, 195), rgb(52, 199, 52))';
    registrationForm.style.display = 'none';
    loginForm.style.display = 'block';

}

function chooseRegistrationForm(){
    registrationToggleButton.style.color = 'white';
    registrationToggleButton.style.background = 'linear-gradient(to right, rgb(51, 106, 195), rgb(52, 199, 52))';
    loginToggleButton.style.color = 'rgb(0, 0, 0)';
    loginToggleButton.style.background = 'white';
    loginForm.style.display = 'none';
    registrationForm.style.display = 'block';
}

const onNavigate = (pathname) => {
    window.history.pushState(
        {}, 
        pathname,
        window.location.origin + pathname);
};

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
