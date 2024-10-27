document.getElementById('moodSelect').addEventListener('change', function() {
    const mood = this.value;
    changeTheme(mood);
});

function changeTheme(mood) {
    let colors;
    switch(mood) {
        case 'happy':
            colors = ['#FFD700', '#FF8C00']; // Bright yellows and oranges
            break;
        case 'calm':
            colors = ['#87CEFA', '#32CD32']; // Soft blues and greens
            break;
        case 'energetic':
            colors = ['#FF4500', '#800080']; // Bold reds and purples
            break;
        case 'focused':
            colors = ['#D3D3D3', '#FFFFFF']; // Neutral greys and whites
            break;
    }
    document.documentElement.style.setProperty('--primary-color', colors[0]);
    document.documentElement.style.setProperty('--secondary-color', colors[1]);
}
