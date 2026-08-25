// ==================================================
// 📦 IMPORTAÇÕES
// ==================================================

import { num, byId } from "./utils.js";

// ==================================================
// 📜 PAINÉIS: BARRA FIXA E REGRAS
// ==================================================

export function iniciarRegras() {
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

    // Corrige prefixos dos links internos (GitHub -> local)
    container.querySelectorAll("a[href]").forEach((a) => {
      const href = a.getAttribute("href");
      if (!href) return;
      const match = href.match(/(?:REGRAS\.md)?(#.+)$/i);
      if (match) a.setAttribute("href", match[1]);
    });

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

    // 3) Helpers
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
    const scroller = document.querySelector("#painelRegras .conteudo-regras");

    container.querySelectorAll("a").forEach((a) => {
      const href = a.getAttribute("href");
      if (!href) return;

      // resolve relativo/absoluto para extrair hash de forma robusta
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
        e.preventDefault(); // nunca navega
        const hash = href.startsWith("#") ? href : url ? url.hash : "";
        const alvo = findAnchorIn(container, hash);
        if (!alvo || !scroller) return;

        // Posição do alvo relativa ao scroller (preciso e à prova de layout)
        const scrollerRect = scroller.getBoundingClientRect();
        const alvoRect = alvo.getBoundingClientRect();
        const offsetTop = alvoRect.top - scrollerRect.top + scroller.scrollTop;

        scroller.scrollTo({
          top: Math.max(0, offsetTop - 12), // margem de respiro
          behavior: "smooth",
        });
      });
    });
  }
}
