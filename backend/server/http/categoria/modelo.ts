//import Category from '../../conf/Category';
const Categoria = require('../../conf/Categoria.model');

import fs from 'fs';
import path from 'path';

export class CategoriaModelo {
    private _idCategoria: number;
    private _nombreCategoria: string;
    

    constructor(arg) {
        this._idCategoria = arg.id;
        this._nombreCategoria = arg.nombre;
    }

    public static crear(category) {
        console.log('CATEGORY MODEL - metodo: createCategory');

        console.log(category);
        
        return new Promise<CategoriaModelo> ((resolve, reject) => {
            Categoria.create({
                nombreCategoria: category.nombre
            }).then(response => response ? resolve(new CategoriaModelo(category)) : reject('La categoria no se ha podido crear'));            
        })
    }

    public static buscarTodos() {
        console.log('CATEGORY MODEL - metodo: searchAll');
        return new Promise<CategoriaModelo> ((resolve, reject) => {
            let categories = Categoria.findAll();
            if(categories) {
                console.log('CATEGORY MODEL - CATEGORIAS ENCONTRADAS');
                console.log(categories);
                resolve(categories);
            }else {
                reject('Categorias no encontradas')
            }
        });
    }

    public static buscarPorId(userId) {
        console.log('CATEGORY MODEL - metodo: searchById');
        return new Promise<CategoriaModelo>((resolve, reject) => {
            let category = Categoria.findById(userId);
            if(category){
                resolve(category);
            }else {
                reject('No se encontro la categoria');
            }
        });
    }

    public static actualizar(id, category) {
        console.log('CATEGORY MODEL - metodo: updateCategory');
        return new Promise<CategoriaModelo> ((resolve, reject) => {
            const update_id = id;

            Categoria.update({
                id: category.id,
                nombre: category.nombre},
                {where: {id: update_id}}
            );
        });
    }
   
    public static eliminar(id) {
        console.log('CATEGORY MODEL - metodo: deleteCategory');
        return new Promise<CategoriaModelo> ((resolve, reject) => {
            const delete_id = id;
            Categoria.destroy({
                where: {id: delete_id}
            });
        });
    }

}