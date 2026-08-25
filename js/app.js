import { restaurarLocal } from "./storage.js";
import { bindInputs, atualizarTudo } from "./ui.js";
import { iniciarRegras } from "./rules.js";

document.addEventListener("DOMContentLoaded", () => {
  restaurarLocal();

  bindInputs();

  atualizarTudo();

  iniciarRegras();
});
