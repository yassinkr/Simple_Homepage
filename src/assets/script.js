const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    const modeText = document.querySelector('.mode-text');
    modeText.textContent = body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
});
