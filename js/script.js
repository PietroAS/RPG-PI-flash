// ==================================================
// 🔧 UTILITÁRIOS
// ==================================================

// Converte qualquer valor em número decimal (aceita 0.5, 1.5, etc.)
// Retorna 0 se for NaN ou negativo.
const num = (v) => {
  const n = parseFloat(v);
  return isNaN(n) || n < 0 ? 0 : n;
};

// Atalho para pegar elementos por ID
const byId = (id) => document.getElementById(id);

// Função para baixar arquivos (usada nos exports)
function downloadFile(name, content, type = "text/plain") {
  const blob = new Blob([content], { type });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
  URL.revokeObjectURL(a.href);
}

// Leitura de arquivos (usado na importação JSON)
function readFile(file, callback) {
  const reader = new FileReader();
  reader.onload = (e) => callback(e.target.result);
  reader.readAsText(file);
}

// ==================================================
// 📦 MODELO E ESTADO
// ==================================================

// Define partes do corpo com base e ID
const PARTES = [
  { id: 6, nome: "Cabeça", vida: 2, ar: 0 },
  { id: 5, nome: "Tronco", vida: 3, ar: 0 },
  { id: 4, nome: "Perna 1", vida: 2, ar: 0 },
  { id: 3, nome: "Perna 2", vida: 2, ar: 0 },
  { id: 2, nome: "Braço 1", vida: 2, ar: 0 },
  { id: 1, nome: "Braço 2", vida: 2, ar: 0 },
];

// Estado da ficha (extras, gasto e dark mode)
const state = {
  extras: { pv: {}, ar: {}, mana: 0, pa: 0 },
  gasto: { pv: {}, ar: {}, mana: 0, pa: 0 },
  dark: false,
};

// Inicializa todas as partes com 0
PARTES.forEach((p) => {
  state.extras.pv[p.id] = 0;
  state.extras.ar[p.id] = 0;
  state.gasto.pv[p.id] = 0;
  state.gasto.ar[p.id] = 0;
});

// ==================================================
// 🧮 CÁLCULOS BASE E TOTAIS
// ==================================================

// Lê atributos da ficha
const getAtributo = (id) => num(byId(id)?.value);

// Calcula base de vida, armadura, mana e PA
const vidaBaseParte = (v) =>
  v + getAtributo("vitalidade") + Math.floor(getAtributo("corpo") / 3);
const arBaseParte = (v) => v;
const manaBase = () => getAtributo("espirito") * 2 + 1;
const paBase = () => 2 + Math.floor(getAtributo("agilidade") / 2);

// Totais (base + extras)
const totalPV = (id) =>
  vidaBaseParte(PARTES.find((p) => p.id === id).vida) +
  num(state.extras.pv[id]);
const totalAR = (id) =>
  arBaseParte(PARTES.find((p) => p.id === id).ar) + num(state.extras.ar[id]);
const totalMana = () => manaBase() + num(state.extras.mana);
const totalPA = () => paBase() + num(state.extras.pa);

// Valores atuais (total - gasto)
const atualPV = (id) => Math.max(0, totalPV(id) - num(state.gasto.pv[id]));
const atualAR = (id) => Math.max(0, totalAR(id) - num(state.gasto.ar[id]));
const atualMana = () => Math.max(0, totalMana() - num(state.gasto.mana));
const atualPA = () => Math.max(0, totalPA() - num(state.gasto.pa));

// ==================================================
// 🎲 CÁLCULO DE DADOS
// ==================================================
function calcularDados(v) {
  const val = num(v);
  if (val <= 0) return "-";
  const d12 = Math.floor(val / 5);
  const resto = val % 5;
  const map = { 1: 4, 2: 6, 3: 8, 4: 10 };
  const cont = {};
  if (d12) cont[12] = d12;
  if (resto) cont[map[resto]] = (cont[map[resto]] || 0) + 1;
  return [12, 10, 8, 6, 4]
    .filter((l) => cont[l])
    .map((l) => `${cont[l]}d${l}`)
    .join(" + ");
}

// ==================================================
// 🖥️ ATUALIZAÇÃO DE INTERFACE
// ==================================================
function atualizarTudo() {
  // Dados dos atributos principais
  byId("corpoDado").textContent =
    "Dado: " + calcularDados(getAtributo("corpo"));
  byId("menteDado").textContent =
    "Dado: " + calcularDados(getAtributo("mente"));
  byId("espiritoDado").textContent =
    "Dado: " + calcularDados(getAtributo("espirito"));

  // Atualiza painel de recursos
  PARTES.forEach((p) => {
    byId(`vida-${p.id}`).textContent = vidaBaseParte(p.vida);
    byId(`arm-${p.id}`).textContent = arBaseParte(p.ar);
  });
  byId("manaTotal").textContent = manaBase();
  byId("paTotal").textContent = paBase();
  byId("pontosAcao").textContent = totalPA();

  // Atualiza barra fixa
  PARTES.forEach((p) => {
    document.querySelector(
      `.status-box.pv[data-id="${p.id}"] span`
    ).textContent = atualPV(p.id).toFixed(1);
    document.querySelector(
      `.status-box.ar[data-id="${p.id}"] span`
    ).textContent = atualAR(p.id).toFixed(1);
  });
  document.querySelector(".status-box.mana span").textContent =
    atualMana().toFixed(1);
  document.querySelector(".status-box.pa span").textContent =
    atualPA().toFixed(1);

  salvarLocal();
}

