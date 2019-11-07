const Workspace = require('../models/Workspace');
const ObjectId = require('mongodb').ObjectId; 

module.exports = {

    async index(req, res){
        const {id} = req.body;
        
        const workspaces = await ((id) ? Workspace.find({"_id": id} ) : Workspace.find())

        return res.json(workspaces);
    },

    async create(req, res){
        const {name} = req.body;

        if (await Workspace.findOne({name: name }))
            return res.status(400).send({error: 'Workspace já existe'})

        const workspace = await Workspace.create({
            name,
        });

        return res.send({workspace});
    }
};
