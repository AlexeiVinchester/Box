"use strict"

import { UserLogin } from "./loginForm.js";
import { UserRegistration } from "./registrationForm.js";
import { HomePage } from "./home.js";
import { RootPage } from "./root.js";
import { EditProfile } from "./editProfile.js";


const loginPage = new UserLogin();
const registrationPage = new UserRegistration();
const rootPage = new RootPage();
const homePage = new HomePage();
const editProfile = new EditProfile();

const routes = {
    "/": rootPage,
    "/login": loginPage,
    "/registration": registrationPage,
    "/home": homePage,
    "/home/edit": editProfile,
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
    
    const currentPage = routes[pathname];
    setContent(currentPage);
};

window.onpopstate = () => {
    const currentPage = routes[window.location.pathname];
    setContent(currentPage);
};

