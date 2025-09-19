document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.social-link');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const url = link.getAttribute('href');
            window.open(url, '_blank');
        });
    });

    // Simple fade-in effect
    const profileCard = document.querySelector('.profile-card');
    profileCard.style.opacity = '0';
    setTimeout(() => {
        profileCard.style.transition = 'opacity 1s ease';
        profileCard.style.opacity = '1';
    }, 100);
});
