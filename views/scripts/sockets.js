const username = prompt('What is your name?');
if (!username || !username.trim())
    window.location.reload();

// random color for username
const color = Math.floor(Math.random() * 16777215).toString(16);
console.log(color);

const socket = io();

socket.on('connected', () => addConnected());

socket.emit('new-user', username);

socket.on('new-user', username => {
    addNewUser(username);
});

socket.on('user-typing', username => {
    addUserTyping(username);
});

socket.on('message-recieved', (data) => {
    addMessage(data)
});

socket.on('message-removed', (id) => {
    removeMessage(id);
});

const sendMessage = () => {
    const input = document.getElementById("chat-input");
    const content = input.value;
    socket.emit('message-sent', { username, content });
    input.value = "";
}

const sendTyping = () => {
    socket.emit('user-typing', username);
}