export default function CartActions() {
    function editsSessionStorage(key, value) {
        const oldValue = sessionStorage.getItem(key)

        if (value === "add") {
            const newValue = oldValue.split(",")
            let quantity
            if (newValue.length === 5) {
                quantity = parseInt(newValue[4]) + 1
                newValue[4] = quantity
            } else if (newValue.length === 4) {
                quantity = parseInt(newValue[3]) + 1
                newValue[3] = quantity
            }
            sessionStorage.removeItem(key)
            sessionStorage.setItem(key, newValue)

        } else if (value === "remove") {
            const newValue = oldValue.split(",")
            let quantity
            if (newValue.length === 5) {
                quantity = parseInt(newValue[4]) - 1
            } else if (newValue.length === 4) {
                quantity = parseInt(newValue[3]) - 1
            }

            if (quantity <= 0) {
                sessionStorage.removeItem(key)
                alert(`O item ${key} foi removido da sua sacola de compras.`)
            } else {
                const newValue = oldValue.split(",")
                if (newValue.length === 5) {
                    newValue[4] = quantity
                } else if (newValue.length === 4) {
                    newValue[3] = quantity
                }
                sessionStorage.removeItem(key)
                sessionStorage.setItem(key, newValue)
            }
        }
    }

    const btnAdd = document.querySelectorAll(".adds");
    const btnRemove = document.querySelectorAll(".removes");

    btnAdd.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const parent = e.target.parentElement
            const key = parent.parentElement.querySelector(".card_title").textContent
            editsSessionStorage(key, "add")
            location.reload()
        })
    })
    btnRemove.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const parent = e.target.parentElement
            const key = parent.parentElement.querySelector(".card_title").textContent
            parent.querySelector(".cart_card_quantity").textContent--;
            editsSessionStorage(key, "remove")
            location.reload()
        })
    })
}

