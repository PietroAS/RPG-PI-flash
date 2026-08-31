export const disadvantages = [
  {
    numero: 1,
    id: "medroso",
    nome: "Medroso",
    custo: 1,
    categoria: "Sobrevivência",

    descricao: "Recebe -2 em testes contra medo e intimidação.",

    parametros: [],

    efeitos: [
      {
        tipo: "penalidade_teste",
        valor: -2,
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
    id: "impulsivo",
    nome: "Impulsivo",
    custo: 1,
    categoria: "Social",

    descricao: "Tem dificuldade em resistir a agir antes de pensar.",

    parametros: [],

    efeitos: [
      {
        tipo: "comportamento_compulsivo",
        contexto: ["agir_sem_pensar"],
        automatizavel: false,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 3,
    id: "miopia",
    nome: "Miopia",
    custo: 1,
    categoria: "Sobrevivência",

    descricao:
      "Recebe -2 em testes de percepção visual e mira a longa distância.",

    parametros: [],

    efeitos: [
      {
        tipo: "penalidade_teste",
        valor: -2,
        contexto: ["percepcao_visual", "mira"],
        condicoes: [
          {
            tipo: "distancia",
            valor: "longa",
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
    id: "fraco",
    nome: "Fraco",
    custo: 1,
    categoria: "Combate",

    descricao: "Recebe -1 em testes relacionados à Força.",

    parametros: [],

    efeitos: [
      {
        tipo: "penalidade_teste",
        atributo: "forca",
        valor: -1,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 5,
    id: "doenca-cronica",
    nome: "Doença Crônica",
    custo: 2,
    categoria: "Sobrevivência",

    descricao:
      "Possui uma doença crônica que pode causar limitações ou crises conforme definido com o Mestre.",

    parametros: [
      {
        id: "doenca",
        nome: "Doença",
        tipo: "texto",
        obrigatorio: true,
      },
    ],

    efeitos: [
      {
        tipo: "condicao_persistente",
        alvoParametro: "doenca",
        automatizavel: false,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },
  {
    numero: 6,
    id: "inseguro",
    nome: "Inseguro",
    custo: 1,
    categoria: "Social",

    descricao: "Sofre -2 em testes sociais que envolvam confiança (Carisma).",

    parametros: [],

    efeitos: [
      {
        tipo: "penalidade_teste",
        atributo: "carisma",
        valor: -2,
        contexto: ["confianca", "teste_social"],
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 7,
    id: "lento",
    nome: "Lento",
    custo: 1,
    categoria: "Movimento",

    descricao: "Movimento reduzido em 1 categoria (ex: Zona curta → Toque).",

    parametros: [],

    efeitos: [
      {
        tipo: "reducao_categoria_movimento",
        valor: 1,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 8,
    id: "orgulhoso",
    nome: "Orgulhoso",
    custo: 1,
    categoria: "Social",

    descricao: "Não aceita ajuda facilmente; sofre -2 em testes de cooperação.",

    parametros: [],

    efeitos: [
      {
        tipo: "penalidade_teste",
        valor: -2,
        contexto: ["cooperacao"],
      },
      {
        tipo: "comportamento_compulsivo",
        contexto: ["recusar_ajuda"],
        automatizavel: false,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 9,
    id: "vulneravel-a-magia",
    nome: "Vulnerável a Magia",
    custo: 2,
    categoria: "Magia",

    descricao: "Sofre +1 de dano ou penalidade em efeitos mágicos.",

    parametros: [],

    efeitos: [
      {
        tipo: "aumento_dano_recebido",
        valor: 1,
        dano: "magico",
      },
      {
        tipo: "vulnerabilidade_efeito",
        origem: "magia",
        automatizavel: false,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 10,
    id: "fobia",
    nome: "Fobia",
    custo: 1,
    categoria: "Sobrevivência",

    descricao:
      "Entra em pânico diante do objeto da fobia (ex: aranhas, altura, fogo).",

    parametros: [
      {
        id: "fobia",
        nome: "Objeto da fobia",
        tipo: "texto",
        obrigatorio: true,
      },
    ],

    efeitos: [
      {
        tipo: "condicao",
        condicao: "panico",
        condicoes: [
          {
            tipo: "exposto_fobia",
            alvoParametro: "fobia",
          },
        ],
      },
    ],

    repeticoes: {
      permitido: true,
      maximo: null,
    },
  },
  {
    numero: 11,
    id: "mao-de-alface",
    nome: "Mão de Alface",
    custo: 1,
    categoria: "Combate",

    descricao:
      "Dificuldade em manusear armas ou objetos frágeis. -2 em testes de Destreza.",

    parametros: [],

    efeitos: [
      {
        tipo: "penalidade_teste",
        atributo: "destreza",
        valor: -2,
      },
      {
        tipo: "dificuldade_manuseio",
        contexto: ["arma", "objeto_fragil"],
        automatizavel: false,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 12,
    id: "curioso",
    nome: "Curioso",
    custo: 1,
    categoria: "Sobrevivência",

    descricao:
      "Precisa investigar mistérios, mesmo quando é perigoso. Pode cair em armadilhas por isso.",

    parametros: [],

    efeitos: [
      {
        tipo: "comportamento_compulsivo",
        contexto: ["investigar_misterio"],
        automatizavel: false,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 13,
    id: "desconfiado",
    nome: "Desconfiado",
    custo: 1,
    categoria: "Social",

    descricao:
      "Não confia facilmente. Sofre -2 em interações sociais amistosas.",

    parametros: [],

    efeitos: [
      {
        tipo: "penalidade_teste",
        valor: -2,
        contexto: ["interacao_social_amigavel"],
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 14,
    id: "distraido",
    nome: "Distraído",
    custo: 1,
    categoria: "Sobrevivência",

    descricao: "Sofre -2 em testes de Percepção.",

    parametros: [],

    efeitos: [
      {
        tipo: "penalidade_teste",
        atributo: "percepcao",
        valor: -2,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 15,
    id: "ma-fama",
    nome: "Má Fama",
    custo: 1,
    categoria: "Social",

    descricao: "Pessoas tendem a desconfiar ou evitar o personagem.",

    parametros: [],

    efeitos: [
      {
        tipo: "influencia_social",
        contexto: ["desconfianca", "evitar_personagem"],
        automatizavel: false,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },
];
