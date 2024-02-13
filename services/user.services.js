"use strict";

export function saveNewUser(login, password) {
    localStorage.setItem(login, password);
}

export function isUserExist(login, password) {
    return localStorage.getItem(login) === password;
}

export function saveLoggedUser(login, password) {
    localStorage.setItem('loggedUser', `login:${login}-password:${password}`);
}

export function isUserLogged() {
    return localStorage.getItem('loggedUser');
}

export function logOutUser() {
    localStorage.removeItem('loggedUser');
}

export function isLoginUsed(login) {
    return localStorage.hasOwnProperty(login);
}