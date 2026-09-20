let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart!`);
}

function loadCart() {
    const cartContainer = document.getElementById("cart-items");
    const totalContainer = document.getElementById("cart-total");

    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        cartContainer.innerHTML += `
            <div class="cart-item">
                <p>${item.name} — $${item.price.toFixed(2)}</p>
                <button onclick="removeItem(${index})" class="remove-btn">Remove</button>
            </div>
        `;
    });

    totalContainer.innerHTML = `$${total.toFixed(2)}`;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}
