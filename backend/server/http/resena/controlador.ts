import { ResenaModelo } from './modelo';
import { Request, Response, NextFunction } from 'express-serve-static-core'
import { Resena } from '../../conf/Resena.model';

export class ResenaControlador {

    // searches a review
    buscar = (req: Request, res: Response, next: NextFunction) => {
        if(req.params.id) {
            Resena.findByPk(req.params.id)
                .then(review => res.status(200).jsonp(review))
                .catch(err => res.status(500).jsonp(err));
        }else {
            Resena.findAll()
                .then(reviews => res.status(200).jsonp(reviews))
                .catch(err => res.status(500).jsonp(err));
        }
    }

    // creates an user
    crear = (req: Request, res: Response, next: NextFunction) => {
        Resena.create(req.body)
            .then(review => res.status(200).jsonp(review))
            .catch(err => res.status(500).jsonp(err));
    }

    // updates an user
    actualizar = (req: Request, res: Response, next: NextFunction) => {
        const update_id = req.params.id;

        Resena.update(req.body,{where: {idResena: update_id}})
            .then(review => res.status(200).jsonp(review))
            .catch(err => res.status(500).jsonp(err));
    }

    eliminar = (req: Request, res: Response, next: NextFunction) => {
        const delete_id = req.params.id;

        Resena.destroy({where: {idResena: delete_id}})
            .then(review => res.status(200).jsonp(review))
            .catch(err => res.status(500).jsonp(err));
    }
}

