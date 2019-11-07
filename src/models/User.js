const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
/*     name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    createdAt: {    
        type: Date,
        default: Date.now,
    }, */

    name: String,
    email: String,
    password: String,
}, {
    timestamps: true,
});

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

autoIncrement.initialize(mongoose.connection);
UserSchema.plugin(autoIncrement.plugin, 'Counter');
module.exports = mongoose.model('User', UserSchema)
