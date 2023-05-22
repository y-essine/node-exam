const User = require('../models/userModel');

const userController = {
    getAll: async (req, res) => {
        try {
            const users = await User.find({}, { password: 0 });
            res.json(users);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

module.exports = userController;