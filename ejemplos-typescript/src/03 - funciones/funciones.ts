
export function setupFunction (element: HTMLParagraphElement): void {
    //Función que no devuelve
    function mostrarMensaje():void {
        console.log('Mensaje');
    }

        mostrarMensaje();

        //Función con parametros
        function mostrarEsteMensaje(mensaje: string):void{
            console.log(mensaje);
        }

        mostrarEsteMensaje('TYPESCRITP');

        //Función con retorno

        function operacion(a:number, b:number):number {
            return a*b;
        }

        let operar = operacion(15,2);

        //Función con parametro opcional
        function bienvenidaUsuario(saludo:string, name?:string):string {
            if(name == undefined) {
                name = "";
            }

            return saludo + '' + name + '!';
        }

        let welcome = bienvenidaUsuario('Hola');

        //Parametros definidos
        function multiplica(num:number, multiplo:number=3):number {
            return num * multiplo;
        }

        let multiplo = multiplica(45);

        //Multiples parametro indefinidos
        function saludos(saludo:string, ...name:string[]) {
            return saludo + " " + name.join(", ") + "!";
        }

        let primerSaludo = saludos('Hola', 'Jose', 'Andrea');
        let segundoSaludo = saludos('Hola', 'Jose');

        //Función de flechas 
        let sum = (x:number, y:number):number => {
            return x+y;
        }

        let suma = sum(15,2);

        function add(a:string, b:string):string;
        function add(a:number, b:number):number;

        function add(a:any, b:any): any {
            return a+b;
        }

        let salida = add(2,3);
        let salida1 = add("Hola", "Mundo");

       element.innerHTML =  `<p>Operación: ${operar}</p><p>Bienvenida: ${welcome}</p> <p>Multiplicación definida: ${multiplo}</p>
       <p>Saludos con distintos valores: ${primerSaludo}${segundoSaludo}</p><p>Suma: ${suma}</p><p>Sobrecarga de función: ${salida}${salida1}</p>
       `;

}