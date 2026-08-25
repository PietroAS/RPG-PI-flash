// ==================================================
// 📦 IMPORTAÇÕES
// ==================================================

import { state } from "./state.js";
import { getAtributo } from "./calculations.js";
import { atualizarTudo } from "./ui.js";
import { num, byId } from "./utils.js";

// ==================================================
// 🔧 UTILITÁRIOS DE ARQUIVO
// ==================================================

function downloadFile(name, content, type = "text/plain") {
  const blob = new Blob([content], { type });
  const a = document.createElement("a");

  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();

  URL.revokeObjectURL(a.href);
}

function readFile(file, callback) {
  const reader = new FileReader();

  reader.onload = (e) => callback(e.target.result);
  reader.readAsText(file);
}

// ==================================================
// 💾 EXPORTAR / IMPORTAR FICHA
// ==================================================
function coletarFicha() {
  const camposNum = Array.from(
    document.querySelectorAll('input[type="number"]'),
  ).reduce((acc, el) => {
    acc[el.id] = num(el.value);
    return acc;
  }, {});
  const camposTxt = Array.from(document.querySelectorAll("textarea")).reduce(
    (acc, el) => {
      acc[el.id] = el.value || "";
      return acc;
    },
    {},
  );

  return {
    meta: { versao: "2.3.x", atualizadoEm: new Date().toISOString() },
    basicos: {
      nome: byId("nome").value,
      idade: byId("idade").value,
      sexo: byId("sexo").value,
      tamanho: byId("tamanho").value,
      raca: byId("raca").value,
      cor: byId("cor").value,
      nivel: byId("nivel").value,
    },
    atributos: {
      corpo: getAtributo("corpo"),
      mente: getAtributo("mente"),
      espirito: getAtributo("espirito"),
    },
    especializacoes: {
      forca: getAtributo("forca"),
      agilidade: getAtributo("agilidade"),
      destreza: getAtributo("destreza"),
      resistencias: getAtributo("resistencias"),
      vitalidade: getAtributo("vitalidade"),
      sabedoria: getAtributo("sabedoria"),
      inteligencia: getAtributo("inteligencia"),
      carisma: getAtributo("carisma"),
      percepcao: getAtributo("percepcao"),
    },
    extras: JSON.parse(JSON.stringify(state.extras)),
    gasto: JSON.parse(JSON.stringify(state.gasto)),
    dark: state.dark,
    textos: {
      habilidades: byId("habilidades").value,
      defeitos: byId("defeitos").value,
      magias: byId("magias").value,
      equipamentos: byId("equipamentos").value,
      dinheiro: byId("dinheiro").value,
    },
    camposCru: { ...camposNum, ...camposTxt },
  };
}

function aplicarFicha(data) {
  if (data.basicos) {
    ["nome", "idade", "sexo", "tamanho", "raca", "cor", "nivel"].forEach(
      (id) => {
        if (byId(id)) byId(id).value = data.basicos[id] || "";
      },
    );
  }
  Object.entries(data.atributos || {}).forEach(([k, v]) => {
    if (byId(k)) byId(k).value = v;
  });
  Object.entries(data.especializacoes || {}).forEach(([k, v]) => {
    if (byId(k)) byId(k).value = v;
  });

  ["pv", "ar"].forEach((tipo) => {
    Object.entries(data.extras?.[tipo] || {}).forEach(([id, v]) => {
      state.extras[tipo][id] = num(v);
      const el = byId(`${tipo === "pv" ? "vida" : "arm"}Extra-${id}`);
      if (el) el.value = v;
    });
  });
  state.extras.mana = data.extras?.mana || 0;
  state.extras.pa = data.extras?.pa || 0;
  if (byId("manaExtra")) byId("manaExtra").value = state.extras.mana;
  if (byId("paExtra")) byId("paExtra").value = state.extras.pa;

  state.gasto = data.gasto || state.gasto;
  ["habilidades", "defeitos", "magias", "equipamentos", "dinheiro"].forEach(
    (id) => {
      if (byId(id)) byId(id).value = data.textos?.[id] || "";
    },
  );

  if (typeof data.dark !== "undefined") {
    state.dark = data.dark;
    document.body.classList.toggle("dark", state.dark);
    if (byId("toggleDark")) byId("toggleDark").checked = state.dark;
  }
  atualizarTudo();
}

// ==================================================
// 🌐 EXPORTAÇÕES
// ==================================================
export function iniciarArquivos() {
  byId("exportJson").addEventListener("click", () => {
    const data = coletarFicha();

    downloadFile(
      (data.basicos.nome || "ficha") + ".json",
      JSON.stringify(data, null, 2),
      "application/json",
    );
  });

  byId("exportPdf").addEventListener("click", () => {
    window.print();
  });

  byId("importJson").addEventListener("change", (e) => {
    const file = e.target.files[0];

    if (!file) return;

    readFile(file, (text) => {
      try {
        aplicarFicha(JSON.parse(text));
        alert("Ficha importada com sucesso!");
      } catch {
        alert("Arquivo inválido ou corrompido.");
      }
    });
  });
}
