import { UsuarioModelo } from './modelo';
import { Request, Response, NextFunction } from 'express-serve-static-core'

import { Usuario } from '../../conf/Usuario.model'

export class UsuarioControlador {

    buscar = (req: Request, res: Response, next: NextFunction) => {
        if(req.params.id) {
                Usuario.findByPk(req.params.id)
                .then(user => res.status(200).jsonp(user))
                .catch(err => res.status(500).jsonp(err));
        }else {
            Usuario.findAll()
                .then(users => res.status(200).jsonp(users))
                .catch(err => res.status(500).jsonp(err));
        }
    }

    crear = (req: Request, res: Response, next: NextFunction) => {
        Usuario.create(req.body)
            .then(user => res.status(200).jsonp(user))
            .catch(err => res.status(500).jsonp(err));
    }

    actualizar = (req: Request, res: Response, next: NextFunction) => {
        const update_id = req.params.id;
        Usuario.update(req.body,{where: {idUsuario: update_id}})
            .then(userUpdated => res.status(200).jsonp(userUpdated))
            .catch(err => res.status(500).jsonp(err));
    }

    eliminar = (req: Request, res: Response, next: NextFunction) => {
        const delete_id = req.params.id;
        Usuario.destroy({where: {idUsuario: delete_id}})
            .then(user => res.status(200).jsonp(user))
            .catch(err => res.status(500).jsonp(err));
    }
}
