const Tag = require('../../conf/Tag.model');
import fs from 'fs';
import path from 'path';

export class TagModelo {

    private _idTag: number;
    private _nombreTag: string;

    constructor(arg) {
        this._idTag = arg.id;
        this._nombreTag = arg.nombre;
    }

    public static crear(tag) {
        console.log('TAG MODEL - metodo: createTag');
        return new Promise<TagModelo> ((resolve, reject)=> {
            Tag.create({
                id: tag.id,
                nombre: tag.nombre,
            }).then(response => response ? resolve(new TagModelo(tag)) : reject('No se puedo crear la etiqueta'))
        });
    }

    public static buscarTodos() {
        console.log('TAG MODEL - metodo: searchAll');
        return new Promise<TagModelo>((resolve, reject) => {
            let tags = Tag.findAll();
            if(tags){
                resolve(tags);
            }else {
                reject('Etiquetas no encontrados');
            }
        })
    }

    public static buscarPorId(tagId) {
        console.log('TAG MODEL - metodo: searchById');
        return new Promise<TagModelo>((resolve, reject)=> {
            let tag = Tag.findById(tagId);
            if(tag) {
                resolve(tag);
            }else {
                reject('No se encontro la etiqueta');
            }
        });   
    }

    public static actualizar(id, tag) {
        console.log('TAG MODEL - metodo: updateTag');
        return new Promise<TagModelo> ((resolve, reject) => {
            const update_id = id;

            Tag.update({
                id: tag.id,
                nombre: tag.nombre,},
                {where: {id: update_id}}
            );
        });
    }

    public static eliminar(id) {
        console.log('TAG MODEL - metodo: deleteTag');
        return new Promise<TagModelo> ((resolve, reject) => {
            const delete_id = id;

            Tag.destroy({
                where: {id: delete_id}
            });
        });
    }
}
