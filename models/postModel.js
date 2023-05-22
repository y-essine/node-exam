const mongosoe = require('mongoose');

const postSchema = new mongosoe.Schema({
    content: {
        type: String,
        required: false
    },
    author: {
        type: mongosoe.Schema.Types.ObjectId,
        ref: 'User'
    },
    likes: {
        type: [mongosoe.Schema.Types.ObjectId],
        ref: 'User',
        default: []
    },
}, { timestamps: true });

module.exports = mongosoe.model('Post', postSchema);