const mostrarIndex = (req, res) => {
    try {
        res.render('index')
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

const mostrarClientes = async (req, res) => {
    try {
        const response = await fetch('http://localhost:3000/api/v1/clientes');
        const data = await response.json();
        let datos = data.datos
        console.log(datos)
        res.render('mostrarClientes', { datos })
    } catch (err) {
        console.log(err)
    }
}

const mostrarFormActualizar = async (req, res) =>{
    try {
        res.render('formularioActualizar')
    } catch (err) {
        console.log(err)
    }
}
export { mostrarIndex, mostrarFormCrear, mostrarClientes, mostrarFormActualizar }