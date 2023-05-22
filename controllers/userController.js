const userController = {
    getAll: async (req, res) => {
        try {
            // const users = await User.find();
            const users = await new Promise(resolve => {
                setTimeout(() => {
                    resolve([
                        { id: 1, name: 'Mohamed Neymar' },
                        { id: 2, name: 'Hamdi Mbappe' },
                    ])
                }, 1000);
            });
            res.json(users);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

module.exports = userController;