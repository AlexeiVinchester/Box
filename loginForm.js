"use strict"

import User from "./user.js";
import * as validation from "./validationForm.js";
import { onNavigate } from "./route.js";
import { isUserExist } from "./services/user.services.js";

function loginHtml(){
    return `
            <div class="container-input flexColumn">
                <div class="button-container">
                    <button id="login-button" type="button" class="toggle-button active-button">Log In</button>
                    <button id="registration-button" type="button" class="toggle-button">Register</button>
                </div>
                <div class="form-container" id="form-container">
                    <form id="login-form" class="flexColumn">
                        <div class="flexColumn">
                            <div class="input-container">
                                <input type="text" id="login-username" class="input-field" placeholder="Username" required>
                                <span id="login-username-error"></span>
                            </div>
                            <div class="input-container">
                                <input type="text" id="login-password" class="input-field" placeholder="Password" required>
                                <span id="login-password-error"></span>
                            </div>
                            <button type="submit" id="login-submit-button" class="submit-button">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
}

export class UserLogin extends User{

    constructor(){
        super(loginHtml());
    }

    render(){
        console.log('New user wants to login');
        return super.render();
    }

    static createErrorMessage(){
        const message = document.createElement('div');
        message.className = 'error-message';
        message.innerHTML = 'Invalid login or password. Try again!';
        return message;
    }

    onInit(){
        super.onInit();
        validation.validateLoginForm();
        const loginSubmitButton = document.getElementById('login-submit-button');
        loginSubmitButton.addEventListener('click', function(event){
            event.preventDefault();
            const login = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;
            if(isUserExist(login, password)){
                onNavigate('/home');
            } else {
                const message = UserLogin.createErrorMessage();
                loginSubmitButton.before(message);
                setTimeout(() => message.remove(), 1000);
            }
        });
    }
}

/*
    добавить local Storage
    создать папку servises
    в ней создать файл user.servises.js
    посмотреть у гугле, как с этим работать и как это делается
*/

