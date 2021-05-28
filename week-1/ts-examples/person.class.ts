/**
 * Title: person.class.ts
 * Author: Professor Krasso
 * Modified by: Fred Marble
 * Date: 28 May 2021
 * Description: Person class that implements a Person interface 
 */
import {IPerson} from "./person.interface";

class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string,){

        this.firstName = firstName;
        this.lastName = lastName;

    }
}

let myName = new Person("Fred", "Marble");
console.log(`My Name is  ${myName.firstName}  ${myName.lastName}`);