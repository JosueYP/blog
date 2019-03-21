import { Table, Model, ForeignKey, Column, Unique, AllowNull } from "sequelize-typescript";
import { Categoria} from './Categoria.model';

@Table
export default class CateCate extends Model<CateCate> {

    @Column({primaryKey: true, autoIncrement: true})
    idCateCate: number;

    @ForeignKey(()=>Categoria as any)
    @Column
    idCatPadre: number;

    @ForeignKey(()=>Categoria as any)
    @Column
    idCatHijo: number;

}

export { CateCate }