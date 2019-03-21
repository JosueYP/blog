import { Router } from 'express';
import { CateCateControlador } from './controlador';

export class CateCateRutas {
    private _ruteador: Router;
    private controlador: CateCateControlador;

    constructor() {
        this._ruteador = Router();
        this.controlador = new CateCateControlador();
        this.configRutas();
    }
    
    private configRutas() {
        this._ruteador.route('/catecate/')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        
        this._ruteador.route('/catecate/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
    }

    get ruteador() {
        return this._ruteador;
    }
}
