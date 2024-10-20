// script.js

document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll('nav ul li a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link
            const targetId = this.getAttribute('href'); // Obtém o ID do alvo

            // Verifica se o alvo existe
            if (document.querySelector(targetId)) {
                const targetPosition = document.querySelector(targetId).offsetTop; // Obtém a posição do alvo
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth' // Habilita a rolagem suave
                });
            }
        });
    });
});
