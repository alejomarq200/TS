//Generics

interface Usuario {
    nombre: string;
    edade: number;
}

interface Producto {
    id: number;
    nombre: string;
    precio: number;
}

// Union Type pero forma menos escalable
//type dataType = Usuario | Producto;

interface Empleado extends Usuario {
    rol: string;
}

//Generics con interfaces
interface Coleccion <T> {
    addItem(item: T): void;
}


//Generics con clases y delimtaciones
class Datos <T extends {id?: number, nombre?: string}> implements Coleccion<T> {
    private items: T[] = [];

    addItem(newItem: T): void {
        this.items.push(newItem);
    }

    getItems(): void {
        console.log('La lista de items es:', JSON.stringify(this.items));
    }

    getNames(): string[] {
        return this.items.map(item => item.nombre);
    }

    getElementById(nombre:string): T | undefined {
        return this.items.find((item: T) => item.nombre === nombre);
    }
}

const coleccionProductos = new Datos<Empleado>();
const newProducto  = { nombre: 'José', edade: 20, rol: 'Admin' };
const newProducto1 = { nombre: 'Alejandro', edade: 20,  rol: 'Admin' };

coleccionProductos.addItem(newProducto);
coleccionProductos.addItem(newProducto1);

coleccionProductos.getItems();