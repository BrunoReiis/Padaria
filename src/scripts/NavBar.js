export default function NavBarJS() {
    const user_menu = document.querySelector(".header_user_menu");
    const hamburger = document.querySelector(".header_hamburger");

    hamburger.addEventListener('click', () => {
        user_menu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}