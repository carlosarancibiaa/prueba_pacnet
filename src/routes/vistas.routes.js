import { Router } from "express";

const router = Router();

router.get('/', (req, res)=>{
    try {
      res.render('index') 
    } catch (err) {
      console.log(err)
    }
  })

router.get('/crear', (req, res)=>{
  try {
    res.render('formularioCrear')
  } catch (err) {
    
  }
})

export default router;