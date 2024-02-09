export default function CartActions() {
    function editsSessionStorage(key, value) {
        const oldValue = sessionStorage.getItem(key)

        if (value === "add") {
            const quantity = parseInt(oldValue[oldValue.length - 1]) + 1
            const newValue = oldValue.split(",")
            newValue[3] = quantity
            console.log(newValue);

            sessionStorage.removeItem(key)
            sessionStorage.setItem(key, newValue)

        } else if (value === "remove") {
            const quantity = parseInt(oldValue[oldValue.length - 1]) - 1
            if (quantity <= 0) {
                sessionStorage.removeItem(key)
                alert(`O item ${key} foi removido da sua sacola de compras.`)
            } else {
                const newValue = oldValue.split(",")
                newValue[3] = quantity
                console.log(newValue);

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

