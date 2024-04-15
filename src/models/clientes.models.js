import { DataTypes } from "sequelize";
import sequelize from "../config/database.config.js";

const Cliente = sequelize.define(
    'clientes',
    {
        nombre:{
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        rut: {
            type: DataTypes.STRING(10),
            allowNull: false,
            unique: true,
            validate: {
                len: [9, 10]
            }
        },
        email: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,

        },
        telefono: {
            type: DataTypes.STRING(12),
            allowNull: true,
            validate:{
                len: [12]
            }
        },
        servicio: {
            type: DataTypes.STRING(40),
            allowNull: false

        }

    }
)


export default Cliente;