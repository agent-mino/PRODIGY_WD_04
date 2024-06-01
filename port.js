document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('header,#abou, h1, header ,p, .about, .skills, .sides,h2, .projects, .contact, #about, h2, footer, a, .btn ');

    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transition = 'opacity 0.6s ease-in-out';
    });

    setTimeout(() => {
        elements.forEach(el => {
            el.style.opacity = 1;
        });
    }, 500);
});