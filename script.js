const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// List of actual image filenames inside the images directory
const images = [
    'FIFA WORLD CUP 2026.jpg',
    'Argentina National Team Fifa World Cup 2026 USA-CANADA-MEXICO.jpg',
    'Brazil FIFA World Cup 2026 Poster Design 🇧🇷🔥.jpg',
    'France FIFA World Cup 2026 Poster Design 🇫🇷⚽.jpg',
    'Portugal National Team Fifa World Cup 2026 USA-CANADA-MEXICO.jpg',
    'image 3.jpg'
];

// Reference to current active thumbnail
let activeThumb = null;

// Dynamically generate thumbnails and add click handlers
images.forEach((imagePath, index) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${imagePath}`);
    newImage.setAttribute('alt', `World Cup Poster ${index + 1}`);
    
    // Set the first image thumbnail as active initially
    if (index === 0) {
        newImage.classList.add('active-thumb');
        activeThumb = newImage;
    }
    
    thumbBar.appendChild(newImage);

    // Event listener for swapping the display image with fade transition
    newImage.addEventListener('click', () => {
        if (activeThumb === newImage) return; // Already displaying this image

        // Remove active class from previous thumbnail and add to current
        if (activeThumb) {
            activeThumb.classList.remove('active-thumb');
        }
        newImage.classList.add('active-thumb');
        activeThumb = newImage;

        // Apply smooth transition
        displayedImage.classList.add('fade-out');
        setTimeout(() => {
            displayedImage.setAttribute('src', `images/${imagePath}`);
            displayedImage.setAttribute('alt', `World Cup Poster ${index + 1}`);
            displayedImage.classList.remove('fade-out');
        }, 200);
    });
});

// Darken / Lighten button handler with modern class state toggling
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');

    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten View';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.55)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken View';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});