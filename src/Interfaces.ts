interface infoUser {
    name: string;
    lastName?: string;
    age: number;
    address: string;
}

const user: infoUser = {
    name: 'Juan',
    lastName: 'Perez',
    age: 30,
    address: 'Calle Falsa 123'
}


const users: infoUser[] = [];

function getUsers(): infoUser {
    return { name: 'Pedro', age: 25, address: 'Calle Verdadera 456' };
}

const myUser = getUsers();
console.log(myUser);

function createUser(user: infoUser): infoUser {
    return user;
}

const newUser: infoUser = {
    name: 'Alejandro',
    age: 25,
    address: 'Avenida'

}
createUser(newUser);


//Interfaces with extends
interface Persona {
    id: number;
    name: string;
}

interface Empleado extends Persona {
    dept: string;
}

interface Dpto extends Persona {
    lugar: string;
}

// const newEmpleado:Empleado = {}
// const newDpt:Dpto = {}
interface Animal {
    getDogs: () => void;
    getCats: () => void;
}

class Zoo implements Animal {
    getDogs(): void {
        //ejecución
    }
    getCats(): void {
        //ejecución
    }
}