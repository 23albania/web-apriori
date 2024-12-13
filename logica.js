//Slowscroll al uso de botones para redirigir a seccion

document.getElementById("btn-escribenos").addEventListener("click", function() {
    document.getElementById("contactanos").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("btn-sobre").addEventListener("click", function() {
    document.getElementById("servicios").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("btn-choice").addEventListener("click", function() {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
});

// Seleccionar el textarea y el contador
const textarea = document.getElementById('cuentanos');
const charCounter = document.getElementById('char-counter');

// Límite de caracteres
const maxChars = 5000;

// Evento para actualizar el contador de caracteres
textarea.addEventListener('input', () => {
    const charCount = textarea.value.length; // Cuenta los caracteres ingresados

    // Actualiza el contador en pantalla
    charCounter.textContent = `${charCount}/${maxChars} caracteres`;

    // Si excede el límite, recorta el texto
    if (charCount > maxChars) {
        textarea.value = textarea.value.slice(0, maxChars); // Limita al máximo permitido
        charCounter.textContent = `${maxChars}/${maxChars} caracteres`;
    }
});

const words = ["Apriori a","Antes de"];
let currentWordIndex = 0;

setInterval(() => {
    const fadeWordElement = document.getElementById("fade-word");
    fadeWordElement.style.opacity = "0";

    setTimeout(() => {
        currentWordIndex = (currentWordIndex + 1) % words.length;
        fadeWordElement.textContent = words[currentWordIndex];
        fadeWordElement.style.opacity = "1";
    }, 1000); // Tiempo sincronizado con la transición CSS
}, 3000); // Intervalo total (igual al tiempo total de la animación)


