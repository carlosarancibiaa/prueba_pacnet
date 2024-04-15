import Cliente from "../models/clientes.models.js";

const crearCliente = async (req, res) => {
    try {
        let { nombre, rut, email, telefono, servicio } = req.body;
        console.log(req.body)
        let nuevoCliente = await Cliente.create({
            nombre,
            rut,
            email,
            telefono,
            servicio
        });
        res.status(201).json({
            code: 201,
            mensaje: `Se ha creado un nuevo cliente con nombre ${nombre} y id: ${nuevoCliente.id}`
        });
    } catch (err) {
        console.log('Ocurrió un error al crear el cliente: ', err)
        res.status(500).json({
            code: 500,
            mensaje: 'Se ha producido un error en el servidor al intentar crear el nuevo cliente'
        })
    }
}

const obtenerClientes = async (req, res) => {
    try {
        let clientes = await Cliente.findAll({
            attributes: ['id', 'nombre', 'email', 'telefono']
        });
        res.status(201).json({
            code: 201,
            mensaje: 'Ok',
            datos: clientes
        })
    } catch (err) {
        console.log('Ocurrió un error al obtener los clientes: ', err)
        res.status(500).json({
            code: 500,
            mensaje: 'Se ha producido un error en el servidor al intentar obtener los clientes'
        })
    }
}

const actualizarCliente = async (req, res) => {
    try {
        let { id, nombre, rut, email, telefono, servicio } = req.body;
        let clienteActualizado
        let clienteEncontrado = await Cliente.findOne({
            where: {id: id},
            attributes: ['nombre', 'rut', 'id']
        })
        if (clienteEncontrado) {
            clienteActualizado = await Cliente.update({
                nombre: nombre,
                rut: rut,
                email: email,
                telefono: telefono,
                servicio: servicio
            },
            {
                where: { id: id },
            })
        } else {
            res.status(404).json({
                code: 404,
                mensaje: 'Cliente no existe en la base de datos'
            })
        }
        res.status(201).json({
            mensaje: `Cliente ${nombre} actualizado`
        })

    } catch (err) {
        console.log('Ha ocurido un error al intentar actualizar los datos del cliente', err)
        res.status(500).json({
            code: 500,
            mensaje: 'Se ha producido un error en el servidor al intentar actualizar los datos del cliente'
        })
    }
}

const eliminarCliente = async (req, res) => {
    try {
        let { id } = req.body;
        let clienteEliminado = await Cliente.destroy({
            where: {
                id: id
            }
        })
        res.status(200).json({
            mensaje: `Cliente con id: ${id} eliminado exitosamente`
        })

    } catch (err) {
        console.log('Error al eliminar al cliente',err)
        res.status(500).json({
            code:500,
            mensaje: 'Error al intentar eliminar al cliente de la base de datos'
        })

    }
}
export { crearCliente, obtenerClientes, actualizarCliente, eliminarCliente }