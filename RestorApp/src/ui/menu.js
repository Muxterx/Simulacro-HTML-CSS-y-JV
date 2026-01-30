import { menu } from "../data/db.js";

let cart = [];

export function renderMenu() {
  const list = document.getElementById("menu-list");
  list.innerHTML = "";

  menu.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `${item.name} - $${item.price} <button>Add</button>`;
    div.querySelector("button").onclick = () => addToCart(item);
    list.appendChild(div);
  });
}

function addToCart(item) {
  cart.push(item);
  renderCart();
}

function renderCart() {
  const list = document.getElementById("cart-list");
  list.innerHTML = "";
  cart.forEach(i => {
    const li = document.createElement("li");
    li.textContent = i.name;
    list.appendChild(li);
  });
}

