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
