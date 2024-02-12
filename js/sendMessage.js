function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        var chatBody = document.getElementById("chat-body");
        var message = document.createElement("div");
        message.classList.add("chat-message", "user-message");
        message.textContent = userInput;
        chatBody.appendChild(message);
        document.getElementById("user-input").value = "";
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}
