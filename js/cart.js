window.setTimeout(() => {
    $(".add-product-to-card-button").each((index, item) => {
        item.onclick = () => {
            let cardContent = JSON.parse(localStorage.getItem("cart"))
            if (cardContent == null) {
                cardContent = []
            }

            let id = item.attributes.getNamedItem("product_id").nodeValue
            cardContent.push(id)

            localStorage.setItem("cart", JSON.stringify(cardContent))

            new Audio("mixkit-alert-quick-chime-766.wav").play().then(r => alert(`Product #${id} is added to card`));
        }
    })
}, 1000)

$(document).ready(() => {
    products = JSON.parse(localStorage.getItem("f-products"))
    let cartContent = JSON.parse(localStorage.getItem("cart"))

    let productsInCart = []
    for (const product of products) {
        if (cartContent.includes(product.id.toString())) {
            $("#products-in-cart-list").append(`
            <tr>
                <th>${product.id}</th>
                <td>${product.title}</td>
                <td>\$${product.price}.00</td>
            </tr>`)
        }
    }

    console.log(productsInCart)
})

//