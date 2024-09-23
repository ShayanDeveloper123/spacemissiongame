// Smooth scroll for navigation links
const handleSmoothScroll = () => {
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            } else if (href.startsWith('#PPP')) {
                e.preventDefault();
                window.location.href = "index.html";
                const targetId = href.substring(1);
                document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            } else {
                window.location.href = href;
            }
        });
    });
};

document.addEventListener('DOMContentLoaded', handleSmoothScroll);domImage});
