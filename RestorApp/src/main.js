import { login, session } from "./auth/session.js";
import { renderMenu } from "./ui/menu.js";
import { renderAdmin } from "./ui/admin.js";

if (session) {
  document.getElementById("login-view").classList.remove("active");
  document.getElementById(session.role + "-view").classList.add("active");
  renderMenu();
  renderAdmin();
}

document.getElementById("login-form").addEventListener("submit", e => {
  e.preventDefault();
  login(e.target);
  renderMenu();
  renderAdmin();
});
