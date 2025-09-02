export function setupClases(element:HTMLParagraphElement):void {
 
    //Uso de interfaz básica
    //Definición de interfaz

    interface keyPair {
        key:number,
        value:string
    }

    let keyPair = {key:1, value:"2"};

    //Definición de una clase

    class Usuario {
        cedula: string;
        nombre: string;
        edad:number;
        
        //Definición de valores por defecto encaso de constructor inicia vacio
        constructor(cedula:string = 'V1234567', nombre:string = "Usuario", edad:number = 21) {
            this.cedula = cedula;
            this.nombre = nombre;
            this.edad = edad;
        }
    }

    let user = new Usuario();

    user;
    //Acceso a parametros y definidivos
    user.cedula = "V123456";
    user.nombre = "Juan";
    user.edad = 25;


    class Persona {
        private _sexo:string;
        private _nacionalidad:string;

        constructor (sexo:string, nacionalidad:string) {
            this._sexo = sexo;
            this._nacionalidad = nacionalidad;
        }


        //Obtener información de la persona con datos privados
        public get sexo() {
            return this._sexo;
        }

        public set sexo(sexoPersona:string){
            this._sexo = sexoPersona;
        }

        public get todaInfo() {
            return `${this._nacionalidad}  ${this._sexo}`;
        }
        //
    }

    let person = new Persona('M', 'Venezolana');
    person.sexo;
    person.sexo = 'F';

    element.innerHTML += `<p>Llamado con acceso a parametros ${user.cedula + ' '+ user.nombre + ' ' + user.edad}</p>
    <p>Clase persona (FullName): ${person.todaInfo}</p> <p>Clase Persona (sexo modificado por setter): ${person.sexo}</p>
    <p>Acceso a Interfaz ${keyPair.key + ' '+ keyPair.value}</p>`;

}