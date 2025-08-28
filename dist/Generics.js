"use strict";
//Generics
Object.defineProperty(exports, "__esModule", { value: true });
class Datos {
    constructor() {
        this.items = [];
        // getNames(): string[] {
        //     return this.items.map(item => item.nombre);
        // }
        // getElementById(nombre:string): T | undefined {
        //     return this.items.find((item: T) => item.nombre === nombre);
        // }
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    getItems() {
        console.log('La lista de items es:', JSON.stringify(this.items));
    }
}
const coleccionProductos = new Datos();
const newProducto = { nombre: 'José', edade: 20, rol: 'Admin' };
const newProducto1 = { nombre: 'Alejandro', edade: 20, rol: 'Admin' };
coleccionProductos.addItem(newProducto);
coleccionProductos.addItem(newProducto1);
coleccionProductos.getItems();
