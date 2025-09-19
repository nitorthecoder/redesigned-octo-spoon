document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.link-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const url = button.getAttribute('href');
            
            // Add a click animation
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
                window.open(url, '_blank');
            }, 200);
        });
    });

    // Fade-in animation for the container
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transition = 'opacity 1s ease';
    setTimeout(() => {
        container.style.opacity = '1';
    }, 100);
});
