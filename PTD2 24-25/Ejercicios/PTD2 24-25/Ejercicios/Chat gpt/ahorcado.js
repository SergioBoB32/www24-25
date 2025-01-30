let score = 0;
let targetElement = document.getElementById('target');
let scoreDisplay = document.getElementById('score');
let gameArea = document.getElementById('game-area');

// Función para mover el cuadrado aleatoriamente dentro del área de juego
function moveTarget() {
    const gameAreaWidth = gameArea.offsetWidth;
    const gameAreaHeight = gameArea.offsetHeight;

    const randomX = Math.random() * (gameAreaWidth - targetElement.offsetWidth);
    const randomY = Math.random() * (gameAreaHeight - targetElement.offsetHeight);

    targetElement.style.left = randomX + 'px';
    targetElement.style.top = randomY + 'px';
}

// Función para actualizar el puntaje
function updateScore() {
    score++;
    scoreDisplay.textContent = score;
}

// Función para manejar el clic sobre el cuadrado
targetElement.addEventListener('click', function() {
    updateScore();
    moveTarget();
});

// Mover el cuadrado cuando la página se carga por primera vez
moveTarget();