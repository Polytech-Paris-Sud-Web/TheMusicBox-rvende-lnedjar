const express = require('express');
const router = express.Router();
const models = require('../../models');

module.exports = () => {

    router.get('/', async (req, res) => {
        //res.send('Get all my books');
       // user = await models.Users.findAll();
        models.MapPlaylistSongs.findAll().then((map) => {
            res.send(map);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
    });

    router.get('/:id', async (req, res) => {
        //user = await models.Users.findByPk(req.params.id);
        //res.send(user);
        if(validator.isInt(req.params.id)){
            models.MapPlaylistSongs.findByPk(req.params.id).then((map) => {
                res.send(map);
            }).catch((error) => {
                res.sendStatus(500);
            });
        }else{
            res.status(400).send("Bad parameter for Map ID, must be an integer");
        }  
    });

    router.post('/', (req, res) => {
        models.MapPlaylistSongs.create(req.body);
        res.status(200).send();
    });

    return router;
};