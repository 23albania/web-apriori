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
