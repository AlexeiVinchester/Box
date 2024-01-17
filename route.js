"use strict"

import { loginHtml } from "./loginForm.js";
import { registrationHTML } from "./registrationForm.js";
import { rootHtml } from "./root.js";
import { homePage } from "./home.js";

// class object

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
 
    // add function init
    // class for each forms with 2 function: render and onInit

};

window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname];
};

