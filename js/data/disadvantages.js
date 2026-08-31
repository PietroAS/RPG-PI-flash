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
        tipo: "penalidade_teste",
        atributo: "carisma",
        valor: -2,
        condicoes: [
          {
            tipo: "alvo",
            valor: "npc_sensivel",
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
    numero: 17,
    id: "fragil",
    nome: "Frágil",
    custo: 2,
    categoria: "Sobrevivência",

    descricao: "Pontos de Vida reduzidos em 1 por parte do corpo.",

    parametros: [],

    efeitos: [
      {
        tipo: "modificador_pv",
        valor: -1,
        alvo: "todas_partes_corpo",
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
        tipo: "alterar_resultado",
        resultadoFinal: "falha_critica",
        origemAtivacao: "mestre",
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
        tipo: "rolagem_com_desvantagem",
        quantidadeRolagens: 2,
        criterio: "pior_resultado",
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
        tipo: "penalidade_teste",
        atributo: "inteligencia",
        valor: -2,
      },
      {
        tipo: "penalidade_teste",
        valor: -2,
        contexto: ["memorizacao"],
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
        tipo: "penalidade_teste",
        valor: -1,
        alvo: "todos",
        condicoes: [
          {
            tipo: "dependencia_nao_saciada",
            alvoParametro: "dependencia",
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
        tipo: "penalidade_teste",
        valor: -1,
        contexto: ["teste_fisico"],
        condicoes: [
          {
            tipo: "clima",
            valores: ["frio", "umido"],
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
        tipo: "forcar_teste",
        contexto: ["autocontrole"],
        condicoes: [
          {
            tipo: "estado",
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
        tipo: "penalidade_teste",
        valor: -2,
        contexto: ["engano", "manipulacao", "percepcao_mentiras"],
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
        tipo: "forcar_teste",
        contexto: ["autocontrole"],
        condicoes: [
          {
            tipo: "ver_sangue",
            valor: true,
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
        tipo: "hostilidade_social",
        alvoParametro: "grupo",
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
        tipo: "perda_recurso",
        recurso: "dinheiro",
        proporcao: 0.5,
        condicoes: [
          {
            tipo: "receber_recurso",
            recurso: "dinheiro",
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
        tipo: "atencao_indesejada",
        alvoParametro: "marca",
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
        tipo: "penalidade_teste",
        valor: -2,
        contexto: ["percepcao_auditiva"],
      },
      {
        tipo: "dificuldade_percepcao",
        contexto: ["perigo"],
        automatizavel: false,
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
        tipo: "efeito_negativo_toque",
        contexto: ["murchar_plantas", "falhar_aparelhos"],
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
        tipo: "hostilidade_social",
        alvoParametro: "grupo",
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
        tipo: "perda_recurso",
        recurso: "dinheiro",
        proporcao: 0.5,
        condicoes: [
          {
            tipo: "receber_recurso",
            recurso: "dinheiro",
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
        tipo: "atencao_indesejada",
        alvoParametro: "marca",
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
        tipo: "penalidade_teste",
        valor: -2,
        contexto: ["percepcao_auditiva"],
      },
      {
        tipo: "dificuldade_percepcao",
        contexto: ["perigo"],
        automatizavel: false,
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
        tipo: "efeito_negativo_toque",
        contexto: ["murchar_plantas", "falhar_aparelhos"],
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
        tipo: "incapacidade_sensorial",
        sentido: "visao",
        grau: "total",
      },
      {
        tipo: "penalidade_ataque",
        valor: -5,
        contexto: ["ataque_fisico"],
        condicoes: [
          {
            tipo: "sem_orientacao",
            valores: ["som", "toque"],
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
        tipo: "incapacidade",
        contexto: ["fala"],
      },
      {
        tipo: "restricao_magia",
        requisito: "verbal",
      },
      {
        tipo: "penalidade_teste",
        valor: -3,
        contexto: ["comunicacao_social"],
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
        tipo: "multiplicador_movimento",
        valor: 0.5,
      },
      {
        tipo: "penalidade_teste",
        atributo: "agilidade",
        valor: -2,
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
        tipo: "perda_memoria",
        grau: "total",
        automatizavel: false,
      },
      {
        tipo: "risco_esquecer_habilidade",
        contexto: ["habilidade_complexa"],
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
        tipo: "crise_mental",
        contexto: ["alucinacoes", "vozes", "delirios"],
        origemAtivacao: "mestre",
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
        tipo: "penalidade_teste",
        valor: -2,
        alvo: "todos",
        condicoes: [
          {
            tipo: "tempo_sem_conjurar",
            valor: 1,
            unidade: "dia",
            comparacao: "maior_que",
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
    numero: 37,
    id: "corpo-enfraquecido",
    nome: "Corpo Enfraquecido",
    custo: 4,
    categoria: "Sobrevivência",

    descricao: "Resistência física péssima. Pontos de Vida reduzidos à metade.",

    parametros: [],

    efeitos: [
      {
        tipo: "multiplicador_pv",
        valor: 0.5,
        alvo: "todas_partes_corpo",
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
        tipo: "necessidade_periodica",
        recurso: "sangue",
        periodo: 24,
        unidade: "hora",
      },
      {
        tipo: "perda_pv",
        valor: 1,
        periodo: "hora",
        condicoes: [
          {
            tipo: "necessidade_nao_saciada",
            recurso: "sangue",
            tempo: 24,
            unidade: "hora",
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
        tipo: "penalidade_teste",
        valor: -2,
        contexto: ["concentracao", "teste_mental_prolongado"],
      },
      {
        tipo: "efeito_narrativo",
        contexto: ["visoes", "sussurros_espirituais"],
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
        tipo: "habilidade_especial",
        alvoParametro: "maldicao",
        permanente: true,
        origemAtivacao: "mestre",
        automatizavel: false,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },
];
