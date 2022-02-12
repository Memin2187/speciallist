const { Router } = require("express");
const { 
    tituloPost, titulosGet, tituloPut, tituloDelete,
    especialidadPost, especialidadesGet, especialidadPut, especialidadDelete,
    especialistaPost, especialistasGet, especialistaPut, especialistaDelete,
    clinicaPost, clinicasGet, clinicaPut, clinicaDelete,
} = require("../controllers/especialista");

const router = Router();

router.post('/titulo/', [], tituloPost);
router.get('/titulo/', [], titulosGet);
router.put('/titulo/', [], tituloPut);
router.delete('/titulo/', [], tituloDelete);

router.post('/especialidad/', [], especialidadPost);
router.get('/especialidad/', [], especialidadesGet);
router.put('/especialidad/', [], especialidadPut);
router.delete('/especialidad/', [], especialidadDelete);

router.post('/especialista/', [], especialistaPost);
router.get('/especialista/', [], especialistasGet);
router.put('/especialista/', [], especialistaPut);
router.delete('/especialista/', [], especialistaDelete);

router.post('/clinica/', [], clinicaPost); 
router.get('/clinica/', [], clinicasGet); 
router.put('/clinica/', [], clinicaPut); 
router.delete('/clinica/', [], clinicaDelete);

module.exports = router;