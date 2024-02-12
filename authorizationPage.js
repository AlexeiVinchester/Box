"use strict";

import { onNavigate } from "./router.js";

export function getAuthorizationHTML() {
    return `
            <div class="container-input flexColumn">
                <div class="button-container">
                    <button id="login-button" type="button" class="toggle-button">Log In</button>
                    <button id="registration-button" type="button" class="toggle-button">Register</button>
                </div>
                <h4 class="homePage-text">Please, choose button!</h4>
            </div>    
            `;
}

export class AuthorizationPage {

    render() {
        return getAuthorizationHTML();
    }

    onInit() {
        const loginToggleButton = document.getElementById('login-button');
        loginToggleButton.addEventListener('click', event => {
            event.preventDefault();
            onNavigate('/login');
        });

        const registrationToggleButton = document.getElementById('registration-button');
        registrationToggleButton.addEventListener('click', event => {
            event.preventDefault();
            onNavigate('/registration');
        });
    }
}

/* 

    1. Сделать возврат с homePage на логирование. Попробовать вернуться, но чтобы не пускало
    2. Попробовать реализовать абстрактный класс
    3. Настроить сервер на обновление любой страницы
    4. Разобраться с пропаданием errorMessage

    

*/