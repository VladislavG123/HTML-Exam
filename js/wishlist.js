window.setTimeout(() => {
    $(".add-product-to-wish-button").each((index, item) => {
        item.onclick = () => {
            let wishContent = JSON.parse(localStorage.getItem("wishlist"))
            if (wishContent == null) {
                wishContent = []
            }

            let id = item.attributes.getNamedItem("product_id").nodeValue
            wishContent.push(id)

            localStorage.setItem("wishlist", JSON.stringify(wishContent))

            new Audio("mixkit-alert-quick-chime-766.wav").play().then(r => alert(`Product #${id} is added to wishlist`));
        }
    })
}, 1000)

$(document).ready(() => {
    products = JSON.parse(localStorage.getItem("f-products"))
    let wishContent = JSON.parse(localStorage.getItem("wishlist"))

    let productsInWish = []
    for (const product of products) {
        if (wishContent.includes(product.id.toString())) {
            $("#products-in-wish-list").append(`
            <tr>
                <th>${product.id}</th>
                <td>${product.title}</td>
                <td>\$${product.price}.00</td>
            </tr>`)
        }
    }

    console.log(productsInWish)
})
