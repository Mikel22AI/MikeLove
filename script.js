document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        setTimeout(() => {
            slide.style.opacity = '1';
            slide.style.transform = 'translateY(0)';
        }, index * 500); // Aparece cada slide con una diferencia de 0.5s
    });
});