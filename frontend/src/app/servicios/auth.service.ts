import { API } from '../../environments/environment';
import { Album } from "../modelos/album.model";
import { Injectable } from '@angular/core';
import {HttpClient, HttpXhrBackend, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

interface Usuario{
    email: string;
    nombre: string;
}

@Injectable()
export class AuthService{

    usuario = new BehaviorSubject<Usuario>(null);

    constructor(private htpp: HttpClient){
        let usuario: Usuario = {email: 'luisgateshouse@gmail.com', nombre: 'Luis Malaga'}
        this.usuario.next(usuario);
    }


    login(usuario){
        this.htpp.post(API.url + '/login', usuario)
            .subscribe((usuario: Usuario) => {
                this.usuario.next(usuario)
            })
    }

}