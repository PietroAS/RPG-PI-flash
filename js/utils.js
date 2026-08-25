// ==================================================
// 🔧 UTILITÁRIOS
// ==================================================

export const num = (v) => {
  const n = parseFloat(v);
  return isNaN(n) || n < 0 ? 0 : n;
};

export const byId = (id) => document.getElementById(id);
