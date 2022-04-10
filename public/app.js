// select elements
const productsEl = document.querySelector(".products");

// render elements
function renderProducts() {
  products.forEach((product) => {
    productsEl.innerHTML += `
    <div class="item">
      <img src="${product.imgSrc}"
        alt="${product.name}" />
      <h3 class="product-title">${product.name}</h3>
      <h3 class="product-price">$${product.price}</h3>
      <button type="button" class="add-cart cart2">Add to Cart</button>
    </div>
    `;
  });
}
renderProducts();