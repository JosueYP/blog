const Usuario = require('../../conf/Usuario.model');
import fs from 'fs';
import path from 'path';

export class UsuarioModelo {
    private _idUsuario: number;
    private _nombreUsuario: string;
    private _correoUsuario: string;
    private _contrasenaUsuario: string;

    constructor(arg) {
        this._idUsuario = arg.id;
        this._nombreUsuario = arg.nombre;
        this._correoUsuario = arg.correo;
        this._contrasenaUsuario = arg.contrasena;
    }

    public static crear(user) {
        console.log('USER MODEL - metodo: createUser');
        return new Promise<UsuarioModelo> ((resolve, reject)=> {
            Usuario.create({
                id: user.id,
                nombre: user.nombre,
                correo: user.correo,
                contrasena: user.contrasena
            }).then(response => response ? resolve(new UsuarioModelo(user)) : reject('No se puedo crear el usuario'))
        });
    }

    public static buscarTodos() {
        console.log('USER MODEL - metodo: searchAll');
        return new Promise<UsuarioModelo>((resolve, reject) => {
            let users = Usuario.findAll();
            if(users){
                resolve(users);
            }else {
                reject('Usuarios no encontrados');
            }
        })
    }

    public static buscarPorId(userId) {
        console.log('USER MODEL - metodo: searchById');
        return new Promise<UsuarioModelo>((resolve, reject)=> {
            let user = Usuario.findById(userId);
            if(user) {
                resolve(user);
            }else {
                reject('No se encontro el usuario');
            }
        });   
    }

    public static actualizar(id, user) {
        console.log('USER MODEL - metodo: updateUser');
        return new Promise<UsuarioModelo> ((resolve, reject) => {
            const update_id = id;

            Usuario.update({
                id: user.id,
                nombre: user.nombre,
                correo: user.correo,
                contrasena: user.contrasena},
                {where: {id: update_id}}
            );
        });
    }

    public static eliminar(id) {
        console.log('USER MODEL - metodo: deleteUser');
        return new Promise<UsuarioModelo> ((resolve, reject) => {
            const delete_id = id;

            Usuario.destroy({
                where: {id: delete_id}
            });
        });
    }
}
