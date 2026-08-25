// ==================================================
// 📦 MODELO E ESTADO
// ==================================================

// Define partes do corpo com base e ID
export const PARTES = [
  { id: 6, nome: "Cabeça", vida: 2, ar: 0 },
  { id: 5, nome: "Tronco", vida: 3, ar: 0 },
  { id: 4, nome: "Perna 1", vida: 2, ar: 0 },
  { id: 3, nome: "Perna 2", vida: 2, ar: 0 },
  { id: 2, nome: "Braço 1", vida: 2, ar: 0 },
  { id: 1, nome: "Braço 2", vida: 2, ar: 0 },
];

// Estado da ficha (extras, gasto e dark mode)
export const state = {
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
