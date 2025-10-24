document.getElementById('playPauseBtn').addEventListener('click', function() {
    const audio = document.getElementById('myAudio');
    audio.play().catch(error => {
        console.log('Audio playback failed:', error);
    });
});
    
const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        const themeBtn = document.getElementById('theme-toggle');
        if (themeBtn) {
            themeBtn.innerText = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
        }

        const navLinks = document.querySelectorAll(".nav-links a");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                const targetId = link.getAttribute("href");
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const aniElements = targetSection.querySelectorAll(".logo, .about-content, #left, #right, h2, .product-section, .product-text, table, .contact-container, .copyright, .why-container, #playPauseBtn, #theme-toggle");
                    aniElements.forEach(el => {
                        el.style.animation = "none";
                        void el.offsetWidth;
                        el.style.animation = "";
                    });
                }
            });
        });