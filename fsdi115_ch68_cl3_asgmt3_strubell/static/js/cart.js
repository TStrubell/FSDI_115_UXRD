let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart!`);
}

function loadCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    if (!cartItems || !cartTotal) return;

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const p = document.createElement("p");
        p.textContent = `${item.name} — $${item.price}`;
        cartItems.appendChild(p);
        total += item.price;
    });

    cartTotal.innerHTML = `<strong>Total: $${total}</strong>`;
}

document.addEventListener("DOMContentLoaded", loadCart);

function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

