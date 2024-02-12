"use strict"

import { onNavigate } from "./router.js";

export class HomePage {

    render() {
        return `
                <div class="homePage">
                    <h1>Home Page</h1>
                    <button type="button" id="edit-profile-button">Edit profile</button>
                </div>`;
    }

    onInit() {
        const editProfileButton = document.getElementById('edit-profile-button');
        editProfileButton.addEventListener('click', event => {
            event.preventDefault();
            onNavigate('/home/edit');
        });
    }
}