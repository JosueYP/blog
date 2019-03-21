import { Config } from '../conf/config';
import { Sequelize } from 'sequelize-typescript';
import path from 'path';

export class Conexion extends Sequelize{

    constructor(config, father_path) {
        console.log('CONTRUCTOR CONEXION');
        console.log(father_path+'/conf/*.ts');
        super({
            database: config.db.database,
            dialect: config.db.dialect,
            username: config.db.username,
            password: config.db.password,
            host: config.db.host,
            port: config.db.port,
            modelPaths:[father_path+'/conf/**/*.model.ts'],
            modelMatch: (filename, member) => {
                return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
            },
            logging : false
        });

        this.sync()
            .then(()=>{
                console.log('Database and tables created');
            });



        //this.addModels([father_path+'/conf/**/*.model.ts']);


    }

}

/*import { Config } from "../conf/config";
import sequelize = require('sequelize');
const Sequelize = require('sequelize');

const Album = require('../conf/album');
const Category = require('../conf/category');
const Image = require('../conf/image');
const Tag = require('../conf/tag');
const User = require('../conf/user');

const Review = require('../conf/review');

export class Conexion {

    private _config: Config;
    private _sequelize: any;

    constructor(config) {

        console.log('----CONSTRUCTOR DE CONEXION----');
        this._config = config;
        this._sequelize = new Sequelize(
            this._config.db.database,
            this._config.db.username,
            this._config.db.password, {
                host: this._config.db.host,
                dialect: this._config.db.dialect,
                port: 3306,
                pool: {
                    max: 10,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                },
                logging: false
            }
        );
        this.createTables();
    }


    createTables() {
        console.log('CREANDO TABLAS');

        let Categories = Category(this._sequelize, Sequelize);
        let Tags = Tag(this._sequelize, Sequelize);
        let Users = User(this._sequelize, Sequelize);
        let Images = Image(this._sequelize, Sequelize);
        let Albums = Album(this._sequelize, Sequelize);
        let Reviews = Review(this._sequelize, Sequelize);

        Categories.hasMany(Albums);

        Tags.belongsToMany(Albums, {through: 'AlbumsTags'});
        Albums.belongsToMany(Tags, {through: 'AlbumsTags'});

        Users.belongsToMany(Albums, {through: Reviews});
        Albums.belongsToMany(Users, {through: Reviews});

        this._sequelize.sync({force: false})
            .then(() => {
                console.log('Database and tables created');
            });

    }
}
*/
