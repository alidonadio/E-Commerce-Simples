const products = [
  { id: 1, name: "Camisa", price: 49.90 },
  { id: 2, name: "Calça", price: 89.90 },
  { id: 3, name: "Tênis", price: 149.90 }
];

let cart = [];

function renderProducts() {
  const container = document.getElementById("products");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>R$ ${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Adicionar ao carrinho</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total.toFixed(2);
}

function toggleCart() {
  const cartSection = document.getElementById("cart");
  cartSection.classList.toggle("hidden");
}

renderProducts();
document.getElementById("checkout-button").addEventListener("click", finalizePurchase);

function finalizePurchase() {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }

  alert("Compra finalizada com sucesso! Obrigado pela sua compra 😊");

  // Limpar o carrinho
  cart = [];
  updateCart();

  // Esconder o carrinho
  document.getElementById("cart").classList.add("hidden");
}
