const socket = require('socket.io');
const setupsockets = (server) => {
    io = socket(server);

    io.on('connection', (socket) => {
        socket.emit('message', 'You are connected.');
        socket.on('new-user', (username) => {
            socket.broadcast.emit('new-user', username);
        });
        socket.on('message-sent', (data) => {
            socket.broadcast.emit('message-recieved', data);
        });
    });
}

module.exports = setupsockets;