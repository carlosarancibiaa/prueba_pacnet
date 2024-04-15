import { Router } from "express";
import { crearCliente, obtenerClientes, actualizarCliente, eliminarCliente } from "../controllers/clientes.controllers.js";

const router = Router();

router.post('/', crearCliente)
router.get('/', obtenerClientes)
router.put('/', actualizarCliente)
router.delete('/', eliminarCliente)

export default router;