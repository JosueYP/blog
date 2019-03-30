import { API } from '../../environments/environment';
import { Album } from "../modelos/album.model";
import { Injectable } from '@angular/core';
import { HttpClient, HttpXhrBackend, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Usuario } from '../modelos/usuario.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AuthService {

    usuario: BehaviorSubject<Usuario>;

    usuario1 = new Usuario({
        "email": "josueyepezponce@hotmail.com",
        "contrasena": "123456"
    });

    constructor(private htpp: HttpClient, private router: Router,
        private snack: MatSnackBar) {
        
    }

    login(usuario1) {
        console.log('ESTOY EN EL SERVICIO');
        console.log(this.usuario1.email);
        console.log(usuario1.email);
        if (this.usuario1.email === usuario1.email) {
            console.log('yes del service');
            localStorage.setItem('token', JSON.stringify(usuario1));
            console.log(usuario1);



            this.usuario = new BehaviorSubject<Usuario>(
                JSON.parse(localStorage.getItem('token')));
                console.log('--------------');
            console.log('Usuario:' + this.usuario1.email);
            console.log('--------------');

            this.usuario.next(new Usuario(usuario1));
            this.router.navigate(['']);
        }else{
            this.snack.open('Datos incorrectos', '', {duration: 2000});
        }
    }
    // this.usuario.next(this.usuario1);
    // localStorage.setItem('currentUser', JSON.stringify(usuario1));
    // console.log('usuario creado');
    // console.log(this.usuario);

    // this.usuario.next(this.usuario1.email = email);
    // this.usuario.next(this.usuario1.contrasena = contrasena);
    // localStorage.setItem('currentUser', JSON.stringify(email, contrasena));
    // console.log('que: ' + this.usuario.next(this.usuario1));
    /*console.log('login del authService');
    this.htpp.post(API.url + '/login', usuario1)
        .subscribe((usuario1: Usuario) => {
            console.log('inicio');
            this.usuario.next(this.usuario1)
            localStorage.setItem('currentUser', JSON.stringify(usuario1));
            console.log('subscribe');
        })*/


    logout() {
        localStorage.removeItem('currentUser');
        this.usuario.next(null);
    }

    public get currentUserValue(): Usuario {
        return this.usuario.value;
    }

}
