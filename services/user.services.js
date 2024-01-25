"use strict"

export function saveNewUser(login, password){
    localStorage.setItem(login, password);
}

export function isUserExist(login, password){
    return localStorage.getItem(login) === password;
}