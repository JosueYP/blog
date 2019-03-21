import { CategoriaModelo } from './modelo';
import { Request, Response, NextFunction} from 'express-serve-static-core';
import { Categoria } from '../../conf/Categoria.model';

export class CategoriaControlador {

    buscar = (req: Request, res: Response, next: NextFunction) => {
        console.log('MARTIN MOLINA');
        if(req.params.id) {
            Categoria.findByPk(req.params.id)
                .then(category => res.status(200).jsonp(category))
                .catch(err => res.status(500).jsonp(err));
        }else {
            Categoria.findAll()
                .then(categories => res.status(200).jsonp(categories))
                .catch(err => res.status(500).jsonp(err));
        }
    }

    crear = (req: Request, res: Response, next: NextFunction) => {
        Categoria.create(req.body)
            .then(category => res.status(200).jsonp( {category}))
            .catch(err => res.status(500).jsonp(err));
    }

    actualizar = (req: Request, res: Response, next: NextFunction) => {
        const update_id = req.params.id;
        Categoria.update(
            req.body
        , {where: {idCategoria: update_id} })
            .then(category => res.status(200).jsonp(category))
            .catch(err => res.status(500).jsonp(err));
    }

    eliminar = (req: Request, res: Response, next: NextFunction) => {
        const delete_id = req.params.id;
        Categoria.destroy({
            where: {idCategoria: delete_id}
        })
        .then(category => res.status(200).jsonp(category))
        .catch(err => res.status(500).jsonp(err));
    }

    padres = (req: Request, res: Response, next: NextFunction) => {

        Categoria.findAll({
            where: { IdCat: null }
        })
        .then(category => res.status(200).jsonp(category))
        .catch(err => res.status(500).jsonp(err));
    }

    hijos = (req: Request, res: Response, next: NextFunction) => {

        Categoria.findByPk(req.params.id)
        .then(item => item.$get('SubCategorias'))
        .then(category => res.status(200).jsonp(category))
        .catch(err => res.status(500).jsonp(err));
    }





}
