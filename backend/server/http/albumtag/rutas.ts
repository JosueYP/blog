import { Router } from 'express';
import { AlbumTagControlador } from './controlador';

export class AlbumTagRutas {
    private _ruteador: Router;
    private controlador: AlbumTagControlador;

    constructor() {
        this._ruteador = Router();
        this.controlador = new AlbumTagControlador();
        this.configRutas();
    }
    
    private configRutas() {
        this._ruteador.route('/albumtag')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        
        this._ruteador.route('/albumtag/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
    }

    get ruteador() {
        return this._ruteador;
    }
}
