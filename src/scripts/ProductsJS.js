import { checksCart } from "./checksCart";

export default function ProductsJS() {
    const add_to_cart = document.querySelectorAll(".add_to_cart");

    function checksProductsButtons() {
        const productButtons = document.querySelectorAll(".add_to_cart")
        Object.keys(sessionStorage).forEach(key => {
            productButtons.forEach(product => {
                let content = product.parentElement.parentElement.querySelector(".product_name").textContent
                if (content == key) {
                    product.classList.add("checked")
                }
            })
        })
    }
    checksProductsButtons()
    function addToCart(e) {
        let parentElement = e.currentTarget.parentNode.parentNode
        let img = e.currentTarget.parentNode.querySelector("img").src.split("/img")[1]
        let itemPrice = parentElement.querySelector(".product_price").textContent.replace(",", ".")
        let itemName = parentElement.querySelector(".product_name").textContent

        try {
            let itemInfo = parentElement.querySelector(".product_info").textContent
            sessionStorage.setItem(itemName, [itemPrice, `/img${img}`, itemName, itemInfo, 1])
        } catch (e) {
            sessionStorage.setItem(itemName, [itemPrice, `/img${img}`, itemName, 1])
        }
    }

    add_to_cart.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault()
            const currentButton = e.currentTarget
            if (currentButton.classList.contains('checked')) {
                addToCart(e)
                checksCart()
            } else {
                currentButton.classList.add('checked')
                addToCart(e)
                checksCart()
            }
        })
    })
}