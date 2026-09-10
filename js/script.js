let pontos = 0;
let perguntaAtual = 0;

const perguntas = [
  {
    pergunta: "Qual é um dos principais objetivos de uma Feira de Profissões?",
    alternativas: [
      "A) Apresentar possibilidades de cursos e carreiras",
      "B) Realizar apenas competições esportivas",
      "C) Substituir todas as aulas do semestre",
      "D) Avaliar somente o desempenho dos professores",
    ],
    respostaCorreta: 0,
  },

  {
    pergunta: "Por que é importante conhecer diferentes profissões?",
    alternativas: [
      "A) Para conhecer diferentes possibilidades de carreira",
      "B) Para não precisar estudar",
      "C) Para escolher qualquer profissão",
      "D) Para substituir a escola",
    ],
    respostaCorreta: 0,
  },

  {
    pergunta: "O que uma pessoa pode descobrir ao participar de uma Feira de Profissões?",
    alternativas: [
      "A) Apenas informações sobre esportes",
      "B) Diferentes áreas de atuação profissional",
      "C) Somente matérias escolares",
      "D) Apenas oportunidades de viagens",
    ],
    respostaCorreta: 1,
  },

  {
    pergunta: "Qual fator é importante considerar ao escolher uma profissão?",
    alternativas: [
      "A) Apenas o salário",
      "B) A profissão escolhida pelos amigos",
      "C) Somente a opinião das redes sociais",
      "D) Seus interesses, habilidades e objetivos",
    ],
    respostaCorreta: 3,
  },

  {
    pergunta: "O que são habilidades profissionais?",
    alternativas: [
      "A) Capacidades que uma pessoa desenvolve e utiliza em uma profissão",
      "B) Apenas conhecimentos adquiridos na infância",
      "C) Atividades feitas somente nas horas de lazer",
      "D) Regras que todas as profissões possuem",
    ],
    respostaCorreta: 0,
  },

  {
    pergunta: "Por que pesquisar sobre uma profissão antes de escolhê-la?",
    alternativas: [
      "A) Para evitar estudar sobre a área",
      "B) Para conhecer suas características e exigências",
      "C) Para escolher a profissão mais fácil",
      "D) Para seguir a mesma carreira dos amigos",
    ],
    respostaCorreta: 1,
  },
  {
    pergunta: "O que pode ser apresentado em uma Feira de Profissões?",
    alternativas: [
      "A) Apenas jogos eletrônicos",
      "B) Somente competições esportivas",
      "C) Apenas atividades de entretenimento",
      "D) Cursos, profissões e possibilidades de carreira",
    ],
    respostaCorreta: 3,
  },

  {
    pergunta: "Qual é a importância da educação para uma carreira profissional?",
    alternativas: [
      "A) Contribuir para o desenvolvimento de conhecimentos e habilidades",
      "B) Servir apenas para conseguir boas notas",
      "C) Evitar experiências profissionais",
      "D) Substituir completamente a prática profissional",
    ],
    respostaCorreta: 0,
  },

  {
    pergunta: "O que significa escolher uma carreira de forma consciente?",
    alternativas: [
      "A) Escolher sem pesquisar sobre a profissão",
      "B) Considerar interesses, habilidades, oportunidades e objetivos pessoais",
      "C) Escolher apenas pela opinião de outras pessoas",
      "D) Escolher a profissão que está na moda",
    ],
    respostaCorreta: 1
  },

  {
    pergunta: "Por que conhecer diferentes profissões pode ajudar um estudante?",
    alternativas: [
      "A) Pode ajudar a identificar áreas que combinam com seus interesses",
      "B) Faz com que ele não precise estudar",
      "C) Garante que ele terá emprego imediatamente",
      "D) Permite escolher qualquer profissão sem preparação",
    ],
    respostaCorreta: 0
  }

];

const quiz = document.getElementById("quiz");

function mostrarPergunta() {
  quiz.innerHTML = perguntas[perguntaAtual].pergunta;

  perguntas[perguntaAtual].alternativas.forEach(function (alternativa, index) {
    const botao = document.createElement("button");

    botao.textContent = alternativa;

    // Apenas para organizar visualmente os botões
    botao.className =
      "block w-full text-left bg-white border border-gray-300 rounded-lg p-3 mb-2 hover:bg-gray-300 transition";

    quiz.appendChild(botao);

    botao.addEventListener("click", function () {
      console.log(alternativa);

      if (index === perguntas[perguntaAtual].respostaCorreta) {
        pontos++;
        console.log(pontos);
      }

      perguntaAtual++;

      if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
      } else {
        quiz.innerHTML =
          "Quiz terminado! Você acertou " +
          pontos +
          " de " +
          perguntas.length +
          " perguntas.";
      }
    });
  });
}

mostrarPergunta();
