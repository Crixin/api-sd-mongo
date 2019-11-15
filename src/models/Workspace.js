const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const WorkspaceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});

autoIncrement.initialize(mongoose.connection);
WorkspaceSchema.plugin(autoIncrement.plugin, 'Counter');
module.exports = mongoose.model('Workspace', WorkspaceSchema)
