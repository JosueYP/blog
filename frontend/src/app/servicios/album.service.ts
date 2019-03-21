import { API } from '../../environments/environment';
import { Album } from "../modelos/album.model";
import { Injectable } from '@angular/core';
import {HttpClient, HttpXhrBackend, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AlbumService{

    constructor(private htpp: HttpClient){

    }

    crearAlbum(album: Album){
        return this.htpp.post<Album>(API.url + '/album', album);
    }

    buscarAlbum(id: number): Observable<Album>{
        return this.htpp.get<Album>(API.url + '/album/' + id);
    }

    buscarTodosAlbumes(): Observable<Album[]>{
        console.log(API.url);
        return this.htpp.get<Album[]>(API.url + '/album');
    }

    editaralbum(id: number, album: Album){
        return this.htpp.put<boolean>(API.url + '/album/'+id, album)
    }

    eliminarAlbum(id: number){
        return this.htpp.delete<boolean>(API.url + '/album/' + id)
    }
}


