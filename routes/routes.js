const express = require('express');
const router = express.Router();
const data = require('../db/data');
const controller = require('../controllers/index')

//retourne la liste de tous les joueurs
router.get("/findAllPlayers", controller.findAllPlayers)

// cherche un joueur selon un param equipe
router.get('/findTeam/:team', controller.findTeam);

//retourne un joueur au hasard
router.get('/randomPlayer', controller.randomPlayer);

module.exports = router;