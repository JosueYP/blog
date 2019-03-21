import { Model, Table, Column, AllowNull, BelongsToMany } from "sequelize-typescript";
import { Album } from './Album.model';

@Table
export default class Tag extends Model<Tag> {
    
    @Column({primaryKey: true, autoIncrement: true})
    idTag: number;
    
    @AllowNull(false)
    @Column
    nombreTag: string

    @BelongsToMany (()=> Album as any, 'album_tag','idTag','idAlbum')
    albums: Album[];

}

export { Tag }