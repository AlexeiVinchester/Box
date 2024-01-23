"use strict"

function home(){
    return `
    <div class="homePage">
        <h1>Home Page</h1>
    </div>`;
}

export class HomePage{
    
    constructor(){
        this.content = home();
    }

    render(){
        return this.content;
    }

    onInit(){

    }
}