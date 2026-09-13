let pontos = {};
let perguntaAtual = 0;

const professores = [
  "Ronaldo", // 1
  "Júlio", // 2
  "Heitor", // 3
  "Ibsen", // 4
  "Janice", // 5
  "Noboru", // 6
  "Kamyla", // 7
  "Ítalo", // 8
  "Guilherme", // 9
  "Carolina", // 10
  "Marcela", // 11
  "La Salvia", // 12
  "Solange", // 13
];

const fotoProfessores = {
  ronaldo: "",
  júlio: "",
  heitor: "",
  ibsen: "",
  janice: "",
  noboru: "",
  kamyla: "",
  italo: "",
  guilherme: "",
  carolina: "",
  marcela: "",
  laSalvia: "",
  solange: "",
};

professores.forEach(function (professor) {
  pontos[professor] = 0;
});

const perguntas = [
  {
    pergunta: "Como você prefere uma aula?",
    alternativas: [
      {
        texto: "Com bastante explicação",
        professor: "Ronaldo",
      },
      {
        texto: "Com atividades práticas",
        professor: "Júlio",
      },
      {
        texto: "Com bastante conversa",
        professor: "Heitor",
      },
      {
        texto: "Com muitos exercícios",
        professor: "Ibsen",
      },
    ],
  },

  {
    pergunta: "Como seria seu material de aula?",
    alternativas: [
      {
        texto: "Slides até a morte",
        professor: "Janice",
      },
      {
        texto: "99 exercícios",
        professor: "Noboru",
      },
      {
        texto: "Atividades impressas",
        professor: "Kamyla",
      },
      {
        texto: "Explicações simples e diretas",
        professor: "Ítalo",
      },
    ],
  },

  {
    pergunta:
      "Se você pudesse escolher uma característica para ter como professor, qual seria?",
    alternativas: [
      {
        texto: "Esforçado",
        professor: "Guilherme",
      },
      {
        texto: "Justo",
        professor: "Carolina",
      },
      {
        texto: "Ter um jeito marcante de falar",
        professor: "Marcela",
      },
      {
        texto: "Descontraído",
        professor: "Solange",
      },
    ],
  },

  {
    pergunta:
      "Você precisa ensinar um assunto que a maioria da turma não entendeu. Qual seria sua estratégia?",
    alternativas: [
      {
        texto: "O aluno teria medo de tirar sua dúvida",
        professor: "La Salvia",
      },
      {
        texto: "Voltaria todo o raciocínio",
        professor: "Ronaldo",
      },
      {
        texto: "Iria até sua mesa e explicaria individualmente",
        professor: "Júlio",
      },
      {
        texto: "Mudaria de assunto rapidamente",
        professor: "Heitor",
      },
    ],
  },

  {
    pergunta: "Qual dessas frases mais combina com você?",
    alternativas: [
      {
        texto: "Crítica, análise, dúvida ou sugestão?",
        professor: "Ibsen",
      },
      {
        texto: "Todos, abram o caderno, agora.",
        professor: "Janice",
      },
      {
        texto: "Se você ficar no joguinho, a nota vai para o joguinho.",
        professor: "Noboru",
      },
      {
        texto: "Isso é uma construção social.",
        professor: "Kamyla",
      },
    ],
  },

  {
    pergunta: "Qual seria seu método avaliativo?",
    alternativas: [
      {
        texto:
          "De dois em dois meses levaria os alunos ao laboratório para fazer uma atividade simples",
        professor: "Ítalo",
      },
      {
        texto: "Passaria testinhos de 1 ponto, lista de exercícios e provas",
        professor: "Guilherme",
      },
      {
        texto:
          "Faria apresentações de trabalho e deixaria o aluno escolher a data",
        professor: "Carolina",
      },
      {
        texto: "Faria uma prova em que o aluno pode escolher as questões",
        professor: "Marcela",
      },
    ],
  },

  {
    pergunta: "O que mais te incomodaria como professor?",
    alternativas: [
      {
        texto: "Desrespeitar as artes apresentadas",
        professor: "Solange",
      },
      {
        texto: "Falar antes da chamada",
        professor: "La Salvia",
      },
      {
        texto: "Atrapalhar quem realmente quer aprender",
        professor: "Ronaldo",
      },
      {
        texto: "Danificar os aparelhos eletrônicos",
        professor: "Júlio",
      },
    ],
  },

  {
    pergunta: "Um aluno diz que não gosta da matéria. O que você faria?",
    alternativas: [
      {
        texto: "Implicaria com o aluno nas próximas aulas",
        professor: "Heitor",
      },
      {
        texto: "Pediria um e-mail sobre suas opiniões",
        professor: "Ibsen",
      },
      {
        texto: "Continuaria com a matéria normalmente",
        professor: "Janice",
      },
      {
        texto: "Procuraria 99 motivos para o aluno gostar da matéria",
        professor: "Noboru",
      },
    ],
  },

  {
    pergunta:
      "O que você faria se terminasse todo o conteúdo planejado antes do final da aula?",
    alternativas: [
      {
        texto: "Liberaria todos os alunos",
        professor: "Kamyla",
      },
      {
        texto: "Permitiria o uso livre dos computadores",
        professor: "Ítalo",
      },
      {
        texto: "Esperaria na sala sem passar nada",
        professor: "Guilherme",
      },
      {
        texto: "Faria a chamada demoradamente até o fim da aula",
        professor: "Carolina",
      },
    ],
  },

  {
    pergunta:
      "Se um aluno desafiasse sua opinião durante uma discussão, como reagiria?",
    alternativas: [
      {
        texto:
          "Procuraria entender o lado do aluno e complementar o debate com pesquisas",
        professor: "Marcela",
      },
      {
        texto: "Apenas respeitaria a opinião do aluno e voltaria a dar aula",
        professor: "Solange",
      },
      {
        texto: "Corrigiria com uma postura firme",
        professor: "La Salvia",
      },
      {
        texto: "Apenas não me importaria",
        professor: "Ronaldo",
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

        quiz.innerHTML = `
          <div class="text-center">

            <h2 class="text-2xl font-bold">
              Quiz terminado!
            </h2>

            <p class="text-xl mt-2">
              Você é o professor 
              <strong>${professorResultado}</strong>!
            </p>

            <img 
              src="${fotoProfessores[professorResultado]}" 
              alt="Professor ${professorResultado}"
              class="w-64 h-64 object-cover rounded-xl mx-auto mt-6 shadow-lg"
            >

          </div>
        `;
      }
    });
  });
}

mostrarPergunta();