"use strict"

import User from "./user.js";
import * as validation from "./validationForm.js";
import { onNavigate } from "./route.js";
import { saveNewUser } from "./services/user.services.js";

function registrationHTML(){
    return `
            <div class="container-input flexColumn">
                <div class="button-container">
                    <button id="login-button" type="button" class="toggle-button">Log In</button>
                    <button id="registration-button" type="button" class="toggle-button active-button">Register</button>
                </div>

                <div class="form-container" id="form-container">
                    <form id="registration-form" class="flexColumn">
                        <div class="flexColumn">
                            <div class="input-container">
                                <input type="text" id="registration-username" class="input-field" placeholder="Username" required>
                                <span id="registration-username-error"></span>
                            </div>
                            <div class="input-container">
                                <input id="registration-phone" type="text" class="input-field" placeholder="User telephone" required>
                                <span id="registration-phone-error"></span>
                            </div>
                            <div class="input-container">
                                <input type="text" id="registration-password" class="input-field" placeholder="Password" required>
                                <span id="registration-password-error"></span>
                            </div>
                            <button type="submit" id="registration-submit-button" class="submit-button">Register</button>
                        </div>
                    </form>
                </div>
            </div>
            `;
}

export class UserRegistration extends User{

    constructor(){
        super(registrationHTML());
    }

    render(){
        console.log('New user wants to register');
        return super.render();
    }

    onInit(){
        super.onInit();
        validation.validateRegistrationForm(); 
        const registrationSubmitButton = document.getElementById('registration-submit-button');
        registrationSubmitButton.addEventListener('click', function(event){
            const login= document.getElementById('registration-username').value;
            const password = document.getElementById('registration-password').value;
            saveNewUser(login, password);
            onNavigate('/home');
        });
    }
}