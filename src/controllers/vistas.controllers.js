import Handlebars from 'handlebars'

const mostrarIndex = async (req, res) => {
    try {
        const response = await fetch('http://localhost:3000/api/v1/clientes');
        const data = await response.json();
        let datos = data.datos
        // Acá creo un helper para utilizarlo en la plantilla de mi index.hbs y poder mandar el objeto con el cual pintamos los datos en la fila por un input y poder utilizar esos datos para rellenar por defecto los input del formulario 'Actualizar cliente' y la edición de los daros sea más fácil. El helper hace posible usar el método JSON.stringify en la plantilla misma y de esta manera podemos convertir un objeto recibido en nuestra desde una iteración de una arreglo en una cadena de texto JSON para poder enviarla nuevamente en, por ej, un input como hicimos en este caso
        Handlebars.registerHelper('json', function(context) {
            return JSON.stringify(context);
        })

        res.render('index', {datos})
    } catch (err) {
        console.log(err)
    }
}

const mostrarFormCrear = (req, res) => {
    try {
        res.render('formularioCrear')
    } catch (err) {

    }
}


const mostrarFormActualizar = async (req, res) =>{
    try {
      let  datos = JSON.parse(req.body.datos);

        res.render('formularioActualizar', datos)
    } catch (err) {
        console.log(err)
    }
}

export { mostrarIndex, mostrarFormCrear, mostrarFormActualizar }