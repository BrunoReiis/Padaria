import { checksCart } from "./checksCart";

export default function NavBarJS() {
    const user_menu = document.querySelector(".header_user_menu");
    const hamburger = document.querySelector(".header_hamburger");
    const icon1 = document.querySelector(".cart_icon_navbar")
    const icon2 = document.querySelector(".cart_icon")

    hamburger.addEventListener('click', () => {
        user_menu.classList.toggle('active');
        hamburger.classList.toggle('active');
        icon1.classList.toggle('active');
        icon2.classList.toggle('active');
    });

    checksCart()
}