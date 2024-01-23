"use strict"

import { UserLogin } from "./loginForm.js";
import { UserRegistration } from "./registrationForm.js";
import { HomePage } from "./home.js";
import { RootPage } from "./root.js";

let loginPage = new UserLogin();
let registrationPage = new UserRegistration();
let rootPage = new RootPage();
let homePage = new HomePage();

const routes = {
    "/": rootPage,
    "/login": loginPage,
    "/registration": registrationPage,
    "/home": homePage
}
const rootDiv = document.getElementById('container');

function setContent(currentPage){
    rootDiv.innerHTML = currentPage.render();
    currentPage.onInit();
}

export const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname, 
        window.location.origin + pathname
    );
    
    let currentPage = routes[pathname];
    setContent(currentPage);
};

window.onpopstate = () => {
    let currentPage = routes[window.location.pathname];
    setContent(currentPage);
};

