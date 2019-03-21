import { Router } from 'express';
import { TagControaldor } from './controlador';

export class TagRutas {
    private _ruteador: Router;
    private controlador: TagControaldor;

    constructor() {
        this._ruteador = Router();
        this.controlador = new TagControaldor();
        this.configRutas();
    }

    private configRutas() {
        this._ruteador.route('/tag')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        this._ruteador.route('/tag/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);        
    }

    get ruteador() {
        return this._ruteador;
    }
    
}
