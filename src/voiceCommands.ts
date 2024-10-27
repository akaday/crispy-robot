const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.continuous = true;
recognition.interimResults = false;
recognition.lang = 'en-US';

export function initializeVoiceCommands(callback) {
    recognition.onresult = (event) => {
        const transcript = event.results[event.resultIndex][0].transcript.trim();
        callback(transcript);
    };
    recognition.start();
}

export function handleVoiceCommand(command) {
    if (command.toLowerCase().includes('add')) {
        const item = command.split('add')[1].trim();
        addItemToCart(item);
    }
}

function addItemToCart(item) {
    const cartItems = document.getElementById('cartItems');
    const listItem = document.createElement('li');
    listItem.textContent = item;
    cartItems.appendChild(listItem);
}
