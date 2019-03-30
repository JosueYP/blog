export class Usuario{
    email: string;
    contrasena: string;

    constructor(arg){
        this.email = arg.email;
        this.contrasena = arg.contrasena
    }
}