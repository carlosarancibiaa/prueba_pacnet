import express from 'express';
import clientesRoutes from './routes/clientes.routes.js'
import vistasRoutes from './routes/vistas.routes.js'
import exphbs from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from "url"; // __dirname no está disponible en el ámbito de los módulos ES, por lo que es necesario utilizar este módulo para trabajar con __dirname

const app = express()
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//configuraciones
app.set('views', path.resolve(__dirname, 'views') )
const hbs = exphbs.create({
defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}
)
app.engine('.hbs', hbs.engine)
app.set("view engine", ".hbs");


// middlewares
app.use(express.json());

app.use("/public", express.static(path.resolve(__dirname, "../public")));

// rutas
app.use('/api/v1/clientes', clientesRoutes )
app.use('/', vistasRoutes)

export default app;