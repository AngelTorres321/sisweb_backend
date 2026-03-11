import { Sequelize } from "sequelize-typescript";
import { Tag } from "../models/tag";

const connection = new Sequelize('sisweb_backend_db', 'sisweb_user', 'HDKbackend', {
    host: 'localhost',
    dialect: 'postgres',
    models: [Tag]
});

async function connectionDB() {
    try {
        await connection.authenticate();
        console.log('conexion exitosa a la DB');
        await connection.sync();
    }    catch (e) {
        console.error('error en la conexion con la DB: ', e);
    }
}

export default connectionDB;