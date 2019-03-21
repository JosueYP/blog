import { DateOnlyDataType } from "sequelize/types";

const Album = require('../../conf/Album.model');

export class AlbumModelo {
    private _idAlbum: number;
    private _nombreAlbum: string;
    private _fechaSalida: DateOnlyDataType;

    constructor(arg) {
        this._idAlbum = arg.id;
        this._nombreAlbum = arg.nombre;
        this._fechaSalida = arg.fecha;
    }

    public static crear(album) {
        console.log('ALBUM MODEL - metodo: createAlbum');
        return new Promise<AlbumModelo> ((resolve, reject) => {
            Album.create({
                id: album.id,
                nombre: album.nombre,
                fecha: album.fecha
            }).then(response => response ? resolve(new AlbumModelo(album)) : reject('El album no se ha podido crear'));
        })
    }

    public static buscarTodos() {
        console.log('ALBUM MODEL - metodo: searchAll');
        return new Promise<AlbumModelo> ((resolve, reject) => {
            let album = Album.findAll();
            if(album) {
                resolve(album);
            }else {
                reject('Albumes no encontradas')
            }
        });
    }

    public static buscarPorId(albumId) {
        console.log('AlBUM MODEL - metodo: searchById');
        return new Promise<AlbumModelo>((resolve, reject) => {
            let album = Album.findById(albumId);
            if(album){
                resolve(album);
            }else {
                reject('No se encontro el album');
            }
        });
    }

    public static actualizar(id, album) {
        console.log('ALBUM MODEL - metodo: updateAlbum');
        return new Promise<AlbumModelo> ((resolve, reject) => {
            const update_id = id;

            Album.update({
                id: album.id,
                nombre: album.nombre,
                fecha: album.fecha},
                {where: {id: update_id}}
            );
        });
    }
   
    public static eliminar(id) {
        console.log('ALBUM MODEL - metodo: deleteAlbum');
        return new Promise<AlbumModelo> ((resolve, reject) => {
            const delete_id = id;
            Album.destroy({
                where: {id: delete_id}
            });
        });
    }

}