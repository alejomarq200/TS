class Personas {

    //Atributos
    constructor() { }
    saludar(): void {
        console.log(`Hello`);
    }
}



//Clases

class Empleado extends Personas {
    //Atributos
    // private id: number;
    // private nombre: string;
    // private apellido: string
    // private edad: number;

    //Métodos     //Automatic property declaration   
    constructor(private  readonly id: number, private nombre: string, private apellido: string, private edad: string | number) {
        // this.id = id ;
        // this.nombre = nombre;
        // this.apellido = apellido;
        // this.edad = edad as number;

        super();
        this.mostrarInfo();
    }

    mostrarInfo(): void {
        //Accedemos a los atributos con this
        // this.id = 2; //Error, no podemos modificar un atributo readonly
        console.log(`Empleado: Id: ${this.id} ${this.nombre} ${this.apellido} (${this.edad} años)`)
    }

}

//Instanciamos un objeto de la clase Empleado
const empleado = new Empleado(1, 'Juan', 'Perez', 30);
empleado.mostrarInfo();
empleado.saludar(); //Error, no podemos acceder a métodos privados


//No podemos acceder a los atributos porque son privados
//empleado.id = 10; //Error
//console.log(empleado.id); //Error