// ==================================================
// ⚙️ EVENTOS DE INPUT E BOTÕES
// ==================================================
function bindInputs() {
  // Atualiza automaticamente ao alterar inputs
  document.querySelectorAll('input[type="number"], textarea').forEach((el) => {
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
    const t = b.dataset.type;
    const id = b.dataset.id;
    const minus = b.classList.contains("minus");

    // Aumenta/diminui 0.5 em vez de 1
    if (t === "pv" || t === "ar") {
      const max = t === "pv" ? totalPV(+id) : totalAR(+id);
      const g = state.gasto[t];
      if (minus && max > 0) g[id] = Math.min(max, num(g[id]) + 0.5);
      if (!minus && num(g[id]) > 0) g[id] = Math.max(0, num(g[id]) - 0.5);
    }

    if (t === "mana" || t === "pa") {
      const max = t === "mana" ? totalMana() : totalPA();
      if (minus && max > 0)
        state.gasto[t] = Math.min(max, num(state.gasto[t]) + 0.5);
      if (!minus && num(state.gasto[t]) > 0)
        state.gasto[t] = Math.max(0, num(state.gasto[t]) - 0.5);
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

// ==================================================
// 💾 EXPORTAR / IMPORTAR FICHA
// ==================================================
function coletarFicha() {
  const camposNum = Array.from(
    document.querySelectorAll('input[type="number"]')
  ).reduce((acc, el) => {
    acc[el.id] = num(el.value);
    return acc;
  }, {});
  const camposTxt = Array.from(document.querySelectorAll("textarea")).reduce(
    (acc, el) => {
      acc[el.id] = el.value || "";
      return acc;
    },
    {}
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
      }
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
  ["habilidades", "defeitos", "magias", "equipamentos", "Dinheiro"].forEach(
    (id) => {
      if (byId(id)) byId(id).value = data.textos?.[id] || "";
    }
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
byId("exportJson").addEventListener("click", () => {
  const data = coletarFicha();
  downloadFile(
    (data.nome || "ficha") + ".json",
    JSON.stringify(data, null, 2),
    "application/json"
  );
});

byId("exportHtml").addEventListener("click", async () => {
  const css = await (await fetch("css/style.css")).text();
  const js = await (await fetch("js/script.js")).text();
  const conteudo = document.querySelector("html").cloneNode(true);
  conteudo.querySelectorAll("link[rel=stylesheet]").forEach((l) => l.remove());
  conteudo.querySelectorAll("script[src]").forEach((s) => s.remove());
  const style = document.createElement("style");
  style.textContent = css;
  conteudo.querySelector("head").appendChild(style);
  const script = document.createElement("script");
  script.textContent = js;
  conteudo.querySelector("head").appendChild(script);
  downloadFile(
    "ficha.html",
    "<!DOCTYPE html>\n" + conteudo.outerHTML,
    "text/html"
  );
});

byId("exportPdf").addEventListener("click", () => window.print());

// Importação JSON
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

// ==================================================
// 💾 LOCALSTORAGE (SALVAMENTO AUTOMÁTICO)
// ==================================================
const LS_KEY = "rpg_pi_flash_ficha";

function salvarLocal() {
  const payload = {
    inputs: Array.from(document.querySelectorAll("input[type=number]")).map(
      (el) => ({ id: el.id, value: el.value })
    ),
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

function restaurarLocal() {
  try {
    const saved = JSON.parse(localStorage.getItem(LS_KEY));
    if (!saved) return;
    (saved.inputs || []).forEach((it) => {
      if (byId(it.id)) byId(it.id).value = it.value;
    });
    (saved.textareas || []).forEach((it) => {
      if (byId(it.id)) byId(it.id).value = it.value;
    });
    state.extras = saved.extras || state.extras;
    state.gasto = saved.gasto || state.gasto;
    state.dark = !!saved.dark;
    if (byId("toggleDark")) byId("toggleDark").checked = state.dark;
    document.body.classList.toggle("dark", state.dark);
  } catch {}
}

// ==================================================
// 📜 PAINÉIS: BARRA FIXA E REGRAS
// ==================================================
const barra = document.querySelector(".barra-status");
const painelRegras = byId("painelRegras");

byId("toggleBarra")?.addEventListener("click", () => {
  barra.classList.toggle("colapsada");
});

byId("toggleRegras")?.addEventListener("click", () => {
  painelRegras.classList.add("aberto");
  barra.classList.add("colapsada");

  const container = byId("textoRegras");
  if (container && !container.dataset.loaded) {
    const CACHE_KEY = "regras_md_cache_v1";
    const REGRAS_URLS = [
      // 1) URL relativa (recomendado: coloque REGRAS.md na raiz do site)
      "REGRAS.md",
      // 2) GitHub Pages absoluto (caso o site esteja em subpasta)
      "https://pietroas.github.io/RPG-PI-flash/REGRAS.md",
      // 3) CDN cacheada (rápida e com menos rate limit)
      "https://cdn.jsdelivr.net/gh/PietroAS/RPG-PI-flash/REGRAS.md",
      // 4) Raw (último recurso)
      "https://raw.githubusercontent.com/PietroAS/RPG-PI-flash/main/REGRAS.md",
    ];

    // 0) Se houver cache, renderiza já (e depois tentamos atualizar em bg)
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      renderRegras(cached, container);
      container.dataset.loaded = "true";
    }

    // 1) Tenta baixar das fontes em cascata
    (async () => {
      for (const url of REGRAS_URLS) {
        try {
          const resp = await fetch(url, { cache: "no-cache" });
          if (resp.ok) {
            const md = await resp.text();
            // Evita re-renderizar idêntico desnecessariamente
            if (!cached || cached !== md) {
              renderRegras(md, container);
              localStorage.setItem(CACHE_KEY, md);
              container.dataset.loaded = "true";
            }
            return; // sucesso, para aqui
          }
        } catch (e) {
          // tenta próxima URL
        }
      }
      // 2) Se chegou aqui, falhou tudo
      if (!cached) {
        container.innerHTML = `
        <div style="padding:1rem">
          ❌ Não foi possível carregar as regras agora (limite de requisições).
          <br><br>
          <a href="https://github.com/PietroAS/RPG-PI-flash/blob/main/REGRAS.md" target="_blank" rel="noopener">
            Abrir REGRAS.md no GitHub
          </a>
        </div>`;
      }
    })();
  }
});

byId("fecharRegras")?.addEventListener("click", () => {
  painelRegras.classList.remove("aberto");
});

function renderRegras(md, container) {
  // 1) Markdown -> HTML
  container.innerHTML = marked.parse(md);

  // 2) Slugify estilo GitHub + IDs únicos nos títulos
  const slugify = (() => {
    const used = new Map();
    return (raw) => {
      let base = (raw || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // remove acentos
        .replace(/[^a-z0-9\s-]/g, "") // remove pontuação
        .trim()
        .replace(/\s+/g, "-") // espaços -> hífen
        .replace(/-+/g, "-"); // colapsa hífens
      const n = used.get(base) || 0;
      used.set(base, n + 1);
      return n ? `${base}-${n}` : base;
    };
  })();

  container.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach((h) => {
    if (!h.id || !h.id.trim()) h.id = slugify(h.textContent || "");
  });

  // 3) Helpers de âncora
  const normalizeSlug = (s) =>
    (s || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

  const queryByIdSafe = (root, id) => {
    const sel =
      typeof CSS !== "undefined" && CSS.escape
        ? `#${CSS.escape(id)}`
        : `#${id.replace(/"/g, '\\"')}`;
    return root.querySelector(sel);
  };

  const findAnchorIn = (root, rawHash) => {
    if (!rawHash) return null;
    const decoded = decodeURIComponent(rawHash.replace(/^#/, ""));
    // tenta direto
    let el = queryByIdSafe(root, decoded);
    if (el) return el;
    // tenta normalizado
    el = queryByIdSafe(root, normalizeSlug(decoded));
    return el || null;
  };

  // 4) Intercepta links com hash e rola DENTRO do painel de regras
  const scroller = document.getElementById("painelRegras"); // <- é ele quem rola
  container.querySelectorAll("a").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href) return;

    let url = null;
    try {
      url = new URL(href, window.location.href);
    } catch {}

    const hasHash = href.startsWith("#") || (url && url.hash);
    if (!hasHash) {
      // Sem hash: trata como externo
      a.target = "_blank";
      a.rel = "noopener";
      return;
    }

    a.addEventListener("click", (e) => {
      e.preventDefault();
      const hash = href.startsWith("#") ? href : url.hash;
      const alvo = findAnchorIn(container, hash); // usa sua função já definida
      if (!alvo || !scroller) return;

      // posição do alvo relativa ao container com overflow (painelRegras)
      // percorre até achar o scroller para somar os offsets corretamente
      let top = 0,
        el = alvo;
      while (el && el !== scroller) {
        top += el.offsetTop;
        el = el.offsetParent;
      }
      // margem opcional para não colar no topo
      scroller.scrollTo({ top: Math.max(0, top - 12), behavior: "smooth" });
    });
  });
}

// ==================================================
// 🚀 INICIALIZAÇÃO
// ==================================================
document.addEventListener("DOMContentLoaded", () => {
  restaurarLocal();
  bindInputs();
  atualizarTudo();
});
