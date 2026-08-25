// ==================================================
// 🖥️ ATUALIZAÇÃO DE INTERFACE
// ==================================================
export function atualizarTudo() {
  // Dados dos atributos principais
  byId("corpoDado").textContent =
    "Dado: " + calcularDados(getAtributo("corpo"));
  byId("menteDado").textContent =
    "Dado: " + calcularDados(getAtributo("mente"));
  byId("espiritoDado").textContent =
    "Dado: " + calcularDados(getAtributo("espirito"));

  // Atualiza painel de recursos (TOTAL = base + extras)
  PARTES.forEach((p) => {
    byId(`vida-${p.id}`).textContent = totalPV(p.id).toFixed(1);
    byId(`arm-${p.id}`).textContent = totalAR(p.id).toFixed(1);
  });

  byId("manaTotal").textContent = totalMana().toFixed(1);
  byId("paTotal").textContent = totalPA().toFixed(1);
  byId("pontosAcao").textContent = totalPA().toFixed(1);

  // Atualiza barra fixa
  PARTES.forEach((p) => {
    // VIDA
    const spanPV = document.querySelector(
      `.status-box.pv[data-id="${p.id}"] span`,
    );
    const valPV = atualPV(p.id);
    const maxPV = totalPV(p.id);

    spanPV.textContent = valPV.toFixed(1);

    // Remove classes antigas
    spanPV.classList.remove("negativo", "overmax");

    // Vermelho (já existia)
    if (valPV < 0) {
      spanPV.classList.add("negativo");
    }
    // Azul quando acima do máximo
    else if (valPV > maxPV) {
      spanPV.classList.add("overmax");
    }

    // ARMADURA
    const spanAR = document.querySelector(
      `.status-box.ar[data-id="${p.id}"] span`,
    );
    const valAR = atualAR(p.id);
    const maxAR = totalAR(p.id);

    spanAR.textContent = valAR.toFixed(1);

    spanAR.classList.remove("negativo", "overmax");

    if (valAR < 0) {
      spanAR.classList.add("negativo");
    } else if (valAR > maxAR) {
      spanAR.classList.add("overmax");
    }
  });

  // MANA
  const spanMana = document.querySelector(".status-box.mana span");
  const valMana = atualMana();
  const maxMana = totalMana();

  spanMana.textContent = valMana.toFixed(1);
  spanMana.classList.remove("negativo", "overmax");

  if (valMana < 0) {
    spanMana.classList.add("negativo");
  } else if (valMana > maxMana) {
    spanMana.classList.add("overmax");
  }

  // PA
  const spanPA = document.querySelector(".status-box.pa span");
  const valPA = atualPA();
  const maxPA = totalPA();

  spanPA.textContent = valPA.toFixed(1);
  spanPA.classList.remove("negativo", "overmax");

  if (valPA < 0) {
    spanPA.classList.add("negativo");
  } else if (valPA > maxPA) {
    spanPA.classList.add("overmax");
  }

  salvarLocal();
}

// ==================================================
// ⚙️ EVENTOS DE INPUT E BOTÕES
// ==================================================
export function bindInputs() {
  // Atualiza automaticamente ao alterar inputs
  document
    .querySelectorAll('input[type="number"],input[type="text"], textarea')
    .forEach((el) => {
      el.addEventListener("input", () => {
        if (el.id.startsWith("vidaExtra-"))
          state.extras.pv[el.id.split("-")[1]] = num(el.value);
        else if (el.id.startsWith("armExtra-"))
          state.extras.ar[el.id.split("-")[1]] = num(el.value);
        else if (el.id === "manaExtra") state.extras.mana = num(el.value);
        else if (el.id === "paExtra") state.extras.pa = num(el.value);
        atualizarTudo();
      });
    });

  // Botões + e − da barra fixa
  document.addEventListener("click", (ev) => {
    const b = ev.target.closest("button");
    if (!b) return;
    const t = b.dataset.type; // pv | ar | mana | pa
    const id = b.dataset.id; // 1..6 para pv/ar
    const minus = b.classList.contains("minus");

    if (t === "pv" || t === "ar") {
      const g = state.gasto[t];
      const atualGasto = Number(g[id] ?? 0) || 0;

      // minus = tomar dano / gastar recurso → aumenta gasto
      // plus  = curar / recuperar → diminui gasto
      g[id] = minus ? atualGasto + 0.5 : atualGasto - 0.5;
    }

    if (t === "mana" || t === "pa") {
      const atualGasto = Number(state.gasto[t] ?? 0) || 0;
      state.gasto[t] = minus ? atualGasto + 0.5 : atualGasto - 0.5;
    }

    atualizarTudo();
  });

  // Modo escuro
  byId("toggleDark").addEventListener("change", (e) => {
    state.dark = e.target.checked;
    document.body.classList.toggle("dark", state.dark);
    salvarLocal();
  });

  // Resetar ficha
  byId("btnReset").addEventListener("click", () => {
    if (!confirm("Resetar ficha?")) return;

    // Zera todos os números
    document
      .querySelectorAll("input[type=number]")
      .forEach((el) => (el.value = 0));

    // Zera todos os textos
    document
      .querySelectorAll("input[type=text]")
      .forEach((el) => (el.value = ""));

    // Zera todos os campos de texto longo
    document.querySelectorAll("textarea").forEach((el) => (el.value = ""));

    // Zera estado interno
    PARTES.forEach((p) => {
      state.extras.pv[p.id] = 0;
      state.extras.ar[p.id] = 0;
      state.gasto.pv[p.id] = 0;
      state.gasto.ar[p.id] = 0;
    });
    state.extras.mana = state.extras.pa = 0;
    state.gasto.mana = state.gasto.pa = 0;

    // Atualiza visual
    atualizarTudo();
  });
}
