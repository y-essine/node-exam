const { Post, User } = require('../models');

const postController = {
    getAll: async (req, res) => {
        try {
            const posts = await Post.find({}).populate('author', { password: 0, posts: 0 });
            res.json(posts);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    create: async (req, res) => {
        try {
            const { author, content } = req.body;
            const post = new Post({ author, content });
            const user = await User.findById(author);
            user.posts.push(post);
            await user.save();
            await post.save();
            res.status(200).json({ message: "OK" });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

module.exports = postController;