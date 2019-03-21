


import { GeneroService } from 'src/app/servicios/genero.service';


export class Genero{
    idCategoria: number;
    nombreCategoria: string;
    hijos  : any[]

    constructor(arg, private servicio : GeneroService){
        this.idCategoria = arg.idCategoria;
        this.nombreCategoria = arg.nombreCategoria;
    }

    obtenerhijos(){

        this.servicio.hijos(this.idCategoria).toPromise()
        .then(response => this.hijos = response)

    }


}
