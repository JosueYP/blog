import { ImagenModelo } from './modelo';
import { Request, Response, NextFunction} from 'express-serve-static-core';

import { Imagen } from '../../conf/Imagen.model';

export class ImagenControlador {

    buscar = (req: Request, res: Response, next: NextFunction) => {
        if(req.params.id) {
            
            Imagen.findByPk(req.params.id)
                .then(album => res.status(200).jsonp(album))
                .catch(err => res.status(500).jsonp(err));
        }else {
            Imagen.findAll()
                .then(albums => res.status(200).jsonp(albums))
                .catch(err => res.status(500).jsonp(err));
        }
    }

    crear = (req: Request, res: Response, next: NextFunction) => {

        Imagen.create(req.body)
            .then(album => res.status(200).send( {album}))
            .catch(err => res.status(500).send(err));
    }

    actualizar = (req: Request, res: Response, next: NextFunction) => {
        const update_id = req.params.id;
        Imagen.update(req.body,{ where: {idImagen: update_id}})
            .then(album => res.status(200).jsonp(album))
            .catch(err => res.status(500).jsonp(err));
    }

    eliminar = (req: Request, res: Response, next: NextFunction) => {
        const delete_id = req.params.id;
        
        Imagen.destroy({where: {idImagen: delete_id }})
            .then(album => res.status(200).jsonp(album))
            .catch(err => res.status(500).jsonp(err));
    }


}