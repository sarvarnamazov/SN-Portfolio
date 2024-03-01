function toggleMenu() {

    // targeting these 2 elements
    const menu = document.querySelector('.menu-links')
    const icon = document.querySelector('.hamburger-icon')

    // whenever we click it will add or remove the 'open' class
    menu.classList.toggle('open')
    icon.classList.toggle('open')
}