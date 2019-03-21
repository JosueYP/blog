export class Imagen{
    idImagen: number;
    nombreImagen: string;
    directorio: string;

    constructor(arg){
        this.idImagen = arg.idImagen;
        this.nombreImagen = arg.nombreImagen;
        this.directorio = arg.directorio;
    }
}


