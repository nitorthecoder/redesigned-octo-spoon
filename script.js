document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.social-link');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const url = link.getAttribute('href');
            window.open(url, '_blank');
        });
    });

    // Add subtle glow effect on hover for avatar
    const avatar = document.querySelector('.avatar');
    avatar.addEventListener('mouseover', () => {
        avatar.style.boxShadow = '0 0 20px rgba(255, 105, 180, 0.9)';
    });
    avatar.addEventListener('mouseout', () => {
        avatar.style.boxShadow = '0 0 15px rgba(255, 105, 180, 0.7)';
    });
});
