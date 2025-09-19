// =========================
// Util
// =========================
const num = v => (isNaN(Number(v)) || Number(v) < 0 ? 0 : Math.floor(Number(v)));
const byId = id => document.getElementById(id);

function downloadFile(name, content, type="text/plain"){
  const blob = new Blob([content], {type});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
  URL.revokeObjectURL(a.href);
}

function readFile(file, callback){
  const reader = new FileReader();
  reader.onload = e => callback(e.target.result);
  reader.readAsText(file);
}

// =========================
// Modelo e Estado
// =========================
const PARTES = [
  { id: 6, nome: "Cabeça", vida: 2, ar: 0 },
  { id: 5, nome: "Tronco", vida: 3, ar: 0 },
  { id: 4, nome: "Perna 1", vida: 2, ar: 0 },
  { id: 3, nome: "Perna 2", vida: 2, ar: 0 },
  { id: 2, nome: "Braço 1", vida: 2, ar: 0 },
  { id: 1, nome: "Braço 2", vida: 2, ar: 0 },
];

const state = {
  extras: { pv:{}, ar:{}, mana:0, pa:0 },
  gasto:  { pv:{}, ar:{}, mana:0, pa:0 },
  dark: false,
};

// inicializa com zeros
PARTES.forEach(p=>{
  state.extras.pv[p.id]=0; state.extras.ar[p.id]=0;
  state.gasto.pv[p.id]=0;  state.gasto.ar[p.id]=0;
});

// =========================
// Cálculos
// =========================
const getAtributo = id => num(byId(id)?.value);
const vidaBaseParte = v => v + getAtributo("vitalidade") + Math.floor(getAtributo("corpo")/3);
const arBaseParte = v => v;
const manaBase = ()=> getAtributo("espirito")*2+1;
const paBase   = ()=> 2+Math.floor(getAtributo("agilidade")/2);

const totalPV   = id => vidaBaseParte(PARTES.find(p=>p.id===id).vida)+num(state.extras.pv[id]);
const totalAR   = id => arBaseParte(PARTES.find(p=>p.id===id).ar)+num(state.extras.ar[id]);
const totalMana = ()=> manaBase()+num(state.extras.mana);
const totalPA   = ()=> paBase()+num(state.extras.pa);

const atualPV   = id=> Math.max(0,totalPV(id)-num(state.gasto.pv[id]));
const atualAR   = id=> Math.max(0,totalAR(id)-num(state.gasto.ar[id]));
const atualMana = ()=> Math.max(0,totalMana()-num(state.gasto.mana));
const atualPA   = ()=> Math.max(0,totalPA()-num(state.gasto.pa));

// =========================
// Atualização de UI
// =========================
function calcularDados(v){
  const val=num(v); if(val<=0) return "-";
  const d12=Math.floor(val/5), resto=val%5, map={1:4,2:6,3:8,4:10}, cont={};
  if(d12) cont[12]=d12; if(resto) cont[map[resto]]=(cont[map[resto]]||0)+1;
  return [12,10,8,6,4].filter(l=>cont[l]).map(l=>`${cont[l]}d${l}`).join(" + ");
}

function atualizarTudo(){
  // Dados de atributos
  byId("corpoDado").textContent   = "Dado: "+calcularDados(getAtributo("corpo"));
  byId("menteDado").textContent   = "Dado: "+calcularDados(getAtributo("mente"));
  byId("espiritoDado").textContent= "Dado: "+calcularDados(getAtributo("espirito"));

  // Painel recursos (base)
  PARTES.forEach(p=>{
    byId(`vida-${p.id}`).textContent = vidaBaseParte(p.vida);
    byId(`arm-${p.id}`).textContent  = arBaseParte(p.ar);
  });
  byId("manaTotal").textContent = manaBase();
  byId("paTotal").textContent   = paBase();
  byId("pontosAcao").textContent= totalPA();

  // Barra fixa (atuais)
  PARTES.forEach(p=>{
    document.querySelector(`.status-box.pv[data-id="${p.id}"] span`).textContent = atualPV(p.id);
    document.querySelector(`.status-box.ar[data-id="${p.id}"] span`).textContent = atualAR(p.id);
  });
  document.querySelector(".status-box.mana span").textContent = atualMana();
  document.querySelector(".status-box.pa span").textContent   = atualPA();

  salvarLocal();
}

