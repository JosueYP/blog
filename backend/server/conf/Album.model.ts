import { Table, Column, Model, AllowNull, BelongsTo, BelongsToMany, HasOne, ForeignKey } from "sequelize-typescript";
import { Categoria } from './Categoria.model'
import { Tag } from './Tag.model';
import { Usuario } from './Usuario.model';
import { Resena } from './Resena.model'
import { Imagen } from "./Imagen.model";

@Table
export default class Album extends Model<Album> {

    @Column({primaryKey: true, autoIncrement: true})
    idAlbum: number;

    @AllowNull(false)
    @Column
    nombreAlbum: string;

    @Column
    fechaSalida: string;

    @ForeignKey(()=> Categoria as any)
    idCategoria: number;

    @ForeignKey(()=> Imagen as any)
    idImagen: number;

    @BelongsTo(()=> Categoria as any)
    categoria: Categoria;

    @BelongsTo(()=>Imagen as any)
    imagen: Imagen;

    @BelongsToMany(()=>Tag as any, 'album_tag','idAlbum','idTag')
    tags: Tag[];


    @BelongsToMany(()=>Usuario as any, () => Resena as any)
    usuarios: Usuario[];
}

export { Album }
/*
module.exports = (sequelize, Sequelize) => {
    const Album = sequelize.define('albums', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        fecha: {
            type: Sequelize.DATEONLY
        }
    });

    return Album;
}
*/