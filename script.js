function buyNow(productName) {
    let phone = "923244880799";

    let message = "Assalam-o-Alaikum! I want to buy: " + productName;

    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}



let cartCount = 0;
let totalPrice = 0;

function addToCart(productName = "Product", price = 0) {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;

    let cartList = document.getElementById("cart-list");
    let item = document.createElement("li");
    item.innerText = productName + " - Rs." + price;
    cartList.appendChild(item);

    totalPrice += price;
    document.getElementById("total-price").innerText = totalPrice;
}

function searchProducts() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
        let title = card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(input)) {
            card.style.display = "inline-block";
        } else {
            card.style.display = "none";
        }
    });
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

    let total = document.getElementById("total-price").innerText;

    let message =
        "السلام علیکم!\n\n" +
        "میں یہ آرڈر کرنا چاہتا ہوں:\n\n" +
        cartItems +
        "\n\nکل قیمت: Rs." + total;

    let phone = "923244880799";
    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}
function showMessage() {
    alert("Thank you for using Faisal Shoes Store!");
}

function darkMode() {
    document.body.classList.toggle("dark");
}
function addToWishlist(productName) {
    let wishlist = document.getElementById("wishlist-list");

    let item = document.createElement("li");
    item.innerText = productName;

    wishlist.appendChild(item);
}