import { Router } from 'express';
import { UsuarioControlador } from './controlador';

export class UsuarioRutas {
    private _ruteador: Router;
    private controlador: UsuarioControlador;

    constructor() {
        this._ruteador = Router();
        this.controlador = new UsuarioControlador();
        this.configRutas();
    }

    private configRutas() {
        this._ruteador.route('/user')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        this._ruteador.route('/user/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);        
    }

    get ruteador() {
        return this._ruteador;
    }
    
}
