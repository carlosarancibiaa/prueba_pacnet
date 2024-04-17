import { Router } from "express";
import { mostrarIndex, mostrarFormCrear, mostrarFormActualizar } from "../controllers/vistas.controllers.js";

const router = Router();

router.get('/', mostrarIndex)
router.get('/crear', mostrarFormCrear)
router.get('/actualizar', mostrarFormActualizar)




export default router;