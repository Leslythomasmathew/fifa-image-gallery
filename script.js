const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const overlay = document.querySelector('.overlay');
const images = [
    'FIFA WORLD CUP 2026.jpg',
    'Argentina National Team Fifa World Cup 2026 USA-CANADA-MEXICO.jpg',
    'Brazil FIFA World Cup 2026 Poster Design 🇧🇷🔥.jpg',
    'France FIFA World Cup 2026 Poster Design 🇫🇷⚽.jpg',
    'Portugal National Team Fifa World Cup 2026 USA-CANADA-MEXICO.jpg',
    'image 3.jpg'
];
let activeThumb = null;

images.forEach((imagePath, index) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${imagePath}`);
    newImage.setAttribute('alt', `World Cup Poster ${index + 1}`);
    
    if (index === 0) {
        newImage.classList.add('active-thumb');
        activeThumb = newImage;
    }
    
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => {
        if (activeThumb === newImage) return; 

        if (activeThumb) {
            activeThumb.classList.remove('active-thumb');
        }
        newImage.classList.add('active-thumb');
        activeThumb = newImage;

        displayedImage.classList.add('fade-out');
        setTimeout(() => {
            displayedImage.setAttribute('src', `images/${imagePath}`);
            displayedImage.setAttribute('alt', `World Cup Poster ${index + 1}`);
            displayedImage.classList.remove('fade-out');
        }, 200);
    });
});
