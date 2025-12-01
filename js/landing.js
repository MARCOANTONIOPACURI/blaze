// Landing Page JavaScript

// Ocultar spinner y mostrar contenido después de cargar
window.addEventListener('load', function() {
    setTimeout(function() {
        const spinner = document.getElementById('spinner');
        if (spinner) {
            spinner.classList.add('hide');
        }
        
        // Mostrar el contenido principal después de ocultar el spinner
        setTimeout(function() {
            const mainContent = document.querySelector('.container-fluid.p-0');
            if (mainContent) {
                mainContent.style.display = 'block';
            }
        }, 800);
    }, 2000); // Mostrar spinner por 2 segundos
});

// Crear partículas de fuego
const particlesContainer = document.getElementById('fireParticles');
if (particlesContainer) {
    const particleCount = 50;

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 2 + 2) + 's';
        particle.style.animationDelay = Math.random() * 3 + 's';
        
        // Colores variados de fuego
        const colors = ['#ff3d00', '#ff6b35', '#ff9500', '#ffb300'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        particle.style.boxShadow = `0 0 10px ${color}`;
        
        particlesContainer.appendChild(particle);

        // Remover y recrear partícula después de la animación
        setTimeout(() => {
            particle.remove();
            createParticle();
        }, parseFloat(particle.style.animationDuration) * 1000);
    }

    // Crear partículas iniciales
    for (let i = 0; i < particleCount; i++) {
        setTimeout(createParticle, i * 100);
    }
}

// Smooth scroll para los botones del hero
document.querySelectorAll('.hero a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            // Ocultar la sección hero
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.display = 'none';
            }
            
            // Hacer scroll al objetivo
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});