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
