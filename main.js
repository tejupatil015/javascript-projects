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

        const runAsyncButton = document.getElementById('runAsync');
        const asyncLog = document.getElementById('asyncLog');
        function logAsync(message) {
            const entry = document.createElement('p');
            entry.textContent = message;
            asyncLog.appendChild(entry);
            asyncLog.scrollTop = asyncLog.scrollHeight;
        }
        function delayedTask(label, delay) {
            return new Promise(resolve => {
                setTimeout(() => {
                    logAsync(`✅ ${label} completed after ${delay / 1000}s.`);
                    resolve(label);
                }, delay);
            });
        } 
        async function runAsyncDemo() {
            asyncLog.innerHTML = '';
            logAsync('Starting async demo...');
            try {
                await delayedTask('Task 1', 2000);
                await delayedTask('Task 2', 1000);
                logAsync('Checking login status...');
                const loginStatus = false;
                const response = await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (loginStatus) resolve({ status: 200, message: 'Success' });
                        else reject({ status: 400, message: 'Failed' });
                    }, 700);
                });
                logAsync(`Login ${response.message} (${response.status}).`);
            } catch (error) {
                logAsync(`⚠️ ${error.message || 'Promise rejected'} (${error.status}).`);
            }
            logAsync('Async demo finished.');
        }
        runAsyncButton.addEventListener('click', runAsyncDemo);

        
        const contactForm = document.getElementById('contactForm');
        const contactName = document.getElementById('contactName');
        const contactEmail = document.getElementById('contactEmail');
        const contactPhone = document.getElementById('contactPhone');
        const contactTableBody = document.getElementById('contactTableBody');
        let contactId = 2;
        contactForm.addEventListener('submit', event => {
            event.preventDefault();
            const name = contactName.value.trim();
            const email = contactEmail.value.trim();
            const phone = contactPhone.value.trim();
            if (!name || !email || !phone) return;
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${contactId}</td>
                <td>${name}</td>
                <td>${email}</td>
                <td>${phone}</td>
                <td><button class="action-button">Delete</button></td>
            `;
            row.querySelector('button').addEventListener('click', () => row.remove());
            contactTableBody.appendChild(row);
            contactId += 1;
            contactForm.reset();
        });