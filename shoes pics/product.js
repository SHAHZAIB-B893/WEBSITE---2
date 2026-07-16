import { db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


const params = new URLSearchParams(window.location.search);

const productId = params.get("id");


async function loadProduct() {

    const productRef = doc(db, "products", productId);

    const productSnap = await getDoc(productRef);


    if (productSnap.exists()) {

        const product = productSnap.data();

        document.getElementById("productName").innerText = product.name;

        document.getElementById("productPrice").innerText = product.price;

        document.getElementById("productImage").src = product.image;

        document.getElementById("productDescription").innerText = product.description;

    }
    else {

        alert("Product not found");

    }

}


loadProduct();



function buyProduct() {

    let name = document.getElementById("productName").innerText;

    let price = document.getElementById("productPrice").innerText;


    let message =
        "Assalam-o-Alaikum! I want to buy:\n" +
        name +
        "\nPrice: Rs." +
        price;


    let url =
        "https://wa.me/923244880799?text="
        + encodeURIComponent(message);


    window.open(url, "_blank");

}