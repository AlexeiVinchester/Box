const loginToggleButton = document.getElementById('login-btn');
const registerToggleButton = document.getElementById('register-btn');
const loginForm = document.getElementById('log-in-form');
const registerForm = document.getElementById('register-form');

//variebles for clearing input fields
const loginUserName = document.getElementById('login-username');
const loginUserNameError = document.getElementById('log-username-error');

function chooseLoginForm(){
    registerToggleButton.style.color = 'rgb(0, 0, 0)';
    registerToggleButton.style.background = 'transparent';
    loginToggleButton.style.color = 'white';
    loginToggleButton.style.background = 'linear-gradient(to right, rgb(51, 106, 195), rgb(52, 199, 52))';
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';

}

function chooseRegisterForm(){
    registerToggleButton.style.color = 'white';
    registerToggleButton.style.background = 'linear-gradient(to right, rgb(51, 106, 195), rgb(52, 199, 52))';
    loginToggleButton.style.color = 'rgb(0, 0, 0)';
    loginToggleButton.style.background = 'white';
    loginForm.style.display = 'none';
    registerForm.style.display = 'block'
    
    //try to clear input fields by toggling button Log In and Register
    loginUserName.value = '';
}

const onNavigate = (pathname) => {
    window.history.pushState(
        {}, 
        pathname,
        window.location.origin + pathname)
};

loginToggleButton.addEventListener('click', (event) => {
    event.preventDefault();
    chooseLoginForm();
    onNavigate('/login');
});

registerToggleButton.addEventListener('click', event => {
    event.preventDefault();
    chooseRegisterForm();
    onNavigate('/registration');
});
