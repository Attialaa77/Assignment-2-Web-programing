const usernameInput = document.getElementById('username');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');
const displayName = document.getElementById('display-name');

saveBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (username) {
        localStorage.setItem('username', username);
        displayName.textContent = `Welcome, ${username}!`;
    }
});

clearBtn.addEventListener('click', () => {
    localStorage.removeItem('username');
    displayName.textContent = '';
});

window.addEventListener('load', () => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        displayName.textContent = `Welcome, ${storedUsername}!`;
    }
});