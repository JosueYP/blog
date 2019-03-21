import { Table, Model, Column, HasOne } from "sequelize-typescript";
import { Album } from './Album.model';

@Table
export default class Imagen extends Model<Imagen> {

    @Column({primaryKey: true, autoIncrement: true})
    idImagen: number;

    @Column
    nombreImagen: string;

    @Column
    directorio: string;

    @HasOne(()=>Album as any)
    album: Album;
}

export { Imagen }
/*
module.exports = (sequelize, Sequelize) => {
    const Image = sequelize.define('images', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        directorio: {
            type: Sequelize.STRING
        }
    });

    return Image;
}
*/