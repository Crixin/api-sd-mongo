const Evento = require('../models/Evento');

module.exports = {

    async index(req, res){
        
        const eventos = await Evento.find()

        return res.json(eventos);
    },

    async create(req, res){
        const {origem, destino, valor, traidor} = req.body;
        console.log(req.body);
        const evento = await Evento.create({
            origem, destino, valor, traidor
        }).catch( err =>{
            return res.status(400).send({error: err})
        });
            
        return res.send({evento});
    },

    async delete(req, res){
        const {id} = req.body;

            const evento = await Evento.deleteOne({_id: id}).catch( err =>{
                return res.status(400).send({error: err})
            });
            
            return res.send({evento});
       
    }
};
