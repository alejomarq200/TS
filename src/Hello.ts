const username = 'Alejandro';
console.log(`Hello, ${username}!`);

//Basic types
let typeString: string = 'Welcome';
let typeNumber: number = 2025;
let typeBoolean: boolean = true;

//Arrays typpes
let arratString: string[] = ['valor1', 'valor2', 'valor3'];
let arrayNumber: number[] = [1, 2, 3];
let arrayBoolean: boolean[] = [true, false, true];
let arrayMix: (string | number | boolean)[] = ['text', 123, true, 'more text', 456, false];
let arrayAny: any[] = ['text', 123, true, [1, 2, 3]];

//Tuples array
let players: [string, number][] = [
    ['Player1', 10],
    ['Player2', 20],
    ['Player3', 30]
];

//Tulpes
let tupleExample: [string, number, boolean] = ['text', 123, true];

//Union types
let unionType: string | number | boolean;
unionType = 'A string';
unionType = 456;
unionType = false;

//unionType = [1, 2, 3]; // Error
console.log('Union Type:', unionType);

//Inference types
let inferenceType = 'This is a string';
//inferenceType = 123; // Error
console.log('Inference Type:', inferenceType);

//Compound types
type User = {
    id: number;
    name: string;
    isActive: boolean;
};
let user: User = {
    id: 1,
    name: 'John Doe',
    isActive: true
};
console.log('User:', user);