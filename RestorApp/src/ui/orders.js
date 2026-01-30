import { orders } from "../data/db.js";

export function placeOrder(cart) {
  orders.push({ id: Date.now(), items: cart });
}

export function renderOrders() {
  const list = document.getElementById("orders-list");
  list.innerHTML = "";
  orders.forEach(o => {
    const div = document.createElement("div");
    div.textContent = `Order #${o.id}`;
    list.appendChild(div);
  });
}
