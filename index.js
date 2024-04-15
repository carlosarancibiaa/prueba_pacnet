import app from "./src/server.js";
import sequelize from "./src/config/database.config.js";

const PORT = process.env.PORT || 3001

const main = async ()=>{
    try {
        await sequelize.authenticate()
        console.log('Conexión realizada con éxito')
        await sequelize.sync({force: false, alter: true})
        app.listen(PORT, ()=>{
            console.log(`Servidor escuchando en el puerto: ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

main()