import { restaurarLocal } from "./storage.js";
import { bindInputs, atualizarTudo } from "./ui.js";
import { iniciarRegras } from "./rules.js";
import { iniciarArquivos } from "./files.js";

document.addEventListener("DOMContentLoaded", () => {
  restaurarLocal();

  bindInputs();

  atualizarTudo();

  iniciarRegras();

  iniciarArquivos();
});
