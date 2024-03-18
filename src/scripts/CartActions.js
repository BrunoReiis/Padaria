export default function CartActions() {
    function editsSessionStorage(key, value, quantityElement) {
        const oldValue = sessionStorage.getItem(key)
        const parsed = JSON.parse(oldValue)

        if (value === "add") {
            parsed.quantity++
            const stringified = JSON.stringify(parsed)
            sessionStorage.removeItem(key)
            sessionStorage.setItem(key, stringified)

            quantityElement.textContent++

        } else if (value === "remove") {
            parsed.quantity--
            if (parsed.quantity <= 0) {
                sessionStorage.removeItem(key)
            } else {
                const stringified = JSON.stringify(parsed)
                sessionStorage.removeItem(key)
                sessionStorage.setItem(key, stringified)

                quantityElement.textContent--
            }
        }
    }

    const btnAdd = document.querySelectorAll(".adds");
    const btnRemove = document.querySelectorAll(".removes");

    btnAdd.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const parent = e.target.parentElement
            const key = parent.parentElement.querySelector(".card_id").textContent
            const quantityElement = parent.querySelector(".cart_card_quantity")
            editsSessionStorage(key, "add", quantityElement)
            location.reload()
        })
    })
    btnRemove.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const parent = e.target.parentElement
            const key = parent.parentElement.querySelector(".card_id").textContent
            const quantityElement = parent.querySelector(".cart_card_quantity")
            editsSessionStorage(key, "remove", quantityElement)
            location.reload()
        })
    })
}