import { db, collection, getDocs } from "./firebase.js";

const productsContainer = document.getElementById("products-container");

async function loadProducts() {
    productsContainer.innerHTML = "";

    const snapshot = await getDocs(collection(db, "products"));

    snapshot.forEach((doc) => {
        const product = doc.data();

        productsContainer.innerHTML += `
        <div class="card">
            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>${product.description || ""}</p>

            <p><strong>Price: Rs.${product.price}</strong></p>

            <p style="color:${product.stock ? "green" : "red"}; font-weight:bold;">
                ${product.stock ? "🟢 In Stock" : "🔴 Out of Stock"}
            </p>

            <div class="quantity-box">
                <button onclick="changeQty('${doc.id}',-1)">➖</button>

                <span id="qty-${doc.id}">1</span>

                <button onclick="changeQty('${doc.id}',1)">➕</button>
            </div>

            <button
                onclick="addToCart('${product.name}', ${product.price}, document.getElementById('qty-${doc.id}').innerText)"
                ${!product.stock ? "disabled" : ""}>
                Add to Cart
            </button>

            <button
                onclick="buyNow('${product.name}', document.getElementById('qty-${doc.id}').innerText)"
                ${!product.stock ? "disabled" : ""}>
                Buy Now
            </button>

            <button onclick="addToWishlist('${product.name}')">
                ❤️ Wishlist
            </button>

            <a href="product.html?id=${doc.id}">
                <button>View Details</button>
            </a>
        </div>
        `;
    });
}

loadProducts();