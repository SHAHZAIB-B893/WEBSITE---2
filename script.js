let cartCount = 0;
let totalPrice = 0;

function changeQty(id, change) {
    let qty = document.getElementById("qty-" + id);

    let value = parseInt(qty.innerText);

    value += change;

    if (value < 1) value = 1;

    qty.innerText = value;
}

function addToCart(productName, price, quantity = 1) {

    quantity = parseInt(quantity);

    cartCount += quantity;

    document.getElementById("cart-count").innerText = cartCount;

    let cartList = document.getElementById("cart-list");

    let item = document.createElement("li");

    item.innerText =
        productName +
        " × " +
        quantity +
        " = Rs." +
        (price * quantity);

    cartList.appendChild(item);

    totalPrice += price * quantity;

    document.getElementById("total-price").innerText = totalPrice;
}

function buyNow(productName, quantity = 1) {

    let phone = "923244880799";

    let message =
        "Assalam-o-Alaikum!\n\n" +
        "I want to buy:\n" +
        productName +
        "\nQuantity: " +
        quantity;

    let url =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");
}

function clearCart() {

    cartCount = 0;

    totalPrice = 0;

    document.getElementById("cart-count").innerText = 0;

    document.getElementById("cart-list").innerHTML = "";

    document.getElementById("total-price").innerText = 0;
}

function checkout() {

    let cartItems = document.getElementById("cart-list").innerText;

    if (cartItems.trim() === "") {
        alert("Your cart is empty!");
        return;
    }

    let message =
        "السلام علیکم!\n\n" +
        "میں یہ آرڈر کرنا چاہتا ہوں:\n\n" +
        cartItems +
        "\n\nTotal: Rs." +
        totalPrice;

    let phone = "923244880799";

    let url =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");
}

function addToWishlist(productName) {

    let wishlist = document.getElementById("wishlist-list");

    let item = document.createElement("li");

    item.innerText = productName;

    wishlist.appendChild(item);
}

function searchProducts() {

    let input =
        document.getElementById("searchBox").value.toLowerCase();

    let cards =
        document.querySelectorAll(".card");

    cards.forEach(function (card) {

        let title =
            card.querySelector("h3").innerText.toLowerCase();

        card.style.display =
            title.includes(input) ? "block" : "none";

    });

}

function darkMode() {

    document.body.classList.toggle("dark");

}