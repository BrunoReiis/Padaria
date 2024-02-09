export default function CartPrice() {
    const values = document.querySelectorAll(".card_price");

    let total_price = 0
    values.forEach(value => {
        let string = value.textContent.replace("R$ ", "").replace(",", ".")
        total_price += parseFloat(string)
    })
    console.log(`R$ ${total_price.toFixed(2)}`);
}
