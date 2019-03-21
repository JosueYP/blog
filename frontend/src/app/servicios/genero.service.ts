import { API } from '../../environments/environment';
import { Genero } from '../modelos/genero.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class GeneroService{
    constructor(private http: HttpClient){

    }

    crearGenero(genero: Genero){
        return this.http.post<Genero>(API.url + '/generos', genero);
    }

    buscarGenero(id: number){
        return this.http.get<Genero>(API.url + '/categoria/' + id);
    }

    buscarTodosGeneros(){
        return this.http.get<Genero[]>(API.url + '/category');
    }

    editarGenero(genero: Genero){
        return this.http.put<boolean>(API.url + '/generos', genero);
    }

    eliminarGenero(id: number){
        return this.http.delete<boolean>(API.url + '/generos/' + id);
    }

    padres(){
        return this.http.get<Genero[]>(API.url + '/categoria/padres');
    }

    hijos(id){
        return this.http.get<Genero[]>(API.url + '/categoria/hijos/' + id );
    }
}
