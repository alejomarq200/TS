export class Animal {
    private edad: number;

    constructor(edad:number) {
        this.edad = edad;
    }

    public get ObtenerEdad () {
        return this.edad;
    }

    public set ModificarEdad(nuevaEdad: number) {
        if(!nuevaEdad || nuevaEdad == 0) {
            throw new Error("La edad debe ser definida y debe ser distinta de 0");
        }
        this.edad = nuevaEdad;
    }
}