export default function AddToCart() {
    const add_to_cart = document.querySelectorAll(".add_to_cart");

    add_to_cart.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault()

            let parentElement = e.currentTarget.parentNode.parentNode
            let itemName = parentElement.querySelector(".product_name").textContent
            let itemPrice = parentElement.querySelector(".product_price").textContent
            console.log(itemName);
            console.log(itemPrice);
        })
    })
}