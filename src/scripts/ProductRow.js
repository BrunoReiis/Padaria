export default function ProductRow() {
    function isInViewport(element) {
        // Funcao que checa se o elemento esta visivel na pagina
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function addsControlButtons(row) {
        // funcao muito complicada pra inserir os botoes de navegacao caso necessario, futuramente a gente tenta fazer isso com algum react component, isso se der
        const arrow_left = document.createElement("button")
        arrow_left.setAttribute("class", "arrow_left control")
        arrow_left.setAttribute("aria-label", "Previous image")
        const arrow_left_i = document.createElement("i")
        arrow_left_i.setAttribute("class", "fa-solid fa-chevron-left")
        arrow_left.appendChild(arrow_left_i)

        const arrow_right = document.createElement("button")
        arrow_right.setAttribute("class", "arrow_right control")
        arrow_right.setAttribute("aria-label", "Next image")
        const arrow_right_i = document.createElement("i")
        arrow_right_i.setAttribute("class", "fa-solid fa-chevron-right")
        arrow_right.appendChild(arrow_right_i)

        row.appendChild(arrow_left)
        row.appendChild(arrow_right)
    }

    function controlButtonsNeeded() {
        const rows = document.querySelectorAll(".product_row")
        let needsControls = false
        rows.forEach((row) => {
            row.lastChild.childNodes.forEach((item, index) => {
                if (!isInViewport(item)) {
                    needsControls = true
                }
            })
            if (needsControls) { addsControlButtons(row) }
        })
    }

    function checksIfItemsAreVisible(row) {
        let invisibles = []

        row.querySelector(".product_row_carousel").childNodes.forEach((item, index) => {
            if (!isInViewport(item)) {
                invisibles.push(index)
            }
        })
        console.log(invisibles);
        return invisibles[0]
    }

    function controls(rows) {
        rows.forEach((row) => {
            const controls = row.querySelectorAll('.control')
            let currentItem = checksIfItemsAreVisible(row)

            controls.forEach(control => {
                control.addEventListener('click', () => {

                    const cards = row.querySelectorAll('.card')
                    const isLeft = control.classList.contains('arrow_left')

                    if (isLeft) {
                        currentItem -= 1
                    } else {
                        currentItem += 1
                    }

                    if (currentItem >= cards.length) {
                        currentItem = 0
                    }
                    if (currentItem < 0) {
                        currentItem = cards.length - 1
                    }

                    cards[currentItem].scrollIntoView({
                        inline: "center",
                        block: "center",
                        behavior: "smooth",
                    })
                })
            })
        })
    }
    const rows = document.querySelectorAll(".product_row")

    controlButtonsNeeded()
    controls(rows)
}

// https://www.youtube.com/watch?v=SVO3tNH5fTo