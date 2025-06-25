const darkModeSwitches = document.querySelectorAll('.dark-mode-switch');

if (darkModeSwitches) {
    darkModeSwitches.forEach((item) => {
        item.addEventListener('click', () => {
            darkModeSwitches.forEach((item) => item.classList.add('animated'));
            toggleDarkMode();
        });
    });
}

function toggleDarkMode() {
    let darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        document.documentElement.setAttribute('data-mode', 'light');
        localStorage.setItem('darkMode', false);
        darkModeSwitches.forEach((item) => item.classList.add('light'));
        darkModeSwitches.forEach((item) => item.classList.remove('dark'));
    } else {
        document.documentElement.setAttribute('data-mode', 'dark');
        localStorage.setItem('darkMode', true);
        darkModeSwitches.forEach((item) => item.classList.add('dark'));
        darkModeSwitches.forEach((item) => item.classList.remove('light'));
    }
}

function initDarkMode() {
    let darkMode = localStorage.getItem('darkMode');

    if (darkMode === 'true') {
        document.documentElement.setAttribute('data-mode', 'dark');
        darkModeSwitches.forEach((item) => item.classList.add('dark'));
        return;
    }

    if (darkMode === 'false') {
        document.documentElement.setAttribute('data-mode', 'light');
        darkModeSwitches.forEach((item) => item.classList.add('light'));
        return;
    }

    // Si no hay valor guardado, usar el del sistema y guardarlo
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-mode', systemPrefersDark ? 'dark' : 'light');
    localStorage.setItem('darkMode', systemPrefersDark ? 'true' : 'false');
    darkModeSwitches.forEach((item) =>
        item.classList.add(systemPrefersDark ? 'dark' : 'light')
    );
}

initDarkMode();