// =========================
// Eventos
// =========================
function bindInputs(){
  document.querySelectorAll('input[type="number"], textarea').forEach(el=>{
    el.addEventListener("input",()=>{
      if(el.id.startsWith("vidaExtra-")) state.extras.pv[el.id.split("-")[1]]=num(el.value);
      else if(el.id.startsWith("armExtra-")) state.extras.ar[el.id.split("-")[1]]=num(el.value);
      else if(el.id==="manaExtra") state.extras.mana=num(el.value);
      else if(el.id==="paExtra") state.extras.pa=num(el.value);
      atualizarTudo();
    });
  });

  document.addEventListener("click",ev=>{
    const b=ev.target.closest("button"); if(!b) return;
    const t=b.dataset.type, id=b.dataset.id, minus=b.classList.contains("minus");
    if(t==="pv"||t==="ar"){
      const max=t==="pv"?totalPV(+id):totalAR(+id), g=state.gasto[t];
      if(minus&&max>0) g[id]=Math.min(max,num(g[id])+1);
      if(!minus&&num(g[id])>0) g[id]=Math.max(0,num(g[id])-1);
    }
    if(t==="mana"||t==="pa"){
      const max=t==="mana"?totalMana():totalPA();
      if(minus&&max>0) state.gasto[t]=Math.min(max,num(state.gasto[t])+1);
      if(!minus&&num(state.gasto[t])>0) state.gasto[t]=Math.max(0,num(state.gasto[t])-1);
    }
    atualizarTudo();
  });

  byId("toggleDark").addEventListener("change",e=>{
    state.dark=e.target.checked; document.body.classList.toggle("dark",state.dark); salvarLocal();
  });

  byId("btnReset").addEventListener("click",()=>{
    if(!confirm("Resetar ficha?")) return;
    document.querySelectorAll("input[type=number]").forEach(el=>el.value=0);
    document.querySelectorAll("textarea").forEach(el=>el.value="");
    PARTES.forEach(p=>{ state.extras.pv[p.id]=0; state.extras.ar[p.id]=0; state.gasto.pv[p.id]=0; state.gasto.ar[p.id]=0; });
    state.extras.mana=state.extras.pa=0; state.gasto.mana=state.gasto.pa=0;
    atualizarTudo();
  });
}

// =========================
// Export / Import
// =========================
function coletarFicha(){
  const camposNum = Array.from(document.querySelectorAll('input[type="number"]'))
    .reduce((acc,el)=>{ acc[el.id]=num(el.value); return acc; },{});
  const camposTxt = Array.from(document.querySelectorAll('textarea'))
    .reduce((acc,el)=>{ acc[el.id]=el.value||""; return acc; },{});

  return {
    meta:{ versao:"2.2.x", atualizadoEm:new Date().toISOString() },
    atributos:{ corpo:getAtributo("corpo"), mente:getAtributo("mente"), espirito:getAtributo("espirito") },
    especializacoes:{
      forca:getAtributo("forca"), agilidade:getAtributo("agilidade"), destreza:getAtributo("destreza"),
      resistencias:getAtributo("resistencias"), vitalidade:getAtributo("vitalidade"),
      sabedoria:getAtributo("sabedoria"), inteligencia:getAtributo("inteligencia"),
      carisma:getAtributo("carisma"), percepcao:getAtributo("percepcao")
    },
    extras: JSON.parse(JSON.stringify(state.extras)),
    gasto: JSON.parse(JSON.stringify(state.gasto)),
    textos:{
      habilidades:byId("habilidades").value, defeitos:byId("defeitos").value,
      magias:byId("magias").value, equipamentos:byId("equipamentos").value, kits:byId("kits").value
    },
    camposCru:{...camposNum,...camposTxt}
  };
}

