"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: 'Juan',
    lastName: 'Perez',
    age: 30,
    address: 'Calle Falsa 123'
};
const users = [];
function getUsers() {
    return { name: 'Pedro', age: 25, address: 'Calle Verdadera 456' };
}
const myUser = getUsers();
console.log(myUser);
function createUser(user) {
    return user;
}
const newUser = {
    name: 'Alejandro',
    age: 25,
    address: 'Avenida'
};
createUser(newUser);
class Zoo {
    getDogs() {
        //ejecución
    }
    getCats() {
        //ejecución
    }
}
