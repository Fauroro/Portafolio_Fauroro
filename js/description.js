// Animación de letras
const phrases = [
    "Desarrollador de Software...",
    "Administrador de BBDD...",
    "Comprometido con el aprendizaje continuo...",
    "Entusiasta del trabajo en equipo...",
    "Enfocado en enfrentar nuevos desafíos...",
];

let currentPhraseIndex = 0;
let currentLetterIndex = 0;
const textElement = document.querySelector('.typed');
const typingSpeed = 100; // Velocidad de escritura en milisegundos por letra
const delayBetweenPhrases = 2000; // Retardo entre frases

function typePhrase() {
    const currentPhrase = phrases[currentPhraseIndex];

    // Añade la siguiente letra
    if (currentLetterIndex < currentPhrase.length) {
        textElement.textContent += currentPhrase.charAt(currentLetterIndex);
        currentLetterIndex++;
        setTimeout(typePhrase, typingSpeed);
    } else {
        // Espera un poco antes de cambiar a la siguiente frase
        setTimeout(() => {
            currentLetterIndex = 0;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            textElement.textContent = '';
            typePhrase();
        }, delayBetweenPhrases);
    }
}

// Iniciar la animación
typePhrase();