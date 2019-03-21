import { Request, Response, NextFunction} from 'express-serve-static-core';
import { Album } from '../../conf/Album.model';

export class AlbumTagControlador {

    buscar = (req: Request, res: Response, next: NextFunction) => {
        if(req.params.id) {
            Album.findByPk(req.params.id)
                .then(albumtag => res.status(200).jsonp(albumtag))
                .catch(err => res.status(500).jsonp(err));
        }else {
            Album.findAll()
                .then(albumtags => res.status(200).jsonp(albumtags))
                .catch(err => res.status(500).jsonp(err));
        }
    }

    crear = (req: Request, res: Response, next: NextFunction) => {
        Album.create(req.body)
            .then(albumtag => res.status(200).jsonp( {albumtag}))
            .catch(err => res.status(500).jsonp(err));
    }

    actualizar = (req: Request, res: Response, next: NextFunction) => {
        const update_id = req.params.id;
        Album.update(
            req.body
        , {where: {idAlbumTag: update_id} })
            .then(albumtag => res.status(200).jsonp(albumtag))
            .catch(err => res.status(500).jsonp(err));
    }

    eliminar = (req: Request, res: Response, next: NextFunction) => {
        const delete_id = req.params.id;
        Album.destroy({
            where: {idAlbumTag: delete_id}
        })
        .then(albumtag => res.status(200).jsonp(albumtag))
        .catch(err => res.status(500).jsonp(err));
    }


}