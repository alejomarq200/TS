"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const username = 'Alejandro';
console.log(`Hello, ${username}!`);
//Basic types
let typeString = 'Welcome';
let typeNumber = 2025;
let typeBoolean = true;
//Arrays typpes
let arratString = ['valor1', 'valor2', 'valor3'];
let arrayNumber = [1, 2, 3];
let arrayBoolean = [true, false, true];
let arrayMix = ['text', 123, true, 'more text', 456, false];
let arrayAny = ['text', 123, true, [1, 2, 3]];
//Tuples array
let players = [
    ['Player1', 10],
    ['Player2', 20],
    ['Player3', 30]
];
//Tulpes
let tupleExample = ['text', 123, true];
//Union types
let unionType;
unionType = 'A string';
unionType = 456;
unionType = false;
//unionType = [1, 2, 3]; // Error
console.log('Union Type:', unionType);
//Inference types
let inferenceType = 'This is a string';
//inferenceType = 123; // Error
console.log('Inference Type:', inferenceType);
let user = {
    id: 1,
    name: 'John Doe',
    isActive: true
};
console.log('User:', user);
