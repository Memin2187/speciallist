const { Router } = require("express");
const { usuarioPost, usuariosGet, usuarioDelete, usuarioPut } = require("../controllers/usuario");



const router = Router();

router.post('/', [], usuarioPost);
router.get('/', [], usuariosGet);
router.put('/', [], usuarioPut);
router.delete('/', [], usuarioDelete);

module.exports = router;