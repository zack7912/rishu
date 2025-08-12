const revealBtn = document.getElementById('reveal-btn');
const firstScreen = document.getElementById('first-screen');
const secondScreen = document.getElementById('second-screen');
const finalScreen = document.getElementById('final-screen');
const yesBtn = document.getElementById('yes-btn');
const quoteEl = document.getElementById('quote');

const quotes = [
    "Every love story is beautiful, but ours is my favorite.",
    "You make my heart smile.",
    "Life is better with you.",
    "Will you be mine forever?"
];

let quoteIndex = 0;

revealBtn.addEventListener('click', () => {
    firstScreen.classList.add('hidden');
    secondScreen.classList.remove('hidden');
    startConfetti();
    showQuotes();
});

yesBtn.addEventListener('click', () => {
    secondScreen.classList.add('hidden');
    finalScreen.classList.remove('hidden');
});

function showQuotes() {
    if (quoteIndex < quotes.length) {
        quoteEl.textContent = quotes[quoteIndex];
        quoteIndex++;
        setTimeout(showQuotes, 2000);
    }
}

// Confetti Animation
function startConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confetti = Array.from({length: 100}).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 6 + 4,
        dx: Math.random() - 0.5,
        dy: Math.random() * 2 + 1,
        color: `hsl(${Math.random() * 360}, 100%, 70%)`
    }));

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach(c => {
            ctx.beginPath();
            ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
            ctx.fillStyle = c.color;
            ctx.fill();
        });
        update();
        requestAnimationFrame(draw);
    }

    function update() {
        confetti.forEach(c => {
            c.x += c.dx;
            c.y += c.dy;
            if (c.y > canvas.height) c.y = 0;
        });
    }

    draw();
}
