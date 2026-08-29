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
    usos: {
      quantidade: 1,
      periodo: "sessao",
    },

    efeitos: [
      {
        tipo: "rerrolagem",
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
      maximo: 4,
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

    usos: {
      quantidade: 1,
      periodo: "combate",
    },

    efeitos: [
      {
        tipo: "ignorar_ataque",
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

  //--------------------------------
  //--------------------------------
  //VANTAGENS MAIORES
  //--------------------------------
  //--------------------------------

  {
    numero: 31,
    id: "regeneracao",
    nome: "Regeneração",
    custo: 4,
    categoria: "Sobrevivência",

    descricao:
      "Recupera 1 PV por turno fora de combate, ou 2 PV com descanso. Imune a sangramento.",

    parametros: [],

    efeitos: [
      {
        tipo: "recuperacao_pv",
        valor: 1,
        periodo: "turno",
        condicoes: [
          {
            tipo: "fora_de_combate",
            valor: true,
          },
        ],
      },
      {
        tipo: "recuperacao_pv",
        valor: 2,
        periodo: "turno",
        condicoes: [
          {
            tipo: "descansando",
            valor: true,
          },
        ],
      },
      {
        tipo: "imunidade",
        alvo: "efeito",
        contexto: ["sangramento"],
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 32,
    id: "mestre-das-armas",
    nome: "Mestre das Armas",
    custo: 3,
    categoria: "Combate",

    descricao:
      "Escolha uma categoria de armas (leve, média ou pesada). +1 em ataque e dano com ela.",

    parametros: [
      {
        id: "categoriaArma",
        nome: "Categoria de arma",
        tipo: "selecao",
        obrigatorio: true,
        opcoes: ["leve", "media", "pesada"],
      },
    ],

    efeitos: [
      {
        tipo: "bonus_ataque",
        valor: 1,
        alvoParametro: "categoriaArma",
      },
      {
        tipo: "bonus_dano",
        valor: 1,
        alvoParametro: "categoriaArma",
      },
    ],

    repeticoes: {
      permitido: true,
      maximo: 3,
    },
  },

  {
    numero: 33,
    id: "instinto-de-combate",
    nome: "Instinto de Combate",
    custo: 3,
    categoria: "Combate",

    descricao:
      "Sempre age no primeiro turno do combate, independentemente da iniciativa.",

    parametros: [],

    efeitos: [
      {
        tipo: "prioridade_iniciativa",
        prioridade: "primeiro",
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
    id: "reflexo-sobrenatural",
    nome: "Reflexo Sobrenatural",
    custo: 3,
    categoria: "Combate",

    descricao: "Pode esquivar de ataques mágicos e físicos mesmo surpreendido.",

    parametros: [],

    efeitos: [
      {
        tipo: "permitir_acao",
        acao: "esquiva",
        contexto: ["ataque_fisico", "ataque_magico"],
        condicoes: [
          {
            tipo: "surpreendido",
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
    numero: 35,
    id: "furia-controlada",
    nome: "Fúria Controlada",
    custo: 3,
    categoria: "Combate",

    descricao:
      "Pode entrar em estado de fúria (Força +2, Defesa -2) por 3 turnos. Uma vez por combate.",

    parametros: [],

    usos: {
      quantidade: 1,
      periodo: "combate",
    },

    efeitos: [
      {
        tipo: "bonus_teste",
        atributo: "forca",
        valor: 2,
        duracao: 3,
        unidade: "turno",
      },
      {
        tipo: "modificador_defesa",
        valor: -2,
        duracao: 3,
        unidade: "turno",
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },
  {
    numero: 36,
    id: "aura-curativa",
    nome: "Aura Curativa",
    custo: 4,
    categoria: "Magia",

    descricao: "Cura aliados próximos em 1 PV por turno enquanto concentrado.",

    parametros: [],

    efeitos: [
      {
        tipo: "recuperacao_pv_aliados",
        valor: 1,
        periodo: "turno",
        alcance: "proximo",
        condicoes: [
          {
            tipo: "concentrando",
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
    numero: 37,
    id: "pele-de-aco",
    nome: "Pele de Aço",
    custo: 5,
    categoria: "Combate",

    descricao: "Reduz todo dano recebido em 2 pontos.",

    parametros: [],

    efeitos: [
      {
        tipo: "reducao_dano",
        valor: 2,
        dano: "todos",
        excecoes: [],
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 38,
    id: "resistencia-elemental",
    nome: "Resistência Elemental",
    custo: 3,
    categoria: "Sobrevivência",

    descricao: "Escolha um elemento. Recebe metade do dano desse tipo.",

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
        tipo: "multiplicador_dano_recebido",
        valor: 0.5,
        alvoParametro: "elemento",
      },
    ],

    repeticoes: {
      permitido: true,
      maximo: 4,
    },
  },

  {
    numero: 39,
    id: "sorte-extraordinaria",
    nome: "Sorte Extraordinária",
    custo: 3,
    categoria: "Sobrevivência",

    descricao:
      "Uma vez por sessão, pode transformar uma falha ou falha crítica em sucesso crítico.",

    parametros: [],

    usos: {
      quantidade: 1,
      periodo: "sessao",
    },

    efeitos: [
      {
        tipo: "alterar_resultado",
        resultadoFinal: "sucesso_critico",
        condicoes: [
          {
            tipo: "resultado",
            valores: ["falha", "falha_critica"],
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
    numero: 40,
    id: "espirito-indomavel",
    nome: "Espírito Indomável",
    custo: 4,
    categoria: "Sobrevivência",

    descricao:
      "Não pode ser dominado mentalmente ou possuído. Imune a controle mental.",

    parametros: [],

    efeitos: [
      {
        tipo: "imunidade",
        alvo: "efeito",
        contexto: ["controle_mental", "possessao"],
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },
  {
    numero: 41,
    id: "percepcao-total",
    nome: "Percepção Total",
    custo: 3,
    categoria: "Sobrevivência",

    descricao:
      "Pode perceber presenças invisíveis e ocultas ao redor (curta distância).",

    parametros: [],

    efeitos: [
      {
        tipo: "percepcao_especial",
        contexto: ["invisivel", "oculto"],
        alcance: "curta_distancia",
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 42,
    id: "canalizador",
    nome: "Canalizador",
    custo: 3,
    categoria: "Magia",

    descricao: "Reduz o custo de mana/energia de magias em 1 (mínimo 1).",

    parametros: [],

    efeitos: [
      {
        tipo: "reducao_custo",
        recurso: "mana",
        contexto: ["magia"],
        valor: 1,
        custoMinimo: 1,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 43,
    id: "magia-rapida",
    nome: "Magia Rápida",
    custo: 4,
    categoria: "Magia",

    descricao:
      "Pode lançar uma magia simples como ação bônus, além da principal.",

    parametros: [],

    efeitos: [
      {
        tipo: "acao_extra",
        acao: "magia_simples",
        quantidade: 1,
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
    id: "defletir",
    nome: "Defletir",
    custo: 5,
    categoria: "Combate",

    descricao:
      "Pode redirecionar um ataque que receberia para outro alvo, uma vez por turno.",

    parametros: [],

    usos: {
      quantidade: 1,
      periodo: "turno",
    },

    efeitos: [
      {
        tipo: "redirecionar_ataque",
        alvoOriginal: "usuario",
        novoAlvo: "outro",
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 45,
    id: "arma-viva",
    nome: "Arma Viva",
    custo: 3,
    categoria: "Combate",

    descricao:
      "Sua arma tem vínculo mágico e nunca pode ser perdida; retorna ao dono em 1 turno.",

    parametros: [
      {
        id: "arma",
        nome: "Arma vinculada",
        tipo: "texto",
        obrigatorio: true,
      },
    ],

    efeitos: [
      {
        tipo: "vinculo_item",
        alvoParametro: "arma",
        retornoAutomatico: true,
        tempoRetorno: 1,
        unidade: "turno",
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },
  {
    numero: 46,
    id: "passos-silenciosos",
    nome: "Passos Silenciosos",
    custo: 3,
    categoria: "Movimento",

    descricao:
      "Move-se sem emitir som algum; quase impossível de detectar por audição.",

    parametros: [],

    efeitos: [
      {
        tipo: "movimento_silencioso",
        deteccao: "audicao",
        dificuldade: "quase_impossivel",
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 47,
    id: "aura-inspiradora",
    nome: "Aura Inspiradora",
    custo: 3,
    categoria: "Social",

    descricao: "Aliados próximos recebem +2 em testes de ataque e coragem.",

    parametros: [],

    efeitos: [
      {
        tipo: "bonus_aliados",
        valor: 2,
        contexto: ["ataque", "coragem"],
        alcance: "proximo",
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 48,
    id: "sangue-ancestral",
    nome: "Sangue Ancestral",
    custo: 4,
    categoria: "Magia",

    descricao:
      "Possui poder herdado. Escolha um efeito menor mágico permanente, como chamas nas mãos ou voz ecoante.",

    parametros: [
      {
        id: "efeitoAncestral",
        nome: "Efeito ancestral",
        tipo: "texto",
        obrigatorio: true,
      },
    ],

    efeitos: [
      {
        tipo: "habilidade_especial",
        alvoParametro: "efeitoAncestral",
        permanente: true,
        automatizavel: false,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 49,
    id: "golpe-especial",
    nome: "Golpe Especial",
    custo: null,
    categoria: "Combate",

    descricao:
      "Conhece um golpe especial. O custo depende dos modificadores escolhidos conforme as regras de Ataques Especiais.",

    parametros: [
      {
        id: "golpe",
        nome: "Golpe especial",
        tipo: "texto",
        obrigatorio: true,
      },
    ],

    efeitos: [
      {
        tipo: "habilidade_especial",
        alvoParametro: "golpe",
        automatizavel: false,
      },
    ],

    repeticoes: {
      permitido: true,
      maximo: null,
    },
  },

  {
    numero: 50,
    id: "barreira-magica",
    nome: "Barreira Mágica",
    custo: 4,
    categoria: "Magia",

    descricao:
      "Ganha uma proteção invisível que absorve 5 de dano mágico por combate.",

    parametros: [],

    efeitos: [
      {
        tipo: "barreira",
        dano: "magico",
        capacidade: 5,
        renovacao: "combate",
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },
  {
    numero: 51,
    id: "espirito-protetor",
    nome: "Espírito Protetor",
    custo: 3,
    categoria: "Magia",

    descricao:
      "Uma entidade invisível o guarda; uma vez por sessão, bloqueia um ataque fatal.",

    parametros: [],

    usos: {
      quantidade: 1,
      periodo: "sessao",
    },

    efeitos: [
      {
        tipo: "bloquear_ataque",
        condicoes: [
          {
            tipo: "ataque_fatal",
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
    numero: 52,
    id: "imunidade-natural",
    nome: "Imunidade Natural",
    custo: 3,
    categoria: "Sobrevivência",

    descricao: "Imune a doenças e venenos naturais.",

    parametros: [],

    efeitos: [
      {
        tipo: "imunidade",
        alvo: "efeito",
        contexto: ["doenca", "veneno"],
        origem: "natural",
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 53,
    id: "corpo-etereo",
    nome: "Corpo Etéreo",
    custo: 4,
    categoria: "Magia",

    descricao:
      "Pode se tornar intangível por 1 turno, evitando qualquer ataque físico. 3 vezes por dia.",

    parametros: [],

    usos: {
      quantidade: 3,
      periodo: "dia",
    },

    efeitos: [
      {
        tipo: "intangibilidade",
        duracao: 1,
        unidade: "turno",
        contexto: ["ataque_fisico"],
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 54,
    id: "afinidade-elemental-avancada",
    nome: "Afinidade Elemental Avançada",
    custo: 4,
    categoria: "Magia",

    descricao:
      "Dobra o efeito de magias de seu elemento (ex: fogo causa o dobro de dano).",

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
        tipo: "multiplicador_efeito",
        valor: 2,
        contexto: ["magia_elemental"],
        alvoParametro: "elemento",
      },
    ],

    repeticoes: {
      permitido: true,
      maximo: 4,
    },
  },

  {
    numero: 55,
    id: "vontade-dos-deuses",
    nome: "Vontade dos Deuses",
    custo: 4,
    categoria: "Magia",

    descricao:
      "Uma vez por campanha, pode pedir uma intervenção divina — o Mestre decide o efeito.",

    parametros: [],

    usos: {
      quantidade: 1,
      periodo: "campanha",
    },

    efeitos: [
      {
        tipo: "habilidade_especial",
        automatizavel: false,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 56,
    id: "dom-empatico",
    nome: "Dom Empático",
    custo: 3,
    categoria: "Social",

    descricao:
      "Sente emoções e intenções de pessoas próximas. Recebe +2 em testes sociais relacionados a isso.",

    parametros: [],

    efeitos: [
      {
        tipo: "percepcao_especial",
        contexto: ["emocao", "intencao"],
        alcance: "proximo",
      },
      {
        tipo: "bonus_teste",
        valor: 2,
        contexto: ["interacao_social", "empatia"],
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 57,
    id: "regeneracao-de-energia",
    nome: "Regeneração de Energia",
    custo: 3,
    categoria: "Magia",

    descricao: "Recupera +2 de mana a cada turno.",

    parametros: [],

    efeitos: [
      {
        tipo: "recuperacao_recurso",
        recurso: "mana",
        valor: 2,
        periodo: "turno",
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 58,
    id: "mestre-das-sombras",
    nome: "Mestre das Sombras",
    custo: 4,
    categoria: "Magia",

    descricao:
      "Pode fundir-se às sombras por até 3 turnos, ficando invisível em áreas escuras.",

    parametros: [],

    efeitos: [
      {
        tipo: "invisibilidade",
        duracao: 3,
        unidade: "turno",
        condicoes: [
          {
            tipo: "ambiente",
            valor: "escuro",
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
    numero: 59,
    id: "passo-dimensional",
    nome: "Passo Dimensional",
    custo: 4,
    categoria: "Magia",

    descricao:
      "Pode se teleportar até 10 metros como ação bônus, uma vez por combate.",

    parametros: [],

    usos: {
      quantidade: 1,
      periodo: "combate",
    },

    efeitos: [
      {
        tipo: "teleporte",
        alcance: 10,
        unidade: "metros",
        automatizavel: false,
      },
    ],

    repeticoes: {
      permitido: false,
      maximo: 1,
    },
  },

  {
    numero: 60,
    id: "olhar-intimidador",
    nome: "Olhar Intimidador",
    custo: 3,
    categoria: "Social",

    descricao:
      "Na primeira vez que o encararem, inimigos devem testar coragem usando Espírito.",

    parametros: [],

    efeitos: [
      {
        tipo: "forcar_teste",
        atributo: "espirito",
        contexto: ["coragem"],
        alvo: "inimigo",
        condicoes: [
          {
            tipo: "primeiro_contato",
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
    numero: 61,
    id: "voar",
    nome: "Voar",
    custo: 3,
    categoria: "Movimento",

    descricao:
      "Possui capacidade de voar. Sua movimentação é triplicada enquanto estiver voando.",

    parametros: [],

    efeitos: [
      {
        tipo: "movimento_especial",
        modo: "voo",
      },
      {
        tipo: "multiplicador_movimento",
        valor: 3,
        condicoes: [
          {
            tipo: "movimento",
            valor: "voando",
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
