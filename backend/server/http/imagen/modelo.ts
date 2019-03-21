const Imagen = require('../../conf/Imagen.model');

export class ImagenModelo {
    private _idImagen: string;
    private _nombreImagen: string;
    private _directorioImagen: string;

    constructor(arg) {
        this._idImagen = arg.id;
        this._nombreImagen = arg.nombre;
        this._directorioImagen = arg._directorio;
    }

    public static crear(image) {
        console.log('IMAGE MODEL - metodo: createImage');
        return new Promise<ImagenModelo> ((resolve, reject) => {
            Imagen.create({
                id: image.id,
                nombre: image.nombre,
                directorio: image.direcotrio
            }).then(response => response ? resolve(new ImagenModelo(image)) : reject('La imagen no se ha podido crear'));

        })
    }

    public static buscarTodos() {
        console.log('Image MODEL - metodo: searchAll');
        return new Promise<ImagenModelo> ((resolve, reject) => {
            let images = Imagen.findAll();
            if(images) {
                resolve(images);
            }else {
                reject('Imagen no encontradas')
            }
        });
    }

    public static buscarPorId(imageId) {
        console.log('IMAGE MODEL - metodo: searchById');
        return new Promise<ImagenModelo>((resolve, reject) => {
            let image = Imagen.findById(imageId);
            if(image){
                resolve(image);
            }else {
                reject('No se encontro la imagen');
            }
        });
    }

    public static actuaizar(id, image) {
        console.log('IMAGE MODEL - metodo: updateImage');
        return new Promise<ImagenModelo> ((resolve, reject) => {
            const update_id = id;

            Imagen.update({
                id: image.id,
                nombre: image.nombre,
                fecha: image.fecha},
                {where: {id: update_id}}
            );
        });
    }
   
    public static eliminar(id) {
        console.log('IMAGE MODEL - metodo: deleteImage');
        return new Promise<ImagenModelo> ((resolve, reject) => {
            const delete_id = id;
            Imagen.destroy({
                where: {id: delete_id}
            });
        });
    }
}