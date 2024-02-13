"use strict";

import { onNavigate } from "./router.js";
import { BasePage } from "./basePage.js";
import { logOutUser } from "./services/user.services.js";


export class HomePage extends BasePage {

    render() {
        return `
                <div class="homePage">
                    <h1>Home Page</h1>
                    <button type="button" id="edit-profile-button">Edit profile</button>
                    <button type="button" id="log-out-button"> Log out</button>
                </div>`;
    }

    onInit() {
        const editProfileButton = document.getElementById('edit-profile-button');
        editProfileButton.addEventListener('click', event => {
            event.preventDefault();
            onNavigate('/home/edit');
        });

        const logOutButton = document.getElementById('log-out-button');
        logOutButton.addEventListener('click', event => {
            logOutUser();
            onNavigate('/login');
        });
    }
}