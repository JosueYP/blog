import { Router } from 'express';
import { ImagenControlador } from './controlador';

export class ImagenRutas {
    private _ruteador: Router;
    private controlador: ImagenControlador;

    constructor() {
        this._ruteador = Router();
        this.controlador = new ImagenControlador();
        this.configRutas();
    }
    
    private configRutas() {
        this._ruteador.route('/image')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        
        this._ruteador.route('/image/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
    }

    get ruteador() {
        return this._ruteador;
    }
}
