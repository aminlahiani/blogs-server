const mongoose = require('mongoose')
const postSchema = new mongoose.Schema(
    {
        title : {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        image :  {
            type: String,
            required: true,
            trim: true
        },

    })

const Post = mongoose.model("Post", postSchema);

module.exports = Post;