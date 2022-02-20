$(document).ready = () => {
    let products = JSON.parse(localStorage.getItem("f-products"))

    for (const product of products) {
        let imageId = Math.floor(Math.random() * 4) + 1;
        $("#f-products").append(`
                <div class="featured-product">
                    <img src="img/pr-2-${imageId}.png" alt="${imageId}">
                    <div class="product-info">
                        <h3>${product.title}</h3>
                        <p class="desc-text">${product.details}</p>
                        <div class="sell-box">
                            <i class="fas fa-exchange-alt"></i>
                            <i class="fas fa-gift"></i>
                            <i class="fas fa-shopping-cart add-product-to-card-button" product_id=\"${product.id}\"></i>
                            <p>\$${product.price}.<sup>00</sup></p>
                        </div>
                    </div>
                </div>`)
    }

    $(".add-product-to-card-button").each((index, item) => {
        item.onclick = () => {
            let cardContent = JSON.parse(localStorage.getItem("cart"))
            if (cardContent == null) {
                cardContent = []
            }

            let id = item.attributes.getNamedItem("product_id").nodeValue
            cardContent.push()

            localStorage.setItem("card", JSON.stringify(cardContent))

            new Audio("mixkit-alert-quick-chime-766.wav").play().then(r => alert(`Product #${id} is added to card`));
        }
    })

    products = JSON.parse(localStorage.getItem("f-products"))
    let cartContent = JSON.parse(localStorage.getItem("cart"))

    let productsInCart = []
    for (const product of products) {
        if (cartContent.contains(product.id)) {
            productsInCart.push(product)
        }
    }

    console.log(productsInCart)
}

//$("#products-in-cart-list").append()