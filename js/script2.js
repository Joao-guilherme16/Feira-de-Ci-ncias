let pontos = {};
let perguntaAtual = 0;

const professores = [
  "Ronaldo",
  "Júlio",
  "Heitor",
  "Ibsen",
  "Janice",
  "Noboru",
  "Kamyla",
  "Ítalo",
  "Guilherme",
  "Carolina",
  "Marcela",
  "LaSalvia",
  "Solange",
];

const fotoProfessores = {
  Ronaldo: "img/novoProfessor/semfotoMasculina.png",
  Júlio: "img/novoProfessor/semfotoMasculina.png",
  Heitor: "img/novoProfessor/semfotoMasculina.png",
  Ibsen: "img/novoProfessor/semfotoMasculina.png",
  Janice: "img/novoProfessor/semfotoFeminina.png",
  Noboru: "img/novoProfessor/semfotoMasculina.png",
  Kamyla: "img/novoProfessor/kamyla.jpeg",
  Ítalo: "img/novoProfessor/semfotoMasculina.png",
  Guilherme: "img/novoProfessor/guilherme.png",
  Carolina: "img/novoProfessor/carolina.jpg",
  Marcela: "img/novoProfessor/semfotoFeminina.png",
  LaSalvia: "img/novoProfessor/semfotoFeminina.png",
  Solange: "img/novoProfessor/solange.png",
};

const descricoesProfessores = {
  Ronaldo:
    "Explicativo, paciente e dedicado a fazer com que todos entendam o conteúdo.",

  Júlio:
    "Prático, amigável e próximo da turma, sempre deixando o aprendizado mais leve.",

  Heitor:
    "Comunicativo, expressivo e muito envolvido em compartilhar o que sabe.",

  Ibsen:
    "Bem-humorado, descontraído e sempre capaz de deixar o ambiente mais divertido.",

  Janice:
    "Organizada, objetiva e planejada, gosta de manter tudo bem estruturado.",

  Noboru:
    "Persistente, dedicado e incentivador da prática, sempre buscando fazer você evoluir.",

  Kamyla:
    "Reflexiva, crítica e atenta às questões sociais e ao contexto das situações.",

  Ítalo:
    "Tranquilo, prestativo e ligado a atividades práticas e ao uso da tecnologia.",

  Guilherme:
    "Esforçado, dedicado e comprometido em fazer tudo da melhor maneira possível.",

  Carolina:
    "Justa, flexível e compreensiva, buscando sempre equilibrar as situações.",

  Marcela:
    "Expressiva, criativa e aberta ao diálogo e à troca de diferentes opiniões.",

  LaSalvia:
    "Firme, responsável e comprometido com a organização e o bom funcionamento das coisas.",

  Solange:
    "Descontraída, criativa e acolhedora, trazendo leveza para o ambiente.",
};

professores.forEach(function (professor) {
  pontos[professor] = 0;
});