function aplicarFicha(data){
  Object.entries(data.atributos||{}).forEach(([k,v])=>{ if(byId(k)) byId(k).value=v; });
  Object.entries(data.especializacoes||{}).forEach(([k,v])=>{ if(byId(k)) byId(k).value=v; });

  ["pv","ar"].forEach(tipo=>{
    Object.entries(data.extras?.[tipo]||{}).forEach(([id,v])=>{
      state.extras[tipo][id]=num(v); const el=byId(`${tipo==="pv"?"vida":"arm"}Extra-${id}`); if(el) el.value=v;
    });
  });
  state.extras.mana=data.extras?.mana||0; state.extras.pa=data.extras?.pa||0;
  if(byId("manaExtra")) byId("manaExtra").value=state.extras.mana;
  if(byId("paExtra")) byId("paExtra").value=state.extras.pa;

  state.gasto=data.gasto||state.gasto;
  ["habilidades","defeitos","magias","equipamentos","kits"].forEach(id=>{ if(byId(id)) byId(id).value=data.textos?.[id]||""; });

  if(typeof data.dark!=="undefined"){ state.dark=data.dark; document.body.classList.toggle("dark",state.dark); if(byId("toggleDark")) byId("toggleDark").checked=state.dark; }
  atualizarTudo();
}

// Export JSON
byId("exportJson").addEventListener("click",()=>{
  const data=coletarFicha();
  downloadFile((data.nome||"ficha")+".json",JSON.stringify(data,null,2),"application/json");
});

// Export HTML standalone
byId("exportHtml").addEventListener("click",async()=>{
  const css=await (await fetch("css/style.css")).text();
  const js =await (await fetch("js/script.js")).text();
  const conteudo=document.querySelector("html").cloneNode(true);
  conteudo.querySelectorAll("link[rel=stylesheet]").forEach(l=>l.remove());
  conteudo.querySelectorAll("script[src]").forEach(s=>s.remove());
  const style=document.createElement("style"); style.textContent=css; conteudo.querySelector("head").appendChild(style);
  const script=document.createElement("script"); script.textContent=js; conteudo.querySelector("head").appendChild(script);
  downloadFile("ficha.html","<!DOCTYPE html>\n"+conteudo.outerHTML,"text/html");
});

// Export PDF
byId("exportPdf").addEventListener("click",()=>window.print());

// Import JSON
byId("importJson").addEventListener("change",e=>{
  const file=e.target.files[0]; if(!file) return;
  readFile(file,text=>{
    try{ aplicarFicha(JSON.parse(text)); alert("Ficha importada com sucesso!"); }
    catch{ alert("Arquivo inválido ou corrompido."); }
  });
});

// =========================
// LocalStorage
// =========================
const LS_KEY="rpg_pi_flash_ficha";

function salvarLocal(){
  const payload={ inputs:Array.from(document.querySelectorAll("input[type=number]")).map(el=>({id:el.id,value:el.value})),
    textareas:Array.from(document.querySelectorAll("textarea")).map(el=>({id:el.id,value:el.value})),
    extras:state.extras,gasto:state.gasto,dark:state.dark };
  try{ localStorage.setItem(LS_KEY,JSON.stringify(payload)); }catch{}
}

function restaurarLocal(){
  try{
    const saved=JSON.parse(localStorage.getItem(LS_KEY)); if(!saved) return;
    (saved.inputs||[]).forEach(it=>{ if(byId(it.id)) byId(it.id).value=it.value; });
    (saved.textareas||[]).forEach(it=>{ if(byId(it.id)) byId(it.id).value=it.value; });
    state.extras=saved.extras||state.extras; state.gasto=saved.gasto||state.gasto; state.dark=!!saved.dark;
    if(byId("toggleDark")) byId("toggleDark").checked=state.dark; document.body.classList.toggle("dark",state.dark);
  }catch{}
}

// =========================
// Inicialização
// =========================
document.addEventListener("DOMContentLoaded",()=>{ restaurarLocal(); bindInputs(); atualizarTudo(); });
