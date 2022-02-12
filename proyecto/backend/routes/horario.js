const { Router } = require("express");
const { 
    horarioDelete, horarioPost, horarioGet, horarioPut,
    disponibilidadPost, disponibilidadGet, disponibilidadPut, disponibilidadDelete,
} = require("../controllers/horario");



const router = Router();


router.post('/horario/', [], horarioPost);
router.get('/horario/', [], horarioGet);
router.put('/horario/', [], horarioPut);
router.delete('/horario/', [], horarioDelete);

router.post('/disponibilidad/', [], disponibilidadPost);
router.get('/disponibilidad/', [], disponibilidadGet);
router.put('/disponibilidad/', [], disponibilidadPut);
router.delete('/disponibilidad/', [], disponibilidadDelete);


module.exports = router;