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
const atualPV = (id) => {
  const gasto = Number(state.gasto.pv[id] ?? 0) || 0;
  return totalPV(id) - gasto; // pode ficar negativo e pode passar do total
};

const atualAR = (id) => {
  const gasto = Number(state.gasto.ar[id] ?? 0) || 0;
  return totalAR(id) - gasto;
};

const atualMana = () => {
  const gasto = Number(state.gasto.mana ?? 0) || 0;
  return totalMana() - gasto;
};

const atualPA = () => {
  const gasto = Number(state.gasto.pa ?? 0) || 0;
  return totalPA() - gasto;
};

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
