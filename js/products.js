$("#add-f-product").submit(function(e){
    let title = $("#title-f-product").val()
    let details = $("#details-f-product").val()
    let price = $("#price-f-product").val()

    let productsInStorage = JSON.parse(localStorage.getItem("f-products"))
    if (productsInStorage == null) {
        productsInStorage = []
    }

    let id = 100000 + Math.floor(Math.random() * 999999);
    productsInStorage.push({
        id, title, details, price
    })

    localStorage.setItem("f-products", JSON.stringify(productsInStorage))

    new Audio("mixkit-software-interface-start-2574.wav").play()
        .then(_ => {
            alert(`Created, press OK to reload page`)
            window.location.reload();
    } );

    return false
});


$(document).ready(() => {
    $(".delete-f-product").each((index, item) => {
        item.onclick = () => {
            let id = item.attributes.getNamedItem("product_id").nodeValue

            let productsInStorage = JSON.parse(localStorage.getItem("f-products"))
            if (productsInStorage == null) {
                productsInStorage = []
            }

            let index = -1
            for (let i = 0; i < productsInStorage.length; i++) {
                let item = productsInStorage[i]

                if (item.id.toString() === id) {
                    index = i
                }
            }

            if (index !== -1) {
                productsInStorage.splice(index, 1)
            }

            localStorage.setItem("f-products", JSON.stringify(productsInStorage))

            new Audio("mixkit-software-interface-remove-2576.wav").play()
                .then(_ => {
                    alert(`Removed, press OK to reload page`)
                    window.location.reload();
                } );
        }
    })
})
