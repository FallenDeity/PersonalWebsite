function toggleTheme() {
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }
    else {
        document.documentElement.classList.remove('dark');
    }
    var sun = document.getElementById('sun');
    var moon = document.getElementById('moon');
    if (localStorage.getItem('color-theme') === 'dark') {
        sun.classList.remove('hidden');
        moon.classList.add('hidden');
    }
    else {
        sun.classList.add('hidden');
        moon.classList.remove('hidden');
    }
}
window.addEventListener("load", function () {
    toggleMarkdownTheme();
});
function toggleMarkdownTheme() {
    var articles = document.querySelectorAll('article');
    var theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    if (theme === 'dark') {
        articles.forEach(function (article) {
            article.classList.remove('markdown-body-light');
            article.classList.add('markdown-body-dark');
        });
    }
    else {
        articles.forEach(function (article) {
            article.classList.remove('markdown-body-dark');
            article.classList.add('markdown-body-light');
        });
    }
}
function toggleThemeMode() {
    var toggler = document.getElementById('theme-toggle');
    var sun = document.getElementById('sun');
    var moon = document.getElementById('moon');
    if (localStorage.getItem('color-theme') === 'dark') {
        localStorage.setItem('color-theme', 'light');
        document.documentElement.classList.remove('dark');
        if (!toggler.checked) {
            sun.classList.remove('hidden', 'left-1');
            moon.classList.add('hidden');
            sun.classList.add('right-1');
        }
        else {
            sun.classList.remove('hidden', 'right-1');
            moon.classList.add('hidden');
            sun.classList.add('left-1');
        }
    }
    else {
        localStorage.setItem('color-theme', 'dark');
        document.documentElement.classList.add('dark');
        if (!toggler.checked) {
            sun.classList.add('hidden');
            moon.classList.remove('hidden', 'left-1');
            moon.classList.add('right-1');
        }
        else {
            sun.classList.add('hidden');
            moon.classList.remove('hidden', 'right-1');
            moon.classList.add('left-1');
        }
    }
    toggleMarkdownTheme();
}