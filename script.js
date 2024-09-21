// Handle video controls
const handleVideoControls = () => {
    const videos = document.querySelectorAll('.video-item video');

    videos.forEach(video => {
        video.classList.remove('hide-controls');

        video.addEventListener('play', () => video.classList.remove('hide-controls'));
        video.addEventListener('pause', () => video.classList.add('hide-controls'));
        video.addEventListener('ended', () => video.classList.add('hide-controls'));
    });
};

document.addEventListener('DOMContentLoaded', handleVideoControls);

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

document.addEventListener('DOMContentLoaded', handleSmoothScroll);

// Handle feedback form
const handleFeedback = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const feedback = {
        name: name,
        email: email,
        message: message,
        date: new Date().toLocaleString()
    };

    let feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
    feedbackList.push(feedback);
    localStorage.setItem('feedbackList', JSON.stringify(feedbackList));

    document.getElementById('feedbackForm').reset();
    displayFeedback(feedbackList);
};

const displayFeedback = (feedbackList) => {
    const feedbackDisplay = document.getElementById('feedbackDisplay');
    feedbackDisplay.innerHTML = '<h3>Feedback Received:</h3>';

    feedbackList.forEach(feedback => {
        feedbackDisplay.innerHTML += `
            <div class="feedback-item">
                <div class="feedback-header">
                    <p class="feedback-name"><strong>${feedback.name}</strong></p>
                    <p class="feedback-date">${feedback.date}</p>
                </div>
                <div class="feedback-message">
                    <p>${feedback.message}</p>
                </div>
            </div>
        `;
    });

    feedbackDisplay.style.display = 'block';
};

// Load and display feedback on page load
window.onload = () => {
    const feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
    displayFeedback(feedbackList);
};

// Set a random background image
const setRandomBackgroundImage = () => {
    const images = [
        'Background/1.jpg',
        'Background/2.jpg',
        'Background/3.jpg',
        'Background/4.jpg',
        'Background/5.jpg'
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url('${randomImage}')`;
};

document.addEventListener('DOMContentLoaded', setRandomBackgroundImage);
