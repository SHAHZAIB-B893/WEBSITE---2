import { db, collection, addDoc, getDocs, deleteDoc, doc } from "./firebase.js";

const products = collection(db, "products");

const name = document.getElementById("name");
const price = document.getElementById("price");
const image = document.getElementById("image");
const description = document.getElementById("description");
const addBtn = document.getElementById("addProduct");
const productList = document.getElementById("productList");

addBtn.addEventListener("click", async () => {

    if (
        name.value === "" ||
        price.value === "" ||
        image.value === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    await addDoc(products, {
        name: name.value,
        price: Number(price.value),
        image: image.value,
        description: description.value
    });

    alert("Product Added Successfully");

    name.value = "";
    price.value = "";
    image.value = "";
    description.value = "";

    loadProducts();
});
async function loadProducts() {

    productList.innerHTML = "";

    const snapshot = await getDocs(products);

    snapshot.forEach((item) => {

        const data = item.data();

        productList.innerHTML += `
            <div style="border:1px solid #ccc;padding:10px;margin:10px;">
                <h3>${data.name}</h3>
                <p>Rs. ${data.price}</p>
                <img src="${data.image}" width="120">
                <p>${data.description || ""}</p>

                <button onclick="deleteProduct('${item.id}')">
                    Delete
                </button>
            </div>
        `;
    });

}

window.deleteProduct = async function (id) {

    await deleteDoc(doc(db, "products", id));

    alert("Product Deleted");

    loadProducts();
}

loadProducts();