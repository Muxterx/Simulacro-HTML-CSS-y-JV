import { menu } from "../data/db.js";
import { save, load } from "../services/storage.js";

export let cart = [];

export function addToCart(id) {
  const product = menu.find(p => p.id === id);
  const exists = cart.some(i => i.id === id);

  if (exists) {
    cart = cart.map(i =>
      i.id === id ? { ...i, qty: i.qty + 1 } : i
    );
  } else {
    cart.push({ ...product, qty: 1 });
  }
  renderCart();
}

export function renderCart() {
  const cont = document.getElementById("cart-items");
  cont.innerHTML = "";
  cart.forEach(i => {
    const d = document.createElement("div");
    d.innerHTML = `${i.name} x${i.qty}`;
    cont.appendChild(d);
  });

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById("cart-total").innerText = `Total: $${total}`;
}
