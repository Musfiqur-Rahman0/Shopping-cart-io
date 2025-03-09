const productsCtn = document.getElementById("productsContainer");
const category = document.getElementById("category");
const name = document.getElementById("title");
const price = document.getElementById("price");
const addBtn = document.getElementById("add-to-cart");
// console.log(productsCtn);

let products = null;

const fetchProducts = async () => {
  try {
    const res = await fetch("../data.json");
    const data = await res.json();
    products = data;
  } catch (error) {
    console.log(error);
  }
};
fetchProducts();

setTimeout(() => {
  if (products) {
    setProducts(products);
  } else {
    console.log("sad");
  }
}, 1000);

function setProducts(products) {
  productsCtn.innerHTML = "";
  products.map((product) => {
    const { category, image, name, price } = product;
    const newProduct = document.createElement("div");
    newProduct.innerHTML = `
         <div class=" relative">
                        <img class="rounded-lg" src="${image.desktop}" alt="${image.name}">

                        <button id="add-to-cart"
                            class="py-2 px-7 absolute -bottom-5 left-1/2 transform -translate-x-1/2  bg-white  border border-red-400 text-sm  rounded-full  flex items-center justify-center gap-2">
                            <img src=" assets/images/icon-add-to-cart.svg" alt="">
                            <span class="text-nowrap">Add to Cart</span>
                        </button>

                    </div>
                    <div class="mt-8">
                        <p id='category' class="text-[0.7rem] text-rose-400">${category}</p>
                        <h2 id="title" class=" font-bold">${name}</h2>
                        <p id="price" class="text-[0.7rem] text-rose-600 font-bold">$${price}</p>
                    </div>
    `;
    productsCtn.appendChild(newProduct);
  });
}
