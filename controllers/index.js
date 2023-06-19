const data = require('../db/data');

const controller = {
    findAllPlayers: (req, res) => {
        res.json({data});
    }, 

    findTeam : (req, res) => {
        const team = req.params.team;
    
        const result = data.filter(player => player.equipe == team)
    
        if(result.length == 0){
            res.json({message: "équipe introuvable"})
        }else{
            res.json({result});
        }
    },

    randomPlayer : (req, res) => {
        const numMax = data.length;
        const number = Math.floor(Math.random()*numMax);
    
        const result = data[number];
        res.json({result});
    }
}

module.exports = controller;