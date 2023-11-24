"use strict"

import { loginHtml } from "./loginForm.js";
import { registrationHTML } from "./registrationForm.js";

const homeHtml = `
    <h4 class="homePage-text">Please, choose button!</h4>
`;

const routes = {
    "/": homeHtml,
    "/login": loginHtml,
    "/registration": registrationHTML,
};

const rootDiv = document.getElementById('form-box');
rootDiv.innerHTML = routes[window.location.pathname];

export const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname, 
        window.location.origin + pathname
    );
    rootDiv.innerHTML = routes[pathname];

};

window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname];
};

