"use strict"

import { loginHtml } from "./loginForm.js";
import { registrationHTML } from "./registrationForm.js";
import { rootHtml } from "./root.js";
import { homePage } from "./home.js";

const routes = {
    "/": rootHtml,
    "/login": loginHtml,
    "/registration": registrationHTML,
    "/home": homePage
};

const rootDiv = document.getElementById('container');
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

