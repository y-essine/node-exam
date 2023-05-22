const addToFeed = (message) => {
    const p = document.createElement("p");
    p.innerText = message;
    const feed = document.getElementById("feed");
    feed.appendChild(p);
}