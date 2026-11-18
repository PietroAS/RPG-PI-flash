export const disadvantages = [
  {
    numero: 1,
    id: "medroso",
    nome: "Medroso",
    custo: 1,
    categoria: "Sobrevivência",

    descricao:
      "Fica abalado facilmente diante de perigo ou ameaças. Testes de coragem sofrem -2.",

    parametros: [],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 2,
        },

        afetados: ["coragem"],

        contexto: ["teste_coragem"],

        condicoes: [
          {
            condicao: "perigo_ou_ameaca",
          },
        ],

        automatizavel: true,
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

    descricao:
      "Age antes de pensar. Deve rolar teste de autocontrole para evitar atitudes precipitadas.",

    parametros: [],

    efeitos: [
      {
        tipo: "Narrativo",
        alvo: "Self",

        valor: null,

        afetados: ["autocontrole"],

        contexto: [],

        condicoes: [
          {
            condicao: "atitude_precipitada",
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
    numero: 3,
    id: "miopia",
    nome: "Miopia",
    custo: 1,
    categoria: "Sobrevivência",

    descricao: "Sofre -2 em ataques ou testes à longa distância.",

    parametros: [],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 2,
        },

        afetados: ["ataques", "testes"],

        contexto: ["longa_distancia"],

        condicoes: [
          {
            condicao: "distancia",
            valor: "longa",
          },
        ],

        automatizavel: true,
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

    descricao: "Recebe -2 em testes relacionados à Força.",

    parametros: [],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 2,
        },

        afetados: ["forca"],

        contexto: ["teste_forca"],

        condicoes: [],

        automatizavel: true,
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
      "Sofre -1 em testes físicos prolongados e precisa de tratamento regular ou a penalidade aumenta. (máximo -4)",

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
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 1,
        },

        afetados: ["testes_fisicos"],

        contexto: ["teste_fisico_prolongado"],

        condicoes: [
          {
            condicao: "tratamento_nao_realizado",
            efeito: "aumentar_penalidade",
            incremento: 1,
            limite: 4,
            criterio: "mestre",
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
    numero: 6,
    id: "inseguro",
    nome: "Inseguro",
    custo: 1,
    categoria: "Social",

    descricao: "Sofre -2 em testes sociais que envolvam confiança (Carisma).",

    parametros: [],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 2,
        },

        afetados: ["carisma"],

        contexto: ["teste_social_confianca"],

        condicoes: [],

        automatizavel: true,
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
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 1,
        },

        afetados: ["movimento"],

        contexto: ["categoria_movimento"],

        condicoes: [],

        automatizavel: true,
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
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 2,
        },

        afetados: ["cooperacao"],

        contexto: ["teste_cooperacao"],

        condicoes: [],

        automatizavel: true,
      },

      {
        tipo: "Narrativo",
        alvo: "Self",

        valor: null,

        afetados: [],

        contexto: [],

        condicoes: [
          {
            condicao: "receber_ajuda",
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
    numero: 9,
    id: "vulneravel-a-magia",
    nome: "Vulnerável a Magia",
    custo: 2,
    categoria: "Magia",

    descricao: "Sofre +1 de dano ou penalidade em efeitos mágicos.",

    parametros: [],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "+",
          quantidade: 1,
        },

        afetados: ["dano_recebido"],

        contexto: ["dano_magico"],

        condicoes: [],

        automatizavel: true,
      },

      {
        tipo: "Narrativo",
        alvo: "Self",

        valor: null,

        afetados: ["efeitos_magicos"],

        contexto: [],

        condicoes: [],

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
        tipo: "Especial",
        alvo: "Self",

        valor: null,

        afetados: ["panico"],

        contexto: [],

        condicoes: [
          {
            condicao: "exposto_fobia",
            alvoParametro: "fobia",
          },
        ],

        automatizavel: false,
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
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 2,
        },

        afetados: ["destreza"],

        contexto: ["manusear_objetos"],

        condicoes: [],

        automatizavel: true,
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
        tipo: "Narrativo",
        alvo: "Self",

        valor: null,

        afetados: [],

        contexto: [],

        condicoes: [
          {
            condicao: "misterio_ou_situacao_desconhecida",
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
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 2,
        },

        afetados: ["interacao_social"],

        contexto: ["teste_social"],

        condicoes: [
          {
            condicao: "interacao_amistosa",
          },
        ],

        automatizavel: true,
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
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 2,
        },

        afetados: ["percepcao"],

        contexto: ["teste_percepcao"],

        condicoes: [],

        automatizavel: true,
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
        tipo: "Narrativo",
        alvo: "Self",

        valor: null,

        afetados: [],

        contexto: [],

        condicoes: [],

        automatizavel: false,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },
  {
    numero: 16,
    id: "cicatrizes-visiveis",
    nome: "Cicatrizes Visíveis",
    custo: 1,
    categoria: "Social",

    descricao:
      "Aparência intimidadora ou desagradável. -2 em Carisma com NPCs sensíveis.",

    parametros: [],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 2,
        },

        afetados: ["carisma"],

        contexto: ["teste_carisma"],

        condicoes: [
          {
            condicao: "alvo",
            valor: "npc_sensivel",
          },
        ],

        automatizavel: true,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 17,
    id: "fragil",
    nome: "Frágil",
    custo: 2,
    categoria: "Sobrevivência",

    descricao: "Pontos de Vida reduzidos em 1 por parte do corpo.",

    parametros: [],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 1,
        },

        afetados: ["pv_partes_corpo"],

        contexto: [],

        condicoes: [],

        automatizavel: true,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 18,
    id: "destino-amaldicoado",
    nome: "Destino Amaldiçoado",
    custo: 2,
    categoria: "Sobrevivência",

    descricao:
      "Uma vez por sessão, o Mestre pode forçar uma falha crítica em uma rolagem.",

    parametros: [],

    usos: {
      quantidade: 1,
      periodo: "sessao",
    },

    efeitos: [
      {
        tipo: "Especial",
        alvo: "Self",

        valor: null,

        afetados: ["resultado_rolagem"],

        contexto: ["falha_critica"],

        condicoes: [
          {
            condicao: "ativacao_mestre",
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
    numero: 19,
    id: "azarado",
    nome: "Azarado",
    custo: 2,
    categoria: "Sobrevivência",

    descricao:
      "Rola duas vezes e fica com o pior resultado, uma vez por sessão.",

    parametros: [],

    usos: {
      quantidade: 1,
      periodo: "sessao",
    },

    efeitos: [
      {
        tipo: "Especial",
        alvo: "Self",

        valor: null,

        afetados: ["rolagem"],

        contexto: ["pior_resultado"],

        condicoes: [],

        automatizavel: true,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 20,
    id: "debil-mental",
    nome: "Débil Mental",
    custo: 2,
    categoria: "Profissão",

    descricao: "Sofre -2 em testes de Inteligência e de memorização.",

    parametros: [],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 2,
        },

        afetados: ["inteligencia", "memorizacao"],

        contexto: ["teste_inteligencia", "teste_memorizacao"],

        condicoes: [],

        automatizavel: true,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },
  {
    numero: 21,
    id: "dependencia",
    nome: "Dependência",
    custo: 2,
    categoria: "Sobrevivência",

    descricao:
      "Precisa consumir ou usar algo regularmente (bebida, droga, item mágico), -1 em todos os testes se não saciar a dependência.",

    parametros: [
      {
        id: "dependencia",
        nome: "Dependência",
        tipo: "texto",
        obrigatorio: true,
      },
    ],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 1,
        },

        afetados: ["testes"],

        contexto: ["todos_testes"],

        condicoes: [
          {
            condicao: "dependencia_nao_saciada",
            alvoParametro: "dependencia",
          },
        ],

        automatizavel: true,
      },
    ],

    repeticoes: {
      permitido: true,
      maximo: null,
    },
  },

  {
    numero: 22,
    id: "ferida-antiga",
    nome: "Ferida Antiga",
    custo: 1,
    categoria: "Sobrevivência",

    descricao:
      "Sofre dor e penalidades (-1 em testes físicos) em clima frio ou úmido.",

    parametros: [],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 1,
        },

        afetados: ["testes_fisicos"],

        contexto: ["teste_fisico"],

        condicoes: [
          {
            condicao: "clima",
            valores: ["frio", "umido"],
          },
        ],

        automatizavel: true,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 23,
    id: "vaidoso",
    nome: "Vaidoso",
    custo: 1,
    categoria: "Social",

    descricao:
      "Perde foco em combate se for ridicularizado ou sujo (teste de autocontrole).",

    parametros: [],

    efeitos: [
      {
        tipo: "Especial",
        alvo: "Self",

        valor: null,

        afetados: ["autocontrole"],

        contexto: ["teste_autocontrole"],

        condicoes: [
          {
            condicao: "estado",
            valores: ["ridicularizado", "sujo"],
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
    numero: 24,
    id: "ingenuo",
    nome: "Ingênuo",
    custo: 1,
    categoria: "Social",

    descricao:
      "Sofre -2 em testes de engano, manipulação ou percepção de mentiras.",

    parametros: [],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 2,
        },

        afetados: ["engano", "manipulacao", "percepcao_mentiras"],

        contexto: [
          "teste_engano",
          "teste_manipulacao",
          "teste_percepcao_mentiras",
        ],

        condicoes: [],

        automatizavel: true,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 25,
    id: "sanguinario",
    nome: "Sanguinário",
    custo: 1,
    categoria: "Combate",

    descricao:
      "Dificuldade em parar de lutar. Teste de autocontrole ao ver sangue.",

    parametros: [],

    efeitos: [
      {
        tipo: "Especial",
        alvo: "Self",

        valor: null,

        afetados: ["autocontrole"],

        contexto: ["teste_autocontrole"],

        condicoes: [
          {
            condicao: "ver_sangue",
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
    numero: 26,
    id: "odiado",
    nome: "Odiado",
    custo: 1,
    categoria: "Social",

    descricao: "Um grupo social ou raça o detesta e pode atacá-lo ou evitá-lo.",

    parametros: [
      {
        id: "grupo",
        nome: "Grupo ou raça",
        tipo: "texto",
        obrigatorio: true,
      },
    ],

    efeitos: [
      {
        tipo: "Narrativo",
        alvo: "Self",

        valor: null,

        afetados: [],

        contexto: [],

        condicoes: [],

        automatizavel: false,
      },
    ],

    repeticoes: {
      permitido: true,
      maximo: null,
    },
  },

  {
    numero: 27,
    id: "gasto-excessivo",
    nome: "Gasto Excessivo",
    custo: 1,
    categoria: "Social",

    descricao:
      "Não consegue guardar dinheiro. Sempre que ganha algo, gasta metade.",

    parametros: [],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "*",
          quantidade: 0.5,
        },

        afetados: ["dinheiro_recebido"],

        contexto: ["recurso_recebido"],

        condicoes: [
          {
            condicao: "receber_dinheiro",
          },
        ],

        automatizavel: true,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 28,
    id: "corpo-marcado",
    nome: "Corpo Marcado",
    custo: 1,
    categoria: "Social",

    descricao:
      "Símbolo, tatuagem ou maldição visível que chama atenção indesejada.",

    parametros: [
      {
        id: "marca",
        nome: "Marca",
        tipo: "texto",
        obrigatorio: true,
      },
    ],

    efeitos: [
      {
        tipo: "Narrativo",
        alvo: "Self",

        valor: null,

        afetados: [],

        contexto: [],

        condicoes: [],

        automatizavel: false,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 29,
    id: "surdo-parcial",
    nome: "Surdo Parcial",
    custo: 1,
    categoria: "Sobrevivência",

    descricao:
      "Penalidade -2 em testes auditivos. Pode falhar em perceber perigo.",

    parametros: [],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 2,
        },

        afetados: ["percepcao_auditiva"],

        contexto: ["teste_auditivo"],

        condicoes: [],

        automatizavel: true,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 30,
    id: "toque-amaldicoado",
    nome: "Toque Amaldiçoado",
    custo: 2,
    categoria: "Magia",

    descricao:
      "O toque do personagem causa pequenos efeitos negativos (murchar plantas, falhar aparelhos, etc.).",

    parametros: [],

    efeitos: [
      {
        tipo: "Especial",
        alvo: "Qualquer",

        valor: null,

        afetados: [],

        contexto: [],

        condicoes: [
          {
            condicao: "contato_fisico",
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
  //-------------------------------
  //Desvantagens Maiores
  //-------------------------------

  {
    numero: 31,
    id: "cego",
    nome: "Cego",
    custo: 4,
    categoria: "Sobrevivência",

    descricao:
      "Não enxerga. Depende totalmente de outros sentidos ou magia para se orientar e agir. Ataques físicos sofrem -5 se não guiados por som ou toque.",

    parametros: [],

    efeitos: [
      {
        tipo: "Especial",
        alvo: "Self",

        valor: null,

        afetados: ["visao"],

        contexto: [],

        condicoes: [],

        automatizavel: true,
      },

      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 5,
        },

        afetados: ["ataques_fisicos"],

        contexto: ["ataque_fisico"],

        condicoes: [
          {
            condicao: "sem_orientacao",
            valores: ["som", "toque"],
          },
        ],

        automatizavel: true,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 32,
    id: "mudo",
    nome: "Mudo",
    custo: 3,
    categoria: "Social",

    descricao:
      "Incapaz de falar. Não pode usar magias verbais e sofre penalidade -3 em comunicação social.",

    parametros: [],

    efeitos: [
      {
        tipo: "Especial",
        alvo: "Self",

        valor: null,

        afetados: ["fala"],

        contexto: [],

        condicoes: [],

        automatizavel: true,
      },

      {
        tipo: "Especial",
        alvo: "Self",

        valor: null,

        afetados: ["magias_verbais"],

        contexto: [],

        condicoes: [],

        automatizavel: true,
      },

      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 3,
        },

        afetados: ["comunicacao_social"],

        contexto: ["teste_comunicacao_social"],

        condicoes: [],

        automatizavel: true,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 33,
    id: "paralisia-parcial",
    nome: "Paralisia Parcial",
    custo: 4,
    categoria: "Movimento",

    descricao:
      "Movimento severamente limitado; deslocamento reduzido pela metade e -2 em Agilidade.",

    parametros: [],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "*",
          quantidade: 0.5,
        },

        afetados: ["movimento"],

        contexto: ["deslocamento"],

        condicoes: [],

        automatizavel: true,
      },

      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 2,
        },

        afetados: ["agilidade"],

        contexto: ["teste_agilidade"],

        condicoes: [],

        automatizavel: true,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 34,
    id: "amnesia",
    nome: "Amnésia",
    custo: 3,
    categoria: "Profissão",

    descricao:
      "Perdeu todas as lembranças. Não sabe de onde veio, e pode esquecer habilidades complexas.",

    parametros: [],

    efeitos: [
      {
        tipo: "Narrativo",
        alvo: "Self",

        valor: null,

        afetados: ["memoria"],

        contexto: [],

        condicoes: [],

        automatizavel: false,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 35,
    id: "loucura",
    nome: "Loucura",
    custo: 4,
    categoria: "Sobrevivência",

    descricao:
      "Sofre crises mentais esporádicas (alucinações, vozes, delírios). O Mestre decide quando ocorre.",

    parametros: [],

    efeitos: [
      {
        tipo: "Narrativo",
        alvo: "Self",

        valor: null,

        afetados: [],

        contexto: [],

        condicoes: [
          {
            condicao: "ativacao_mestre",
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
    numero: 36,
    id: "dependente-de-magia",
    nome: "Dependente de Magia",
    custo: 3,
    categoria: "Magia",

    descricao:
      "Sem magia, o corpo enfraquece. Sofre -2 em todos os testes se ficar mais de um dia sem conjurar.",

    parametros: [],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 2,
        },

        afetados: ["testes"],

        contexto: ["todos_testes"],

        condicoes: [
          {
            condicao: "tempo_sem_conjurar",
            valor: 1,
            unidade: "dia",
            comparacao: "maior_que",
          },
        ],

        automatizavel: true,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 37,
    id: "corpo-enfraquecido",
    nome: "Corpo Enfraquecido",
    custo: 4,
    categoria: "Sobrevivência",

    descricao: "Resistência física péssima. Pontos de Vida reduzidos à metade.",

    parametros: [],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "*",
          quantidade: 0.5,
        },

        afetados: ["pv_partes_corpo"],

        contexto: [],

        condicoes: [],

        automatizavel: true,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 38,
    id: "vampirico",
    nome: "Vampírico",
    custo: 4,
    categoria: "Sobrevivência",

    descricao:
      "Precisa consumir sangue para sobreviver. Se não o fizer em 24h, perde 1 PV por hora.",

    parametros: [],

    efeitos: [
      {
        tipo: "Especial",
        alvo: "Self",

        valor: null,

        afetados: ["necessidade_sangue"],

        contexto: [],

        condicoes: [
          {
            condicao: "periodo_sem_consumir_sangue",
            valor: 24,
            unidade: "hora",
          },
        ],

        automatizavel: true,
      },

      {
        tipo: "Dano",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 1,
        },

        afetados: ["pv"],

        contexto: ["por_hora"],

        condicoes: [
          {
            condicao: "necessidade_sangue_nao_saciada",
            valor: 24,
            unidade: "hora",
          },
        ],

        automatizavel: true,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 39,
    id: "espirito-perturbado",
    nome: "Espírito Perturbado",
    custo: 3,
    categoria: "Sobrevivência",

    descricao:
      "Sofre visões e sussurros espirituais. -2 em concentração e testes mentais prolongados.",

    parametros: [],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 2,
        },

        afetados: ["concentracao", "testes_mentais"],

        contexto: ["teste_concentracao", "teste_mental_prolongado"],

        condicoes: [],

        automatizavel: true,
      },

      {
        tipo: "Narrativo",
        alvo: "Self",

        valor: null,

        afetados: [],

        contexto: [],

        condicoes: [],

        automatizavel: false,
      },
    ],
    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 40,
    id: "amaldicoado",
    nome: "Amaldiçoado",
    custo: 4,
    categoria: "Magia",

    descricao:
      "Está sob uma maldição poderosa. O Mestre escolhe um efeito negativo permanente.",

    parametros: [
      {
        id: "maldicao",
        nome: "Efeito da maldição",
        tipo: "texto",
        obrigatorio: true,
      },
    ],

    efeitos: [
      {
        tipo: "Narrativo",
        alvo: "Self",

        valor: null,

        afetados: [],

        contexto: [],

        condicoes: [
          {
            condicao: "permanente",
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
    numero: 41,
    id: "alvo-dos-mortos",
    nome: "Alvo dos Mortos",
    custo: 3,
    categoria: "Magia",

    descricao:
      "Espíritos e mortos-vivos são atraídos por você. Eles o reconhecem instantaneamente.",

    parametros: [],

    efeitos: [
      {
        tipo: "Narrativo",
        alvo: "Self",

        valor: null,

        afetados: [],

        contexto: [],

        condicoes: [],

        automatizavel: false,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 42,
    id: "pacto-quebrado",
    nome: "Pacto Quebrado",
    custo: 3,
    categoria: "Magia",

    descricao:
      "Quebrou um juramento mágico. Sofre azar constante e penalidades em magias de sua antiga escola.",

    parametros: [
      {
        id: "escolaMagia",
        nome: "Antiga escola de magia",
        tipo: "texto",
        obrigatorio: true,
      },
    ],

    efeitos: [
      {
        tipo: "Narrativo",
        alvo: "Self",

        valor: null,

        afetados: ["magias"],

        contexto: [],

        condicoes: [],

        automatizavel: false,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 43,
    id: "sem-emocoes",
    nome: "Sem Emoções",
    custo: 3,
    categoria: "Social",

    descricao: "Não sente empatia. Recebe -4 em testes sociais e de liderança.",

    parametros: [],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 4,
        },

        afetados: ["testes_sociais", "lideranca"],

        contexto: ["teste_social", "teste_lideranca"],

        condicoes: [],

        automatizavel: true,
      },

      {
        tipo: "Narrativo",
        alvo: "Self",

        valor: null,

        afetados: ["empatia"],

        contexto: [],

        condicoes: [],

        automatizavel: false,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 44,
    id: "aura-sombria",
    nome: "Aura Sombria",
    custo: 3,
    categoria: "Social",

    descricao:
      "Sua presença causa medo em inocentes. -2 em Carisma e não pode passar despercebido.",

    parametros: [],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 2,
        },

        afetados: ["carisma"],

        contexto: ["teste_carisma"],

        condicoes: [],

        automatizavel: true,
      },

      {
        tipo: "Narrativo",
        alvo: "Self",

        valor: null,

        afetados: [],

        contexto: [],

        condicoes: [
          {
            condicao: "presenca_percebida",
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
    numero: 45,
    id: "vulneravel-a-ferro",
    nome: "Vulnerável a Ferro",
    custo: 3,
    categoria: "Combate",

    descricao: "Armas de ferro ignoram metade de sua defesa.",

    parametros: [],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "*",
          quantidade: 0.5,
        },

        afetados: ["defesa"],

        contexto: ["defesa_contra_arma"],

        condicoes: [
          {
            condicao: "material_arma",
            valor: "ferro",
          },
        ],

        automatizavel: true,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },
  {
    numero: 46,
    id: "viciado-grave",
    nome: "Viciado Grave",
    custo: 4,
    categoria: "Sobrevivência",

    descricao:
      "Depende de uma substância poderosa/rara. Ficar sem ela causa -4 em todos os testes e dano constante.",

    parametros: [
      {
        id: "substancia",
        nome: "Substância",
        tipo: "texto",
        obrigatorio: true,
      },
    ],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 4,
        },

        afetados: ["testes"],

        contexto: ["todos_testes"],

        condicoes: [
          {
            condicao: "dependencia_nao_saciada",
            alvoParametro: "substancia",
          },
        ],

        automatizavel: true,
      },

      {
        tipo: "Dano",
        alvo: "Self",

        valor: null,

        afetados: ["pv"],

        contexto: [],

        condicoes: [
          {
            condicao: "dependencia_nao_saciada",
            alvoParametro: "substancia",
          },
        ],

        automatizavel: false,
      },
    ],

    repeticoes: {
      permitido: true,
      maximo: null,
    },
  },

  {
    numero: 47,
    id: "insonia-cronica",
    nome: "Insônia Crônica",
    custo: 3,
    categoria: "Sobrevivência",

    descricao:
      "Nunca descansa bem. Começa o dia com -2 em todos os testes até realizar descanso mágico.",

    parametros: [],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 2,
        },

        afetados: ["testes"],

        contexto: ["todos_testes"],

        condicoes: [
          {
            condicao: "inicio_dia",
          },
          {
            condicao: "sem_descanso_magico",
          },
        ],

        automatizavel: true,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 48,
    id: "corpo-fragil",
    nome: "Corpo Frágil",
    custo: 3,
    categoria: "Sobrevivência",

    descricao: "Dobra o dano recebido de quedas, venenos e doenças.",

    parametros: [],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "*",
          quantidade: 2,
        },

        afetados: ["dano_recebido"],

        contexto: ["queda", "veneno", "doenca"],

        condicoes: [],

        automatizavel: true,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 49,
    id: "alma-dividida",
    nome: "Alma Dividida",
    custo: 4,
    categoria: "Magia",

    descricao:
      "Metade da alma está em outro plano. Pode ser controlado por forças externas em momentos críticos.",

    parametros: [],

    efeitos: [
      {
        tipo: "Narrativo",
        alvo: "Self",

        valor: null,

        afetados: ["controle_personagem"],

        contexto: [],

        condicoes: [
          {
            condicao: "momento_critico",
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
    numero: 50,
    id: "rosto-desfigurado",
    nome: "Rosto Desfigurado",
    custo: 3,
    categoria: "Social",

    descricao:
      "Aparência terrível. Sofre -4 em interações sociais com estranhos.",

    parametros: [],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 4,
        },

        afetados: ["interacao_social"],

        contexto: ["teste_social"],

        condicoes: [
          {
            condicao: "alvo",
            valor: "estranho",
          },
        ],

        automatizavel: true,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },
  {
    numero: 51,
    id: "marca-dos-deuses",
    nome: "Marca dos Deuses",
    custo: 4,
    categoria: "Magia",

    descricao:
      "Um deus o marcou como traidor. Sofre desvantagens em todos os testes religiosos e mágicos.",

    parametros: [],

    efeitos: [
      {
        tipo: "Especial",
        alvo: "Self",

        valor: null,

        afetados: ["testes_religiosos", "testes_magicos"],

        contexto: ["rolagem_com_desvantagem"],

        condicoes: [],

        automatizavel: true,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 52,
    id: "odiado-universalmente",
    nome: "Odiado Universalmente",
    custo: 4,
    categoria: "Social",

    descricao:
      "Um evento o tornou odiado por quase todos. Inimigos o reconhecem à distância.",

    parametros: [],

    efeitos: [
      {
        tipo: "Narrativo",
        alvo: "Self",

        valor: null,

        afetados: [],

        contexto: [],

        condicoes: [],

        automatizavel: false,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 53,
    id: "doenca-terminal",
    nome: "Doença Terminal",
    custo: 4,
    categoria: "Sobrevivência",

    descricao:
      "Está morrendo. O Mestre define quanto tempo resta. Sofre -2 em todos os testes físicos.",

    parametros: [
      {
        id: "tempoRestante",
        nome: "Tempo restante",
        tipo: "texto",
        obrigatorio: true,
      },
    ],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "-",
          quantidade: 2,
        },

        afetados: ["testes_fisicos"],

        contexto: ["teste_fisico"],

        condicoes: [],

        automatizavel: true,
      },

      {
        tipo: "Narrativo",
        alvo: "Self",

        valor: null,

        afetados: [],

        contexto: [],

        condicoes: [
          {
            condicao: "tempo_restante_definido_mestre",
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
    numero: 54,
    id: "espirito-preso",
    nome: "Espírito Preso",
    custo: 3,
    categoria: "Magia",

    descricao: "Parte da alma está selada. Recebe 50% a mais de dano mágico.",

    parametros: [],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "*",
          quantidade: 1.5,
        },

        afetados: ["dano_recebido"],

        contexto: ["dano_magico"],

        condicoes: [],

        automatizavel: true,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 55,
    id: "corpo-de-cristal",
    nome: "Corpo de Cristal",
    custo: 4,
    categoria: "Combate",

    descricao: "Pele translúcida e quebradiça. Recebe +50% de dano físico.",

    parametros: [],

    efeitos: [
      {
        tipo: "Debuff",
        alvo: "Self",

        valor: {
          operador: "*",
          quantidade: 1.5,
        },

        afetados: ["dano_recebido"],

        contexto: ["dano_fisico"],

        condicoes: [],

        automatizavel: true,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },
  {
    numero: 56,
    id: "sombra-viva",
    nome: "Sombra Viva",
    custo: 3,
    categoria: "Magia",

    descricao: "Sua sombra tem vontade própria e às vezes age contra você.",

    parametros: [],

    efeitos: [
      {
        tipo: "Narrativo",
        alvo: "Self",

        valor: null,

        afetados: [],

        contexto: [],

        condicoes: [],

        automatizavel: false,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 57,
    id: "dupla-personalidade",
    nome: "Dupla Personalidade",
    custo: 3,
    categoria: "Sobrevivência",

    descricao:
      "Outra mente habita o corpo. Pode assumir o controle em momentos de estresse.",

    parametros: [],

    efeitos: [
      {
        tipo: "Narrativo",
        alvo: "Self",

        valor: null,

        afetados: ["controle_personagem"],

        contexto: [],

        condicoes: [
          {
            condicao: "estresse",
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
    numero: 58,
    id: "corrupcao-interna",
    nome: "Corrupção Interna",
    custo: 4,
    categoria: "Magia",

    descricao:
      "Uma energia maligna cresce dentro de você. O Mestre decide efeitos crescentes e mutações.",

    parametros: [],

    efeitos: [
      {
        tipo: "Narrativo",
        alvo: "Self",

        valor: null,

        afetados: [],

        contexto: [],

        condicoes: [
          {
            condicao: "ativacao_mestre",
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
    numero: 59,
    id: "sem-sorte",
    nome: "Sem Sorte",
    custo: 3,
    categoria: "Sobrevivência",

    descricao:
      "Não pode rolar críticos positivos. Crítico é tratado como sucesso normal.",

    parametros: [],

    efeitos: [
      {
        tipo: "Especial",
        alvo: "Self",

        valor: null,

        afetados: ["resultado_rolagem"],

        contexto: ["sucesso_critico_para_sucesso"],

        condicoes: [],

        automatizavel: true,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 60,
    id: "conexao-infernal",
    nome: "Conexão Infernal",
    custo: 4,
    categoria: "Magia",

    descricao:
      "Um demônio o observa. Pode oferecer poder, mas interfere nas decisões e atrai inimigos.",

    parametros: [],

    efeitos: [
      {
        tipo: "Narrativo",
        alvo: "Self",

        valor: null,

        afetados: [],

        contexto: [],

        condicoes: [],

        automatizavel: false,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },
];
