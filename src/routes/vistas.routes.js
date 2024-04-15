import { Router } from "express";
import { mostrarIndex, mostrarFormCrear, mostrarClientes, mostrarFormActualizar } from "../controllers/vistas.controllers.js";

const router = Router();

router.get('/', mostrarIndex)
router.get('/crear', mostrarFormCrear)
router.get('/verClientes', mostrarClientes )
router.get('/actualizar', mostrarFormActualizar)
router.get('/clienteActualizado', (req, res)=>{
  res.render('clienteActualizado')
})



export default router;