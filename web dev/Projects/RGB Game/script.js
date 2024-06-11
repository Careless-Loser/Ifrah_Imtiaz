// Advanced RGB Color Guessing Game

const levels = [
    { numOptions: 4, lives: 3 },
    { numOptions: 4, lives: 2 },
    { numOptions: 4, lives: 1 },
    { numOptions: 4, lives: 1 }
];

let currentLevel = null; // Current level (null initially)
let colors = []; // Array to store RGB color values
let pickedColor; // RGB color value to guess
let score = 0; // Current score
let lives; // Number of chances

const heartsContainer = document.getElementById('hearts');
const colorDisplay = document.getElementById('colorDisplay');
const message = document.getElementById('message');
const optionsContainer = document.getElementById('options');
const resetButton = document.getElementById('reset');
const levelButtons = document.querySelectorAll('.level');

// Function to generate a random RGB color
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to pick a random color from the array
function pickColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Function to set up the game
function setupGame(level) {
    currentLevel = level;
    colors = generateRandomColors(level.numOptions);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    message.textContent = '';
    score = 0; // Reset score
    lives = level.lives; // Set lives for current level
    resetButton.style.display = 'none'; // Hide the Play Again button
    resetButton.style.position = 'static'; // Reset the button position
    renderHearts();
    renderOptions();
}

// Function to generate an array of random RGB colors
function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

// Function to update heart display based on lives
function renderHearts() {
    heartsContainer.innerHTML = ''; // Clear previous hearts
    for (let i = 0; i < lives; i++) {
        const heartImg = document.createElement('img');
        heartImg.src = 'Image/heart.png'; // Update the source of the heart image
        heartImg.alt = 'Heart';
        heartImg.classList.add('heart');
        heartsContainer.appendChild(heartImg);
    }
}

// Function to render color options
function renderOptions() {
    optionsContainer.innerHTML = ''; // Clear previous options
    for (let color of colors) {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.style.backgroundColor = color;
        optionDiv.addEventListener('click', function() {
            if (this.style.backgroundColor === pickedColor) {
                message.textContent = 'Correct!';
                score++;
                if (score === currentLevel.numOptions) {
                    message.textContent = `You Win! Your final score is ${score}`;
                    resetButton.style.display = 'block';
                    resetButton.style.position = 'absolute'; // Adjust button position
                    resetButton.style.left = '50%'; // Center the button horizontally
                    resetButton.style.transform = 'translateX(-50%)'; // Center the button horizontally
                } else {
                    pickedColor = pickColor(); // Select a new color
                    colorDisplay.textContent = pickedColor; // Update displayed color
                }
            } else {
                message.textContent = 'Try Again!';
                lives--;
                renderHearts();
                if (lives === 0) {
                    message.textContent = `Game Over! Your final score is ${score}`;
                    resetButton.style.display = 'block';
                    resetButton.style.position = 'absolute'; // Adjust button position
                    resetButton.style.left = '50%'; // Center the button horizontally
                    resetButton.style.transform = 'translateX(-50%)'; // Center the button horizontally
                }
            }
        });
        optionsContainer.appendChild(optionDiv);
    }
}

// Event listener for Play Again button
resetButton.addEventListener('click', function() {
    setupGame(currentLevel);
});

// Event listener for level buttons
levelButtons.forEach(button => {
    button.addEventListener('click', function() {
        const levelIndex = parseInt(this.getAttribute('data-level'));
        setupGame(levels[levelIndex]);
        optionsContainer.style.display = 'flex'; // Show circles after choosing a level
        resetButton.style.display = 'none'; // Hide Play Again button when starting a new level
    });
});

// Initial setup
setupGame(currentLevel);
