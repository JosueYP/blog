import { Model, Column, Table, Unique, AllowNull, BelongsToMany } from "sequelize-typescript";
import { Album } from './Album.model';
import { Resena } from './Resena.model';

@Table
export default class Usuario extends Model<Usuario> {

    @Column({primaryKey: true, autoIncrement: true})
    idUsuario: number;

    @AllowNull(false)
    @Column
    nombreUsuario: string;

    @AllowNull(false)
    @Unique
    @Column 
    correo: string;
    
    @AllowNull(false)
    @Column 
    password: string;

    @BelongsToMany(()=>Album as any, () => Resena as any)
    albums: Album[];
}
export { Usuario }
/*
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        correo: {
            type: Sequelize.STRING
        },
        constrasena: {
            type: Sequelize.STRING
        }
    });
    return User;
}
*/