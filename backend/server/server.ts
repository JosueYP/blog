import { Config } from './conf/config';
import { ServerExpress } from './main';
import { Conexion } from './http/conexion';

let config = new Config();

let my_path = __dirname;
let conexion = new Conexion(config, my_path);


let server = ServerExpress.init(
    config.appConfig.port,
    config.modo,
    config.allowsUrls
);

server.iniciarServidor(() => {
    console.log('Servidor iniciado en el puerto: ', config.appConfig.port);
});


