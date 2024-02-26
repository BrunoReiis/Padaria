const products = {
    Categoria_01: [
        ["R$ 11,60", "/img/mockup.png", "Item Title", "Description"],
        ["R$ 9,60", "/img/mockup.png", "Item Title"],
        ["R$ 12,90", "/img/mockup.png", "Item Title"],
    ],
    Categoria_02: [
        ["R$ 22,50", "/img/mockup.png", "Item Title", "Description"],
        ["R$ 8,90", "/img/mockup.png", "Item Title", "Description"],
        ["R$ 16,90", "/img/mockup.png", "Item Title", "Description"],
        ["R$ 6,00", "/img/mockup.png", "Item Title", "Description"],
        ["R$ 6,00", "/img/mockup.png", "Item Title", "Description"],
    ],
    Categoria_03: [
        ["R$ 22,90", "/img/mockup.png", "Item Title", "Description"],
        ["R$ 7,95", "/img/mockup.png", "Item Title"],
        ["R$ 12,90", "/img/mockup.png", "Item Title", "Description"],
        ["R$ 18,90", "/img/mockup.png", "Item Title", "Description"],
        ["R$ 5,45", "/img/mockup.png", "Item Title"],
        ["R$ 21,90", "/img/mockup.png", "Item Title"],
        ["R$ 32,80", "/img/mockup.png", "Item Title", "Description"],
    ],
    Categoria_04: [
        ["R$ 36,90", "/img/mockup.png", "Item Title"],
        ["R$ 36,90", "/img/mockup.png", "Item Title"],
        ["R$ 44,90", "/img/mockup.png", "Item Title"],
        ["R$ 36,90", "/img/mockup.png", "Item Title"],
    ],
    Categoria_05: [
        ["R$ 29,90", "/img/mockup.png", "Item Title", "Description"],
        ["R$ 25,90", "/img/mockup.png", "Item Title", "Description"],
        ["R$ 29,90", "/img/mockup.png", "Item Title", "Description"],
        ["R$ 29,90", "/img/mockup.png", "Item Title", "Description"],
    ],
};

export default function data(table) {
    let table_keys = []
    Object.keys(table).forEach((key) => {
        if (table_keys.includes(key[0])) {
            return
        }
        table_keys.push(key[0])
    })

    let list = []
    Object.keys(table).forEach((key) => {
        if (table_keys[key]) {
            list.push(key)
        }
        return
    })
}