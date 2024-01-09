"use strict"

import { loginHtml } from "./loginForm.js";
import { registrationHTML } from "./registrationForm.js";
import { homeHtml } from "./root.js";

const routes = {
    "/": homeHtml,
    "/login": loginHtml,
    "/registration": registrationHTML,
};

const rootDiv = document.getElementById('form-container');
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

