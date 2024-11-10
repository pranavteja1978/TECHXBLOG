document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const username = document.querySelector('input[name="username"]');
    const email = document.querySelector('input[name="email"]');
    const password = document.querySelector('input[name="password"]');
    const passwordConf = document.querySelector('input[name="passwordConf"]');

    form.addEventListener('submit', (event) => {
        if (username.value.length < 3) {
            alert('Username must be at least 3 characters long.');
            event.preventDefault(); 
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email.value)) {
            alert('Please enter a valid email address.');
            event.preventDefault(); 
            return; 
        }

        if (password.value.length < 8) {
            alert('Password must be at least 8 characters long.');
            event.preventDefault(); 
            return; 
        }

        if (password.value !== passwordConf.value) {
            alert('Passwords do not match. Please try again.');
            event.preventDefault(); 
        }
    });
});