"use strict";

import { BasePage } from "./basePage.js";

export class EditProfilePage extends BasePage {

    render() {
        return "<h5>Try to edit profile</h5>";
    }

    onInit() {
        console.log('Initialisation of edit profile!');
    }
}