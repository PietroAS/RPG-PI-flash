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
    repeticoes: {
      permitido: false,
      maximo: 1,
    },
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
    repeticoes: {
      permitido: false,
      maximo: 1,
    },
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
        condicoes: [
          {
            tipo: "resultado",
            valor: "falha",
          },
        ],
      },
    ],
    repeticoes: {
      permitido: false,
      maximo: 1,
    },
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
    repeticoes: {
      permitido: false,
      maximo: 1,
    },
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
    repeticoes: {
      permitido: false,
      maximo: 1,
    },
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
    repeticoes: {
      permitido: false,
      maximo: 1,
    },
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
    repeticoes: {
      permitido: false,
      maximo: 1,
    },
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
    repeticoes: {
      permitido: false,
      maximo: 1,
    },
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
    repeticoes: {
      permitido: false,
      maximo: 1,
    },
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
    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },
  {
    numero: 11,
    id: "pele-grossa",
    nome: "Pele Grossa",
    custo: 2,
    categoria: "Combate",

    descricao:
      "Reduz em 1 ponto todo dano físico recebido, exceto de golpes penetrantes.",

    parametros: [],

    efeitos: [
      {
        tipo: "reducao_dano",
        valor: 1,
        dano: "fisico",
        excecoes: ["golpe_penetrante"],
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 12,
    id: "instinto-de-perigo",
    nome: "Instinto de Perigo",
    custo: 2,
    categoria: "Sobrevivência",
    descricao: "Sempre percebe emboscadas ou armadilhas a tempo de reagir.",
    parametros: [],
    efeitos: [
      {
        tipo: "percepcao_automatica",
        contexto: ["emboscada", "armadilha"],
      },
    ],
    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 13,
    id: "rapido-aprendizado",
    nome: "Rápido Aprendizado",
    custo: 2,
    categoria: "Profissão",
    descricao: "Aprende novas perícias ou magias 50% mais rápido.",
    parametros: [],
    efeitos: [
      {
        tipo: "multiplicador_aprendizado",
        valor: 1.5,
        contexto: ["pericia", "magia"],
      },
    ],
    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 14,
    id: "sangue-frio",
    nome: "Sangue Frio",
    custo: 1,
    categoria: "Sobrevivência",
    descricao:
      "Mantém a calma sob pressão. Nunca sofre penalidades por pânico.",
    parametros: [],
    efeitos: [
      {
        tipo: "ignorar_penalidade",
        penalidade: "panico",
      },
    ],
    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 15,
    id: "aparencia-agradavel",
    nome: "Aparência Agradável",
    custo: 1,
    categoria: "Social",
    descricao:
      "+2 em interações sociais amigáveis. Pode facilitar negociações.",
    parametros: [],
    efeitos: [
      {
        tipo: "bonus_teste",
        valor: 2,
        contexto: ["interacao_social_amigavel"],
      },
    ],
    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },
  {
    numero: 16,
    id: "resistencia-fisica",
    nome: "Resistência Física",
    custo: 2,
    categoria: "Sobrevivência",

    descricao: "+2 em testes de resistência a venenos e doenças.",

    parametros: [],

    efeitos: [
      {
        tipo: "bonus_teste",
        valor: 2,
        contexto: ["veneno", "doenca"],
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 17,
    id: "mente-analitica",
    nome: "Mente Analítica",
    custo: 1,
    categoria: "Profissão",

    descricao:
      "+2 em testes de Inteligência para resolver enigmas ou planejar.",

    parametros: [],

    efeitos: [
      {
        tipo: "bonus_teste",
        atributo: "inteligencia",
        valor: 2,
        contexto: ["enigma", "planejamento"],
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 18,
    id: "inspiracao-natural",
    nome: "Inspiração Natural",
    custo: 1,
    categoria: "Social",

    descricao:
      "Companheiros próximos recebem +1 em testes sociais quando ele lidera.",

    parametros: [],

    efeitos: [
      {
        tipo: "bonus_aliados",
        valor: 1,
        contexto: ["teste_social"],
        alcance: "proximo",
        condicoes: [
          {
            tipo: "liderando",
            valor: true,
          },
        ],
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 19,
    id: "determinado",
    nome: "Determinado",
    custo: 2,
    categoria: "Combate",

    descricao: "Pode continuar lutando com 0 PV por 1 turno antes de cair.",

    parametros: [],

    efeitos: [
      {
        tipo: "adiar_incapacitacao",
        condicoes: [
          {
            tipo: "pv_igual",
            valor: 0,
          },
        ],
        duracao: 1,
        unidade: "turno",
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 20,
    id: "olhos-noturnos",
    nome: "Olhos Noturnos",
    custo: 1,
    categoria: "Sobrevivência",

    descricao: "Enxerga parcialmente no escuro (até 10 metros).",

    parametros: [],

    efeitos: [
      {
        tipo: "visao_especial",
        ambiente: "escuro",
        qualidade: "parcial",
        alcance: 10,
        unidade: "metros",
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },
  {
    numero: 21,
    id: "furtivo",
    nome: "Furtivo",
    custo: 2,
    categoria: "Movimento",

    descricao: "+2 em testes de furtividade e camuflagem.",

    parametros: [],

    efeitos: [
      {
        tipo: "bonus_teste",
        valor: 2,
        contexto: ["furtividade", "camuflagem"],
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 22,
    id: "perito-em-armas",
    nome: "Perito em Armas",
    custo: 2,
    categoria: "Combate",

    descricao: "Escolha um tipo de arma. Recebe +1 em ataques com ela.",

    parametros: [
      {
        id: "tipoArma",
        nome: "Tipo de arma",
        tipo: "texto",
        obrigatorio: true,
      },
    ],

    efeitos: [
      {
        tipo: "bonus_ataque",
        valor: 1,
        alvoParametro: "tipoArma",
      },
    ],

    repeticoes: {
      permitido: true,
      maximo: null,
    },
  },

  {
    numero: 23,
    id: "aura-de-confianca",
    nome: "Aura de Confiança",
    custo: 1,
    categoria: "Social",

    descricao: "Pessoas tendem a acreditar e seguir suas palavras.",

    parametros: [],

    efeitos: [
      {
        tipo: "influencia_social",
        contexto: ["confianca", "lideranca"],
        automatizavel: false,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 24,
    id: "resistencia-magica",
    nome: "Resistência Mágica",
    custo: 2,
    categoria: "Sobrevivência",

    descricao: "Reduz em 2 o dano mágico recebido.",

    parametros: [],

    efeitos: [
      {
        tipo: "reducao_dano",
        valor: 2,
        dano: "magico",
        excecoes: [],
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 25,
    id: "espirito-calmo",
    nome: "Espírito Calmo",
    custo: 1,
    categoria: "Sobrevivência",

    descricao: "Não pode ser afetado por magias de pânico ou confusão.",

    parametros: [],

    efeitos: [
      {
        tipo: "imunidade",
        alvo: "efeito",
        contexto: ["panico", "confusao"],
        origem: "magia",
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },
  {
    numero: 26,
    id: "ligacao-elemental",
    nome: "Ligação Elemental",
    custo: 2,
    categoria: "Magia",

    descricao:
      "Escolha um elemento (fogo, água, terra ou ar). Recebe +2 em magias desse tipo.",

    parametros: [
      {
        id: "elemento",
        nome: "Elemento",
        tipo: "selecao",
        obrigatorio: true,
        opcoes: ["fogo", "agua", "terra", "ar"],
      },
    ],

    efeitos: [
      {
        tipo: "bonus_teste",
        valor: 2,
        contexto: ["magia_elemental"],
        alvoParametro: "elemento",
      },
    ],

    repeticoes: {
      permitido: true,
      maximo: null,
    },
  },

  {
    numero: 27,
    id: "treinamento-militar",
    nome: "Treinamento Militar",
    custo: 2,
    categoria: "Combate",

    descricao: "+2 em testes de estratégia, armas e disciplina.",

    parametros: [],

    efeitos: [
      {
        tipo: "bonus_teste",
        valor: 2,
        contexto: ["estrategia", "armas", "disciplina"],
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 28,
    id: "sorte-em-combate",
    nome: "Sorte em Combate",
    custo: 2,
    categoria: "Combate",

    descricao:
      "Uma vez por combate, pode ignorar um ataque que teria acertado.",

    parametros: [],

    efeitos: [
      {
        tipo: "ignorar_ataque",
        quantidade: 1,
        periodo: "combate",
        condicoes: [
          {
            tipo: "ataque_acertaria",
            valor: true,
          },
        ],
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 29,
    id: "sentido-mistico",
    nome: "Sentido Místico",
    custo: 1,
    categoria: "Sobrevivência",

    descricao: "Percebe presenças mágicas e energias ocultas próximas.",

    parametros: [],

    efeitos: [
      {
        tipo: "percepcao_especial",
        contexto: ["presenca_magica", "energia_oculta"],
        alcance: "proximo",
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 30,
    id: "espirito-de-equipe",
    nome: "Espírito de Equipe",
    custo: 1,
    categoria: "Social",

    descricao:
      "Aliados próximos recebem +1 em rolagens quando trabalham junto com você.",

    parametros: [],

    efeitos: [
      {
        tipo: "bonus_aliados",
        valor: 1,
        contexto: ["trabalho_em_equipe"],
        alcance: "proximo",
        condicoes: [
          {
            tipo: "cooperacao",
            valor: true,
          },
        ],
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },
];
