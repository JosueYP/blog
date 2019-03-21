const Resena = require('../../conf/Resena.model');
import fs from 'fs';
import path from 'path';

export class ResenaModelo {
    private _numeroEstrellas: number;
    private _comentario: string;
    
    constructor(arg) {
        this._numeroEstrellas = arg.id;
        this._comentario = arg.nombre;
    }

    public static crear(review) {
        console.log('REVIEW MODEL - metodo: createReview');
        return new Promise<ResenaModelo> ((resolve, reject)=> {
            Resena.create({
                numeroEstrellas: review.numeroEstrellas,
                comentario: review.comentario,
                idUsuario: review.idUsuario,
                idAlbum: review.idAlbum
            }).then(response => response ? resolve(new ResenaModelo(review)) : reject('No se puedo crear la reseña'))
        });
    }

    public static buscarTodos() {
        console.log('REVIEW MODEL - metodo: searchAll');
        return new Promise<ResenaModelo>((resolve, reject) => {
            let reviews = Resena.findAll();
            if(reviews){
                resolve(reviews);
            }else {
                reject('Reseñass no encontradas');
            }
        })
    }

    public static buscarPorId(reviewId) {
        console.log('REVIEW MODEL - metodo: searchById');
        return new Promise<ResenaModelo>((resolve, reject)=> {
            let review = Resena.findById(reviewId);
            if(review) {
                resolve(review);
            }else {
                reject('No se encontro la reseña');
            }
        });   
    }

    public static actaulizar(id, review) {
        console.log('REVIEW MODEL - metodo: updateReview');
        return new Promise<ResenaModelo> ((resolve, reject) => {
            const update_id = id;

            Resena.update({
                id: review.id,
                nombre: review.nombre,
                idUsuario: review.idUsuario,
                idAlbum: review.idAlbum},
                {where: {id: update_id}}
            );
        });
    }

    public static eliminar(id) {
        console.log('REVIEW MODEL - metodo: deleteReview');
        return new Promise<ResenaModelo> ((resolve, reject) => {
            const delete_id = id;

            Resena.destroy({
                where: {id: delete_id}
            });
        });
    }
}
