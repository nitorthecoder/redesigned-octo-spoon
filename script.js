document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.social-link');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const url = link.getAttribute('href');
            window.open(url, '_blank');
        });
    });

    const avatar = document.querySelector('.avatar');
    avatar.addEventListener('mouseover', () => {
        avatar.style.boxShadow = '0 0 30px rgba(192, 192, 192, 0.8), 0 0 20px rgba(255, 0, 0, 0.6)';
    });
    avatar.addEventListener('mouseout', () => {
        avatar.style.boxShadow = '0 0 20px rgba(192, 192, 192, 0.6), 0 0 10px rgba(255, 0, 0, 0.3)';
    });

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.background = `rgba(255, 0, 0, ${Math.random() * 0.4 + 0.1})`;
        document.querySelector('.profile-container').appendChild(particle);
        setTimeout(() => particle.remove(), 1500);
    }
    setInterval(createParticle, 150);
});
