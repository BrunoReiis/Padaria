export function checksCart() {
    if (sessionStorage.length > 0) {
        const icons = document.querySelectorAll(".cart_icon")
        icons.forEach(icon => {
            console.log(icon.querySelector("p"));
            if (icon.querySelector("p")) {
                icon.querySelector("p").textContent = sessionStorage.length
                console.log("atualizado");
                return
            }
            const p = document.createElement("p")
            p.innerHTML = sessionStorage.length
            p.setAttribute("class", "cart_notification")
            icon.appendChild(p)

        })
    }
}