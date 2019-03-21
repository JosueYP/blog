import { API } from '../../environments/environment';
import { Imagen } from "../modelos/imagen.model";
import { Injectable } from '@angular/core';
import {HttpClient, HttpXhrBackend, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class ImagenService{
    constructor(private http: HttpClient){}

    crearImagen(imagen: Imagen){
        return this.http.post<Imagen>(API.url + '/image', imagen);
    }

    buscarImagen(id: number): Observable<Imagen>{
        return this.http.get<Imagen>(API.url + '/image/' + id);
    }

    buscarTodosImagenes(): Observable<Imagen[]>{
        console.log(API.url);
        return this.http.get<Imagen[]>(API.url + '/image');
    }

    editarImagen(id: number, imagen: Imagen){
        return this.http.put<boolean>(API.url + '/image/'+id, imagen)
    }

    eliminarImagen(id: number){
        return this.http.delete<boolean>(API.url + '/image/' + id)
    }
}