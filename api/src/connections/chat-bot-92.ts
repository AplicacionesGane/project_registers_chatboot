import { Sequelize } from 'sequelize';

const DB_HOST = process.env.HOSTMYSQL as string;
const DB_USER = process.env.USUARIO as string;
const DB_PASS = process.env.PASSWORD as string;
const DB_NAME = process.env.NAME_DATABASE as string;
const DB_PORT = process.env.PUERTO as string;

const chat_bot = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: parseInt(DB_PORT),
  dialect: 'mysql'
})

export { chat_bot};