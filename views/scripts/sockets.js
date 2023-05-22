

const username = prompt('What is your name?');
if (!username.trim())
    window.location.reload();

const socket = io();

socket.on('message', message => {
    console.log(message);
});

socket.emit('new-user', username);

socket.on('new-user', message => {
    addToFeed(message + "has joined the chat.");
});

socket.on('message-recieved', (data)=> {
    addToFeed(data.username + ": " + data.content)
});

const sendMessage = (e) => {
    console.log(e.keyCode);
    e.preventDefault();
    if (!e.keyCode === 13)
        {
            console.log("press enter.");
            return;
        }
    const input = document.getElementById("chat-input");
    const content= input.value;
    socket.emit('message-sent', {username, content});
    input.value = "";
}