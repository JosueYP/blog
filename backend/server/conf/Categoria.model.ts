import { Table, Column, Model, HasMany, PrimaryKey, AllowNull, Unique, HasOne, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { Album } from './Album.model';
import { CateCate } from './CateCate.model';

@Table
export default class Categoria extends Model<Categoria> {
    @Column({primaryKey: true, autoIncrement: true})
    idCategoria: number;

    @AllowNull(false)
    @Unique
    @Column
    nombreCategoria: string;

    @HasOne(()=> Album as any)
    album: Album;

    @BelongsToMany(()=> Categoria as any, 'cate_cate','idCate1','idCate2')
    categorias: Categoria[];


    @HasMany(()=> Categoria, 'IdCat')
    SubCategorias : Categoria[];

    @BelongsTo(()=> Categoria, 'IdCat')
    PreCategoria : Categoria[];

}

export { Categoria }
