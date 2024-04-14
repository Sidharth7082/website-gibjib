const numStars = 100;
for (let i = 0; i < numStars; i++) {
    let star = document.createElement('div');
    star.className = 'star';
    document.body.appendChild(star);
}

// Move stars
const stars = document.querySelectorAll('.star');
stars.forEach((star, index) => {
    const duration = Math.random() * 2 + 1;
    star.style.animation = `twinkle ${duration}s linear infinite`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
});
