import { AlbumModelo } from './modelo';
import { Request, Response, NextFunction } from 'express-serve-static-core';
import { Album } from '../../conf/Album.model';

export class AlbumControlador {

    buscar = (req: Request, res: Response, next: NextFunction) => {

        console.log('Recibiendo peticion desde angular');
        if(req.params.id) {
            Album.findByPk(req.params.id)
                .then(album => {
                    console.log('impriendo album solito por ID');
                    //console.log(album); 
                    res.status(200).jsonp(album)})
                .catch(err => {
                    console.log('hubo un error al imprimir el album D:');
                    res.status(500).jsonp(err)
                        });
        }else {
            Album.findAll()
                .then(album => {
                    //console.log('Imprimiendo album en el servidor');
                    //console.log(album);
                res.status(200).jsonp(album)})
                .catch(err => res.status(500).jsonp(err));
        }
    }

    crear = (req: Request, res: Response, next: NextFunction) => {
        Album.create(req.body)
            .then(album => res.status(200).jsonp( {album}))
            .catch(err => res.status(500).jsonp(err));
    }

    acualizar = (req: Request, res: Response, next: NextFunction) => {

        const update_id = req.params.id;
        Album.update(
            req.body
        ,{ where: {idAlbum: update_id} })
            .then(album => res.status(200).jsonp(album))
            .catch(err => res.status(500).jsonp(err));
    }

    eliminar = (req: Request, res: Response, next: NextFunction) => {
        const delete_id = req.params.id;

        console.log('BORRAR: '+delete_id);

        Album.destroy({
            where: {idAlbum: delete_id}
        })
            .then(album => res.status(200).jsonp(album))
            .catch(err => res.status(500).jsonp(err));
    }

}