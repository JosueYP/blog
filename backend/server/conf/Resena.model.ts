import { Model, Table, Column, AllowNull, DataType, ForeignKey } from "sequelize-typescript";
import { Album } from './Album.model';
import { Usuario } from './Usuario.model';

@Table
export default class Resena extends Model<Resena> {
    @Column({primaryKey: true, autoIncrement: true})
    idResena: number;

    @Column
    numeroEstrellas: number;

    @Column(DataType.TEXT)
    comentario: string;

    @ForeignKey(()=> Album as any)
    @Column
    idAlbum: number;

    @ForeignKey(() => Usuario as any)
    @Column
    idUsuario: number;

}

export { Resena }
/*
module.exports = (sequelize, Sequelize) => {
    const Review = sequelize.define('review', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        numeroEstrellas: {
            type: Sequelize.INTEGER
        },
        comentario: {
            type: Sequelize.TEXT
        }
    });
    return Review;
}
*/
