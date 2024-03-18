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
        let itemTitle = parentElement.querySelector(".product_name").textContent
        let itemID = parentElement.querySelector(".product_id").textContent

        try {
            let itemInfo = parentElement.querySelector(".product_info").textContent
            let json = {
                price: itemPrice,
                image: `/img${img}`,
                title: itemTitle,
                info: itemInfo,
                quantity: 1,
                id: itemID
            }

            sessionStorage.setItem(itemID, JSON.stringify(json))
        } catch (e) {
            let json = {
                price: itemPrice,
                image: `/img${img}`,
                title: itemTitle,
                quantity: 1,
                id: itemID
            }
            sessionStorage.setItem(itemID, JSON.stringify(json))
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