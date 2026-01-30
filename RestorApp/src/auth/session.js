import { users } from "../data/db.js";
import { save, load } from "../services/storage.js";
import { showView } from "../router/router.js";

export let session = load("session");

export function login(form) {
  const email = form[0].value;
  const password = form[1].value;

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return alert("Invalid credentials");

  session = user;
  save("session", user);
  showView(user.role === "admin" ? "admin-view" : "user-view");
}

export function logout() {
  localStorage.removeItem("session");
  showView("login-view");
}
