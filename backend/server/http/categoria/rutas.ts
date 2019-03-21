import { Router } from 'express';
import { CategoriaControlador } from './controlador';

export class CategoriaRutas {
    private _ruteador: Router;
    private controlador: CategoriaControlador;

    constructor() {
        this._ruteador = Router();
        this.controlador = new CategoriaControlador();
        this.configRutas();
    }

    private configRutas() {
        this._ruteador.route('/category')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);

        this._ruteador.route('/category/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);

        this._ruteador.route('/categoria/padres')
            .get(this.controlador.padres)

        this._ruteador.route('/categoria/hijos/:id')
            .get(this.controlador.hijos)
    }

    get ruteador() {
        return this._ruteador;
    }
}
