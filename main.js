const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => document.body.classList.toggle('dark'));

const digitalClock = document.getElementById('digitalClock');
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    digitalClock.textContent = time;
}
updateClock();
setInterval(updateClock, 1000);


const nameInput = document.getElementById('nameInput');
const nameSubmit = document.getElementById('nameSubmit');
const nameMessage = document.getElementById('nameMessage');
nameSubmit.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (!name) {
        nameMessage.textContent = 'Please enter your name.';
        nameMessage.style.color = 'var(--danger)';
    } else {
        nameMessage.textContent = `Hello, ${name}! Welcome.`;
        nameMessage.style.color = 'var(--success)';
    }
});

const charInput = document.getElementById('charInput');
const charCount = document.getElementById('charCount');
charInput.addEventListener('input', () => {
    charCount.textContent = charInput.value.length;
});

const clickButton = document.getElementById('clickButton');
const clickDisplay = document.getElementById('clickDisplay');
let clicks = 0;
clickButton.addEventListener('click', () => {
    clicks += 1;
    clickDisplay.textContent = clicks;
});

const quotes = [
    'The only way to do great work is to love what you do.',
    'Innovation distinguishes between a leader and a follower.',
    'Your time is limited, don\'t waste it living someone else\'s life.',
    'Small steps every day lead to big changes.',
    'Creativity is intelligence having fun.'
];
const quoteText = document.getElementById('quoteText');
const quoteButton = document.getElementById('quoteButton');
quoteButton.addEventListener('click', () => {
    quoteText.textContent = quotes[Math.floor(Math.random() * quotes.length)];
});

const sliderImage = document.getElementById('sliderImage');
const prevImage = document.getElementById('prevImage');
const nextImage = document.getElementById('nextImage');
const imageSources = [
    'imges/WhatsApp Image 2026-03-25 at 10.09.02 PM (1).jpeg',
    'imges/IMG_20250805_175453.jpg',
    'imges/WhatsApp Image 2026-03-25 at 10.09.02 PM (1).jpeg'
];
let currentImageIndex = 0;
function updateImage() {
    sliderImage.src = imageSources[currentImageIndex];
}
prevImage.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + imageSources.length) % imageSources.length;
    updateImage();
});
nextImage.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    updateImage();
});


        
        const searchInput = document.getElementById('searchInput');
        const itemsList = document.getElementById('itemsList');
        const noResults = document.getElementById('noResults');
        searchInput.addEventListener('input', () => {
            const term = searchInput.value.trim().toLowerCase();
            const items = itemsList.querySelectorAll('li');
            let found = false;
            items.forEach(item => {
                const visible = item.textContent.toLowerCase().includes(term);
                item.style.display = visible ? 'flex' : 'none';
                if (visible) found = true;
            });
            noResults.style.display = found ? 'none' : 'block';
        });
