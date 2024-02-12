"use strict";

import { LoginPage } from "./loginPage.js";
import { RegistrationPage } from "./registrationPage.js";
import { HomePage } from "./homePage.js";
import { EditProfilePage } from "./editProfilePage.js";
import { AuthorizationPage } from "./authorizationPage.js";


const loginPage = new LoginPage();
const registrationPage = new RegistrationPage();
const authorizationPage = new AuthorizationPage();
const homePage = new HomePage();
const editProfilePage = new EditProfilePage();

const routes = {
    "/": authorizationPage,
    "/login": loginPage,
    "/registration": registrationPage,
    "/home": homePage,
    "/home/edit": editProfilePage,
};

const rootDiv = document.getElementById('container');

function setContent(currentPage) {
    rootDiv.innerHTML = currentPage.render();
    currentPage.onInit();
}

export const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    );

    const currentPage = routes[pathname];
    setContent(currentPage);
};

window.onpopstate = () => {
    const currentPage = routes[window.location.pathname];
    setContent(currentPage);
};

