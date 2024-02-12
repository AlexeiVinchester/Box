"use strict";

export class BasePage{
    constructor(){
        this.name = this.constructor.name;
        if(this.constructor == BasePage){
            throw new Error(`${this.name} class is of abstract type and can't be instantiated`);
        }
        if(!(this.render ?? this.onInit ?? false)){
            throw new Error(`render and onInit methods must be emplemented in ${this.name} class`);
        }
        if(!this.render){
            throw new Error(`render method must be emplemented in ${this.name} class`);
        }
        if(!this.onInit){
            throw new Error(`onInit method must be emplemented in ${this.name} class`);
        }
    }
}