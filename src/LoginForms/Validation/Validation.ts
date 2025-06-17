type Credentials = {
    login: string;
    password: string;
};

const adminCredentials: Credentials = {
    login: 'admin',
    password: 'admnin123',
};

const form = document.getElementById('loginForm') as HTMLFormElement;
const loginInput = document.getElementById('login') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;
const message = document.getElementById('message') as HTMLParagraphElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    const login = loginInput.value.trim();
    const password = passwordInput.value;

    if (login === adminCredentials.login && password === adminCredentials.password) {
        message.style.color = 'green';
        message.textContent = 'Zalogowano jako administrator.';
        // Można dodać przekierowanie:
        // window.location.href = '/admin';
    } else {
        message.style.color = 'red';
        message.textContent = 'Nieprawidłowy login lub hasło.';
    }
});