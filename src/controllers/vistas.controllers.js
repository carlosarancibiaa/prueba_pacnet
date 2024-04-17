const mostrarIndex = async (req, res) => {
    try {
        const response = await fetch('http://localhost:3000/api/v1/clientes');
        const data = await response.json();
        let datos = data.datos
        console.log(datos)
        res.render('index', { datos })
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
      let  {id} = req.body;
        console.log(req.body)
        res.render('formularioActualizar', {id})
    } catch (err) {
        console.log(err)
    }
}

export { mostrarIndex, mostrarFormCrear, mostrarFormActualizar }