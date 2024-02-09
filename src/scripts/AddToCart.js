export default function AddToCart() {
    const add_to_cart = document.querySelectorAll(".add_to_cart");

    add_to_cart.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault()

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
        })
    })
}