const perguntas = [
  {
    pergunta:
      "Quando você precisa aprender algo novo, qual jeito combina mais com você?",
    alternativas: [
      {
        texto: "Gosto de entender bem o assunto antes de começar.",
        professor: "Ronaldo",
      },
      {
        texto: "Prefiro aprender fazendo e colocando a mão na massa.",
        professor: "Júlio",
      },
      {
        texto:
          "Gosto de explicar minhas ideias e conversar bastante sobre o assunto.",
        professor: "Heitor",
      },
      {
        texto: "Aprendo melhor praticando e fazendo exercícios.",
        professor: "Ibsen",
      },
    ],
  },

  {
    pergunta: "Você recebeu uma tarefa difícil. Qual seria sua atitude?",
    alternativas: [
      {
        texto: "Organizaria tudo e seguiria um plano.",
        professor: "Janice",
      },
      {
        texto: "Praticaria bastante até conseguir dominar o assunto.",
        professor: "Noboru",
      },
      {
        texto:
          "Tentaria entender o contexto e o que existe por trás do problema.",
        professor: "Kamyla",
      },
      {
        texto: "Procuraria uma maneira simples e prática de resolver.",
        professor: "Ítalo",
      },
    ],
  },

  {
    pergunta: "Qual dessas características mais combina com você?",
    alternativas: [
      {
        texto: "Sou dedicado e não desisto facilmente.",
        professor: "Guilherme",
      },
      {
        texto: "Gosto de tratar as pessoas de forma justa.",
        professor: "Carolina",
      },
      {
        texto: "Tenho um jeito próprio e marcante de me expressar.",
        professor: "Marcela",
      },
      {
        texto: "Gosto de deixar o ambiente mais leve e descontraído.",
        professor: "Solange",
      },
    ],
  },

  {
    pergunta:
      "Quando alguém não entende algo que você explicou, o que você faria?",
    alternativas: [
      {
        texto: "Explicaria novamente, passo a passo, até ficar claro.",
        professor: "Ronaldo",
      },
      {
        texto: "Iria ajudar a pessoa e tentaria explicar de outra maneira.",
        professor: "Júlio",
      },
      {
        texto: "Continuaria conversando e desenvolvendo a explicação.",
        professor: "Heitor",
      },
      {
        texto:
          "Tentaria deixar a situação mais descontraída e depois ajudaria.",
        professor: "Ibsen",
      },
    ],
  },

  {
    pergunta: "Como você organizaria uma aula ou apresentação?",
    alternativas: [
      {
        texto:
          "Planejaria tudo com antecedência e deixaria cada etapa organizada.",
        professor: "Janice",
      },
      {
        texto: "Prepararia bastante coisa para praticar e testar.",
        professor: "Noboru",
      },
      {
        texto: "Usaria exemplos relacionados à sociedade e ao cotidiano.",
        professor: "Kamyla",
      },
      {
        texto:
          "Prepararia uma atividade prática para colocar o conhecimento em ação.",
        professor: "Ítalo",
      },
    ],
  },

  {
    pergunta: "Em um trabalho em grupo, qual papel mais combina com você?",
    alternativas: [
      {
        texto:
          "A pessoa que se dedica para garantir que o trabalho fique bem feito.",
        professor: "Guilherme",
      },
      {
        texto: "A pessoa que tenta encontrar uma solução boa para todos.",
        professor: "Carolina",
      },
      {
        texto:
          "A pessoa que traz ideias e participa bastante das discussões.",
        professor: "Marcela",
      },
      {
        texto: "A pessoa que ajuda a deixar o grupo mais à vontade.",
        professor: "Solange",
      },
    ],
  },

  {
    pergunta: "Qual dessas atitudes mais combina com você?",
    alternativas: [
      {
        texto: "Gosto de manter o foco e ajudar a manter tudo organizado.",
        professor: "LaSalvia",
      },
      {
        texto:
          "Gosto de analisar as situações e pensar sobre diferentes pontos de vista.",
        professor: "Ibsen",
      },
      {
        texto: "Acho importante que todos sejam tratados de forma justa.",
        professor: "Carolina",
      },
      {
        texto: "Prefiro resolver as situações com tranquilidade e bom humor.",
        professor: "Solange",
      },
    ],
  },

  {
    pergunta: "Qual dessas formas de estudar combina mais com você?",
    alternativas: [
      {
        texto: "Estudar com explicações e anotações bem organizadas.",
        professor: "Ronaldo",
      },
      {
        texto: "Estudar junto com outras pessoas e trocar ideias.",
        professor: "Júlio",
      },
      {
        texto: "Fazer muitos exercícios para praticar.",
        professor: "Noboru",
      },
      {
        texto: "Relacionar o conteúdo com situações do mundo real.",
        professor: "Kamyla",
      },
    ],
  },

  {
    pergunta:
      "Durante uma discussão, alguém apresenta uma opinião diferente da sua. Como você reagiria?",
    alternativas: [
      {
        texto: "Manteria meu posicionamento e explicaria meus argumentos.",
        professor: "LaSalvia",
      },
      {
        texto: "Tentaria analisar os argumentos antes de responder.",
        professor: "Marcela",
      },
      {
        texto: "Levaria a conversa de forma leve e descontraída.",
        professor: "Ibsen",
      },
      {
        texto:
          "Tentaria entender o contexto e de onde aquela opinião surgiu.",
        professor: "Kamyla",
      },
    ],
  },

  {
    pergunta: "Qual dessas situações mais combina com você?",
    alternativas: [
      {
        texto: "Gosto de explicar bastante e compartilhar o que sei.",
        professor: "Heitor",
      },
      {
        texto:
          "Prefiro observar, ajudar quando necessário e aprender na prática.",
        professor: "Ítalo",
      },
      {
        texto: "Reviso meu trabalho para ter certeza de que ficou bem feito.",
        professor: "Guilherme",
      },
      {
        texto: "Procuro uma solução que funcione bem para todo mundo.",
        professor: "Carolina",
      },
    ],
  },
];

const quiz = document.getElementById("quiz");

function mostrarPergunta() {
  quiz.innerHTML = perguntas[perguntaAtual].pergunta;

  perguntas[perguntaAtual].alternativas.forEach(function (alternativa) {
    const botao = document.createElement("button");

    botao.textContent = alternativa.texto;

    botao.className =
      "block w-full text-left bg-white border border-gray-300 rounded-lg p-3 mb-2 hover:bg-gray-300 transition";

    quiz.appendChild(botao);

    botao.addEventListener("click", function () {
      console.log(alternativa);

      const professorEscolhido = alternativa.professor;

      pontos[professorEscolhido]++;

      console.log(pontos);

      perguntaAtual++;

      if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
      } else {
        let maiorPontuacao = 0;
        let professorResultado = "";

        professores.forEach(function (professor) {
          if (pontos[professor] > maiorPontuacao) {
            maiorPontuacao = pontos[professor];
            professorResultado = professor;
          }
        });

        let professorOuProfessora;

        if (
          professorResultado == "Janice" ||
          professorResultado == "Kamyla" ||
          professorResultado == "Carolina" ||
          professorResultado == "Marcela" ||
          professorResultado == "Solange"
        ) {
          professorOuProfessora = "professora";
        } else {
          professorOuProfessora = "professor";
        }

        quiz.innerHTML = `
          <div class="text-center">
            <h2 class="text-2xl font-bold">
              Quiz terminado!
            </h2>

            <p class="text-xl mt-2">
              Você é a ${professorOuProfessora}
              <strong>${professorResultado}</strong>!
            </p>

            <p class="text-base mt-4 text-gray-600">
              ${descricoesProfessores[professorResultado]}
            </p>

            <img
              src="${fotoProfessores[professorResultado]}"
              alt="${professorOuProfessora} ${professorResultado}"
              class="w-64 h-64 object-cover rounded-xl mx-auto mt-6 shadow-lg"
            >
          </div>
        `;
      }
    });
  });
}

mostrarPergunta();