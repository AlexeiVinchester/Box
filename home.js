"use strict"

import { onNavigate } from "./route.js";

function home(){
    return `
    <div class="homePage">
        <h1>Home Page</h1>
        <button type="button" id="edit-profile-button">Edit profile</button>
    </div>`;
}

export class HomePage{
    
    constructor(){
        this.content = home();
    }

    render(){
        return this.content;
    }

    onInit(){
        const editProfileButton = document.getElementById('edit-profile-button');
        editProfileButton.addEventListener('click', function(event){
            event.preventDefault();
            onNavigate('/home/edit');
        });
    }
}