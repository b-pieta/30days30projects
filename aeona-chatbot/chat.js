document.getElementById('send-button').addEventListener('click', sendMessage);

async function sendMessage() {
    const inputField = document.getElementById('message-input');
    const chatContainer = document.getElementById('chat-container');
    const userMessage = inputField.value.trim();

    if (userMessage) {
       
        appendMessage('You: ' + userMessage, chatContainer);

    
        const apiUrl = `http://localhost:3000/api/message?text=${encodeURIComponent(userMessage)}&userId=12312312312`;

        try {
            const response = await fetch(apiUrl); 
            const result = await response.text();

            
            appendMessage('Bot: ' + result, chatContainer);
        } catch (error) {
            console.error(error);
            appendMessage('Bot: Sorry, there was an error processing your message.', chatContainer);
        }

      
        inputField.value = '';
    }
}

function appendMessage(message, container) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    container.appendChild(messageElement);

    
    container.scrollTop = container.scrollHeight;
}
