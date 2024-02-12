"use strict"

import { onNavigate } from "./route.js";

export default class User{

    constructor(html){
        this.content = html;
    }

    render(){
        return this.content;
    }

    onInit(){
        const loginButton = document.getElementById('login-button');
        loginButton.addEventListener('click', function(event){
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
    3. Сделать кнопку для эдита профиля
    4. Перейти на новую страницу после кнопки
    5. Попробовать заменить кнопки ссылками
    6. Попробовать реализовать абстрактный класс
    7. Настроить сервер на обновление любой страницы
    

*/