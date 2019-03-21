export class Album {
    idAlbum: number;
    nombreAlbum: string;
    fechaSalida: string;
    idCategoria: number;
    idImagen: number;

    constructor(nombre, fecha, idCategoria, idImagen){
        this.nombreAlbum = nombre;
        this.fechaSalida = fecha;
        this.idCategoria = idCategoria;
        this.idImagen = idImagen;
    }

    
}