export const advantages = [
  {
    id: "corajoso",
    nome: "Corajoso",
    custo: 1,
    categoria: "Sobrevivência",
    descricao: "Recebe +2 em testes contra medo ou intimidação.",
    parametros: [],
    efeitos: [
      {
        tipo: "bonus_teste",
        valor: 2,
        contexto: ["medo", "intimidacao"],
      },
    ],
  },

  {
    id: "boa-memoria",
    nome: "Boa Memória",
    custo: 1,
    categoria: "Profissão",
    descricao:
      "Lembra detalhes importantes com facilidade; +2 em testes de lembrança e conhecimento.",
    parametros: [],
    efeitos: [
      {
        tipo: "bonus_teste",
        valor: 2,
        contexto: ["lembranca", "conhecimento"],
      },
    ],
  },

  {
    id: "sorte",
    nome: "Sorte",
    custo: 1,
    categoria: "Sobrevivência",
    descricao: "Uma vez por sessão, pode refazer uma rolagem falha.",
    parametros: [],
    efeitos: [
      {
        tipo: "rerrolagem",
        quantidade: 1,
        periodo: "sessao",
        condicao: "falha",
      },
    ],
  },

  {
    id: "ambidestro",
    nome: "Ambidestro",
    custo: 2,
    categoria: "Combate",
    descricao: "Não sofre penalidade ao usar a mão não dominante.",
    parametros: [],
    efeitos: [
      {
        tipo: "ignorar_penalidade",
        penalidade: "mao_secundaria",
      },
    ],
  },

  {
    id: "reflexos-rapidos",
    nome: "Reflexos Rápidos",
    custo: 2,
    categoria: "Combate",
    descricao: "+2 em testes de Agilidade para esquivas e reações.",
    parametros: [],
    efeitos: [
      {
        tipo: "bonus_teste",
        atributo: "agilidade",
        valor: 2,
        contexto: ["esquiva", "reacao"],
      },
    ],
  },
];
