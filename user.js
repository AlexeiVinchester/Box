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