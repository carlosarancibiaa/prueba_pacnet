import Sequelize from "sequelize";
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config()

let database, userName, password, host, port;

database = process.env.DB_NAME;
userName = process.env.DB_USERNAME;
host = process.env.DB_HOST;
password = process.env.DB_PASSWORD;
port = process.env.DB_PORT;

const sequelize = new Sequelize(database, userName, password, {
    host: host,
    dialect: 'postgres'
})

export default sequelize;