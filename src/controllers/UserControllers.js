const User = require('../models/User');

module.exports = {

    async index(req, res){
        const users = await User.find();

        return res.json(users);
    },

    async create(req, res){
        const {name, email, password} = req.body;

    
            if (await User.findOne({email: email }))
                return res.status(400).send({error: 'Usuário já existe'})
    
            const user = await User.create({
                name,
                email,
                password,
            });
    
            return res.send({user});
     
    }
};
