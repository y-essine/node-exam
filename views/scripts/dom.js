const addToFeed = (el) => {
    const feed = document.getElementById("feed");
    feed.prepend(el);
}

const addToTyping = (el) => {
    const typing = document.getElementById("typing");
    typing.prepend(el);
}

const addConnected = () => {
    const p = document.createElement("p");
    p.innerText = "Connected!";
    p.style.color = "grey";
    addToFeed(p);
}

const addNewUser = (username) => {
    const p = document.createElement("p");
    p.innerText = username + " has joined the chat.";
    p.style.color = "green";
    addToFeed(p);
}

let timers = {};

const addUserTyping = (username) => {
    if (timers[username]) {
        clearTimeout(timers[username]);
        delete timers[username];
        timers[username] = setTimeout(() => {
            const p = document.getElementById(username);
            p.remove();
            delete timers[username];
        }, 400);
        return;
    }
    const p = document.createElement("p");
    p.innerText = username + " is typing...";
    p.style.color = "blue";
    p.id = username;
    addToTyping(p);
    timers[username] = setTimeout(() => {
        p.remove();
        delete timers[username];
    }, 1000);
}

const addMessage = (data) => {
    const p = document.createElement("p");

    const span = document.createElement("span");
    span.innerText = data.username + ": ";
    span.style.fontWeight = "bold";
    p.appendChild(span);

    const span2 = document.createElement("span");
    span2.innerText = data.content;
    span2.id = "content" + data.id;
    p.appendChild(span2);

    if (data.username == username) {
        const button = document.createElement("button");
        button.innerText = "Remove";
        button.onclick = () => {
            socket.emit('message-removed', data.id);
            button.remove();
        }
        p.appendChild(button);
    }

    addToFeed(p);
}

const removeMessage = (id) => {
    const p = document.getElementById("content" + id);
    p.innerText = "Message removed.";
    p.style.fontStyle = "italic";
    p.style.color = "grey";
    p.style.fontSize = ".8em";
}

document.getElementById("chat-input").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
    else {
        sendTyping();
    }
});