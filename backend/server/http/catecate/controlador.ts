import { Request, Response, NextFunction} from 'express-serve-static-core';
import { CateCate } from '../../conf/CateCate.model';

export class CateCateControlador {

    buscar = (req: Request, res: Response, next: NextFunction) => {
        if(req.params.id) {
            CateCate.findByPk(req.params.id)
                .then(catecate => res.status(200).jsonp(catecate))
                .catch(err => res.status(500).jsonp(err));
        }else {
            CateCate.findAll()
                .then(catecates => res.status(200).jsonp(catecates))
                .catch(err => res.status(500).jsonp(err));
        }
    }

    crear = (req: Request, res: Response, next: NextFunction) => {
        CateCate.create(req.body)
            .then(catecate => res.status(200).jsonp( {catecate}))
            .catch(err => res.status(500).jsonp(err));
    }

    actualizar = (req: Request, res: Response, next: NextFunction) => {
        const update_id = req.params.id;
        CateCate.update(
            req.body
        , {where: {idCateCate: update_id} })
            .then(catecate => res.status(200).jsonp(catecate))
            .catch(err => res.status(500).jsonp(err));
    }

    eliminar = (req: Request, res: Response, next: NextFunction) => {
        const delete_id = req.params.id;
        CateCate.destroy({
            where: {idCateCate: delete_id}
        })
        .then(catecate => res.status(200).jsonp(catecate))
        .catch(err => res.status(500).jsonp(err));
    }


}