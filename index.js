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
<a href="product.html?id=${doc.id}">
                Buy Now
            </button>
        </div>
        `;
    });

}

loadProducts();