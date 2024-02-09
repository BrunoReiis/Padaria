export default function CartPrice() {
    const values = document.querySelectorAll(".card_price");
    const subtotal = document.querySelector("#cart_subtotal")
    const service_tax = document.querySelector("#cart_service_tax")
    const shipping = document.querySelector("#cart_shipping")
    const total = document.querySelector("#cart_total")

    let subtotal_value = 0
    let service_tax_value = 0.99
    let shipping_value = 5
    values.forEach(value => {
        let quantity = value.parentElement.parentElement.parentElement.querySelector(".cart_card_quantity").textContent
        let string = value.textContent.replace("R$ ", "")
        subtotal_value += parseFloat(string * quantity)
    })
    const total_value = subtotal_value + service_tax_value + shipping_value

    subtotal.innerHTML = `Subtotal: R$ ${subtotal_value.toFixed(2)}`
    service_tax.innerHTML = `Taxa de serviço: R$ ${service_tax_value.toFixed(2)}`
    shipping.innerHTML = `Frete: R$ ${shipping_value.toFixed(2)}`
    total.innerHTML = `Total: R$ ${total_value.toFixed(2)}`
}
