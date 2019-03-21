import { TagModelo } from './modelo';
import { Request, Response, NextFunction } from 'express-serve-static-core'

import { Tag } from '../../conf/Tag.model';

export class TagControaldor {

    // seaerches a tag
    buscar = (req: Request, res: Response, next: NextFunction) => {

        if(req.params.id) {
            Tag.findByPk(req.params.id)
                .then(tag => res.status(200).jsonp(tag))
                .catch(err => res.status(500).jsonp(err));
        }else {
            Tag.findAll()
                .then(tags => res.status(200).jsonp(tags))
                .catch(err => res.status(500).jsonp(err));
        }
    }

    // creates a tag
    crear = (req: Request, res: Response, next: NextFunction) => {
        Tag.create(req.body)
            .then(tag => res.status(200).jsonp(tag))
            .catch(err => res.status(500).jsonp(err));
    }

    // updates a tag
    actualizar = (req: Request, res: Response, next: NextFunction) => {
        const update_id = req.params.id;

        Tag.update(req.body, {where: {idTag: update_id}})
            .then(tag => res.status(200).jsonp(tag))
            .catch(err => res.status(500).jsonp(err));
    }

    eliminar = (req: Request, res: Response, next: NextFunction) => {
        const delete_id = req.params.id;
        
        Tag.destroy({where: {idTag: delete_id}})
            .then(tag => res.status(200).jsonp(tag))
            .catch(err => res.status(500).jsonp(err));
    }
}
