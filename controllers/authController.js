const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/userModel');
const { JWT_SECRET } = require('../config');

const authController = {
    login: async (req, res) => {
        const { username, password } = req.body;
        await User.findOne({ username: username.toLowerCase() })
            .then(user => {
                if (!user) {
                    return res.status(404).json({ message: "User not found" });
                }
                const passwordIsValid = bcrypt.compareSync(password, user.password);
                if (!passwordIsValid) {
                    return res.status(401).json({ message: "Invalid password" });
                }
                const token = jwt.sign({ id: user._id }, JWT_SECRET, {
                    expiresIn: 86400 // expires in 24 hours
                });
                return res.status(200).json({ token });
            });
    },
    register: async (req, res) => {
        const { username, email, password } = req.body;
        const user = new User({
            username: username.toLowerCase(),
            email,
            password: bcrypt.hashSync(password, 8)
        });
        await user.save().then(() => {
            return res.status(200).json({ message: "OK" });
        }).catch(err => {
            return res.status(500).json({ message: err });
        });
    }
}

module.exports = authController;