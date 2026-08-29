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
      "Recebe penalidade em testes de percepção visual e mira a longa distância.",

    parametros: [],

    efeitos: [
      {
        tipo: "penalidade_teste",
        contexto: ["percepcao_visual", "mira"],
        condicoes: [
          {
            tipo: "distancia",
            valor: "longa",
          },
        ],
        automatizavel: false,
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
];
