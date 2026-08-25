// ==================================================
// 📦 IMPORTAÇÕES
// ==================================================

import { state } from "./state.js";

// ==================================================
// 💾 LOCALSTORAGE
// ==================================================

const LS_KEY = "rpg_pi_flash_ficha";

export function salvarLocal() {
  const payload = {
    inputs: Array.from(
      document.querySelectorAll('input[type="number"], input[type="text"]'),
    ).map((el) => ({
      id: el.id,
      value: el.value,
    })),

    textareas: Array.from(document.querySelectorAll("textarea")).map((el) => ({
      id: el.id,
      value: el.value,
    })),

    extras: state.extras,
    gasto: state.gasto,
    dark: state.dark,
  };

  try {
    localStorage.setItem(LS_KEY, JSON.stringify(payload));
  } catch {}
}

export function restaurarLocal() {
  try {
    const saved = JSON.parse(localStorage.getItem(LS_KEY));

    if (!saved) return;

    (saved.inputs || []).forEach((item) => {
      const elemento = document.getElementById(item.id);

      if (elemento) {
        elemento.value = item.value;
      }
    });

    (saved.textareas || []).forEach((item) => {
      const elemento = document.getElementById(item.id);

      if (elemento) {
        elemento.value = item.value;
      }
    });

    state.extras = saved.extras || state.extras;

    state.gasto = saved.gasto || state.gasto;

    state.dark = !!saved.dark;

    const toggleDark = document.getElementById("toggleDark");

    if (toggleDark) {
      toggleDark.checked = state.dark;
    }

    document.body.classList.toggle("dark", state.dark);
  } catch {}
}
