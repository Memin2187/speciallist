const { Router } = require("express");
const { 
    citaPost,citaGet,citaPut,citaDelete,
    asuntoCitaPost,asuntoCitaGet,asuntoCitaPut,asuntoCitaDelete,
} = require("../controllers/cita");



const router = Router();

router.post('/cita/', [],citaPost);
router.post('/cita/', [],citaGet);
router.post('/cita/', [],citaPut);
router.post('/cita/', [],citaDelete);


router.post('/asunto/', [],asuntoCitaPost);
router.post('/asunto/', [],asuntoCitaGet);
router.post('/asunto/', [],asuntoCitaPut);
router.post('/asunto/', [],asuntoCitaDelete);


module.exports = router;