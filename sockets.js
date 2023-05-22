const socket = require('socket.io');

const setupsockets = (server) => {
    io = socket(server);

    io.on('connection', (socket) => {
        socket.emit('connected');
        socket.on('new-user', (username) => {
            socket.broadcast.emit('new-user', username);
        });
        socket.on('message-sent', (data) => {
            data.id = Math.floor(Math.random() * 100000000);
            io.emit('message-recieved', data);
        });
        socket.on('message-removed', (id) => {
            io.emit('message-removed', id);
        });
        socket.on('user-typing', (username) => {
            socket.broadcast.emit('user-typing', username);
        });
    });
}

module.exports = setupsockets;