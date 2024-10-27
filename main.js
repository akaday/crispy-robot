import { initializeVoiceCommands, handleVoiceCommand } from './src/voiceCommands';

document.getElementById('moodSelect').addEventListener('change', function() {
    const mood = this.value;
    changeTheme(mood);
    playSoundEffect(mood);
});

document.getElementById('activateVoiceCommandButton').addEventListener('click', function() {
    try {
        initializeVoiceCommands(handleVoiceCommand);
    } catch (error) {
        console.error("Error initializing voice commands:", error);
        displayVoiceCommandError("Voice command initialization failed. Please try again.");
    }
});

function changeTheme(mood) {
    let colors;
    switch(mood) {
        case 'happy':
            colors = ['#FFD700', '#FF8C00']; // Bright yellows and oranges
            playAnimation('happy');
            break;
        case 'calm':
            colors = ['#87CEFA', '#32CD32']; // Soft blues and greens
            playAnimation('calm');
            break;
        case 'energetic':
            colors = ['#FF4500', '#800080']; // Bold reds and purples
            playAnimation('energetic');
            break;
        case 'focused':
            colors = ['#D3D3D3', '#FFFFFF']; // Neutral greys and whites
            playAnimation('focused');
            break;
    }
    document.documentElement.style.setProperty('--primary-color', colors[0]);
    document.documentElement.style.setProperty('--secondary-color', colors[1]);
}

function playSoundEffect(mood) {
    let sound;
    switch(mood) {
        case 'happy':
            sound = 'sounds/happy.mp3';
            break;
        case 'calm':
            sound = 'sounds/calm.mp3';
            break;
        case 'energetic':
            sound = 'sounds/energetic.mp3';
            break;
        case 'focused':
            sound = 'sounds/focused.mp3';
            break;
    }
    const audio = new Audio(sound);
    audio.play();
}

function playAnimation(mood) {
    // Placeholder for animation logic
    console.log(`Playing ${mood} animation`);
}

function addItemToCart(item) {
    const cartItems = document.getElementById('cartItems');
    const listItem = document.createElement('li');
    listItem.textContent = item;
    cartItems.appendChild(listItem);
}

function displayVoiceCommandError(message) {
    const statusElement = document.getElementById('voiceCommandStatus');
    statusElement.textContent = message;
    statusElement.style.color = 'red';
}
