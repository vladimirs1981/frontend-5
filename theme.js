const userPrefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches

if (userPrefersDark) {
    document.body.classList.add('dark')
    document.getElementById('slider').value = 1
} else {
    document.body.classList.add('light')
    document.getElementById('slider').value = 2
}

function themeChanger() {
    var slider = document.getElementById('slider').value
    var body = document.body
    switch (slider) {
        case '1':
            body.classList.add('dark')
            window.localStorage.setItem('theme', 'dark')
            body.classList.remove('light')
            body.classList.remove('purple')
            break
        case '2':
            body.classList.remove('dark')
            body.classList.add('light')
            window.localStorage.setItem('theme', 'light')
            body.classList.remove('purple')
            break
        case '3':
            body.classList.add('purple')
            window.localStorage.setItem('theme', 'purple')
            body.classList.remove('dark')
            body.classList.remove('light')
            break
        default:
            break
    }
}

document.getElementById('slider').onchange = function () {
    themeChanger()
}

window.onload = checkTheme()

function checkTheme() {
    let localStorageTheme = localStorage.getItem('theme')

    if (localStorageTheme != null && localStorageTheme === 'dark') {
        document.body.className = localStorageTheme
        document.getElementById('slider').value = 1
    }
    if (localStorageTheme != null && localStorageTheme === 'light') {
        document.body.className = localStorageTheme
        document.getElementById('slider').value = 2
    }
    if (localStorageTheme != null && localStorageTheme === 'purple') {
        document.body.className = localStorageTheme
        document.getElementById('slider').value = 3
    }
}
