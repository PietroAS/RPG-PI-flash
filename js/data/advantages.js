export const advantages = [
  {
    numero: 1,
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
    numero: 2,
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
    numero: 3,
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
    numero: 4,
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
    numero: 5,
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
  {
    numero: 6,
    id: "voz-encantadora",
    nome: "Voz Encantadora",
    custo: 1,
    categoria: "Social",
    descricao: "+2 em testes de Carisma para convencer ou seduzir.",
    parametros: [],
    efeitos: [
      {
        tipo: "bonus_teste",
        atributo: "carisma",
        valor: 2,
        contexto: ["convencer", "seduzir"],
      },
    ],
  },

  {
    numero: 7,
    id: "visao-aguçada",
    nome: "Visão Aguçada",
    custo: 1,
    categoria: "Sobrevivência",
    descricao: "+2 em testes de percepção visual e mira.",
    parametros: [],
    efeitos: [
      {
        tipo: "bonus_teste",
        valor: 2,
        contexto: ["percepcao_visual", "mira"],
      },
    ],
  },

  {
    numero: 8,
    id: "audicao-apurada",
    nome: "Audição Apurada",
    custo: 1,
    categoria: "Sobrevivência",
    descricao: "+2 em testes de percepção auditiva e localização de sons.",
    parametros: [],
    efeitos: [
      {
        tipo: "bonus_teste",
        valor: 2,
        contexto: ["percepcao_auditiva", "localizacao_sons"],
      },
    ],
  },

  {
    numero: 9,
    id: "equilibrio-perfeito",
    nome: "Equilíbrio Perfeito",
    custo: 1,
    categoria: "Movimento",
    descricao:
      "+2 em testes de Agilidade para manter-se de pé ou se mover em superfícies estreitas.",
    parametros: [],
    efeitos: [
      {
        tipo: "bonus_teste",
        atributo: "agilidade",
        valor: 2,
        contexto: ["equilibrio", "superficie_estreita"],
      },
    ],
  },

  {
    numero: 10,
    id: "forca-de-vontade",
    nome: "Força de Vontade",
    custo: 2,
    categoria: "Sobrevivência",
    descricao:
      "+2 em testes de resistência mental contra medo, controle ou dor.",
    parametros: [],
    efeitos: [
      {
        tipo: "bonus_teste",
        valor: 2,
        contexto: ["medo", "controle_mental", "dor"],
      },
    ],
  },
];
