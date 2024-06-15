function increment(cardId) {
    const quantityText = document.getElementById(`quantity-text-${cardId}`);
    const quantityTotal = document.getElementById(`quantity-total-${cardId}`);
    const productPrice = document.getElementById(`product-price-${cardId}`);
    let quantity = parseInt(quantityText.innerText);

    if (quantity < 10) {
        quantityText.innerText = ++quantity;
    } else {
        alert("You can't buy more than 10 products");
    }
    setQuantityandToatal(quantity, quantityTotal, productPrice);
}

function decrement(cardId) {
    const quantityText = document.getElementById(`quantity-text-${cardId}`);
    const quantityTotal = document.getElementById(`quantity-total-${cardId}`);
    const productPrice = document.getElementById(`product-price-${cardId}`);
    let quantity = parseInt(quantityText.innerText);

    if (quantity > 1) {
        quantityText.innerText = --quantity;
    } else {
        alert("Buy minimum 1 product");
    }
    setQuantityandToatal(quantity, quantityTotal, productPrice);
}

function setQuantityandToatal(quantity, quantityTotal, productPrice) {
    quantityTotal.innerText = `Quantity: ${quantity}`;
    productPrice.innerText = `₹ ${450 * quantity}`;
}

