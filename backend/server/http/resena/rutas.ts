import { Router } from 'express';
import { ResenaControlador } from './controlador';

export class ResenaRutas {
    private _ruteador: Router;
    private controlador: ResenaControlador;

    constructor() {
        this._ruteador = Router();
        this.controlador = new ResenaControlador();
        this.configRutas();
    }

    private configRutas() {
        this._ruteador.route('/review')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        this._ruteador.route('/review/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);        
    }

    get ruteador() {
        return this._ruteador;
    }
    
}
