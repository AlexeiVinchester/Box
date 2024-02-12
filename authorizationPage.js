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

    1. Сделать возврат с homePage на логирование
    2. Попробовать вернуться, но чтобы не пускало
    +3. Сделать кнопку для эдита профиля
    +4. Перейти на новую страницу после кнопки
    5. Попробовать заменить кнопки ссылками
    6. Попробовать реализовать абстрактный класс
    7. Настроить сервер на обновление любой страницы
    

*/