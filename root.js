"use strict"

import newHTML from "./user.js";
import { onNavigate } from "./route.js";

function rootHTML(){
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

export class RootPage extends newHTML{

    constructor(){
        super(rootHTML());
    }

    render(){
        console.log('Root page');
        return super.render();
    }

}